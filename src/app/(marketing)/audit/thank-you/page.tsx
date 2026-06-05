import { Metadata } from 'next';
import ThankYouClient from "./ThankYouClient";

export const metadata: Metadata = {
    title: "Request Confirmed | MarTechRise",
    description: "Thank you for requesting an audit.",
};

export default function ThankYouPage() {
    return <ThankYouClient />;
}
