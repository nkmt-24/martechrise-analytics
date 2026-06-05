import { NextResponse } from 'next/server';
import { Resend } from 'resend';

// Initialize Resend with the API key from environment variables
if (!process.env.RESEND_API_KEY) {
    throw new Error("Missing RESEND_API_KEY");
}
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // Parse the incoming JSON body
        const body = await req.json();
        
        const {
            name,
            email,
            websiteUrl,
            monthlyTraffic,
            helpNeeded,
            projectDetails,
            biggestChallenge
        } = body;

        // 1. Backend Validation
        // Check for required fields
        if (!name || !email || !websiteUrl || !monthlyTraffic || !helpNeeded) {
            return NextResponse.json(
                { error: 'Missing required fields' },
                { status: 400 }
            );
        }

        // Basic email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email address' },
                { status: 400 }
            );
        }

        // Basic URL validation
        const cleanWebsite = websiteUrl.trim();
        try {
            new URL(cleanWebsite);
        } catch (_) {
            return NextResponse.json(
                { error: 'Invalid website URL' },
                { status: 400 }
            );
        }

        const senderFormat = 'MarTechRise <audit@martechrise.ai>';
        
        // Use a fallback to a default email if CONTACT_EMAIL is not set
        const internalNotificationEmail = process.env.CONTACT_EMAIL || 'anitha.phoenix@gmail.com';

        // 2. Send emails using Resend

        // A) Internal notification email to business owner
        const internalEmailPromise = resend.emails.send({
            from: senderFormat,
            to: [internalNotificationEmail],
            subject: `New Audit Request from ${name}`,
            html: `
                <h2>New Free Audit Request</h2>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Website:</strong> <a href="${websiteUrl}">${websiteUrl}</a></p>
                <p><strong>Monthly Traffic:</strong> ${monthlyTraffic}</p>
                <p><strong>Help Needed:</strong> ${helpNeeded}</p>
                <p><strong>Project Details:</strong><br/> ${projectDetails || 'N/A'}</p>
                <p><strong>Biggest Challenge:</strong><br/> ${biggestChallenge || 'N/A'}</p>
            `,
        });

        // B) Confirmation email to user
        const userEmailPromise = resend.emails.send({
            from: senderFormat,
            to: [email],
            subject: 'We received your audit request! - MarTechRise',
            html: `
                <p>Hi ${name},</p>
                <p>Thank you for requesting a free analytics technical audit.</p>
                <p>Our team is currently reviewing your website (${websiteUrl}) and the details you provided. We will get back to you with your comprehensive report within 24–48 hours.</p>
                <br/>
                <p>Best regards,</p>
                <p><strong>The MarTechRise Team</strong></p>
            `,
        });

        // Execute both email requests in parallel
        const [internalResult, userResult] = await Promise.all([internalEmailPromise, userEmailPromise]);

        if (internalResult.error || userResult.error) {
            console.error('Resend Error (Internal):', internalResult.error);
            console.error('Resend Error (User):', userResult.error);
            return NextResponse.json(
                {
                    internalError: internalResult.error,
                    userError: userResult.error
                },
                { status: 500 }
            );
        }

        // Return success response
        return NextResponse.json(
            { message: 'Audit request submitted successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Audit submission error:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
