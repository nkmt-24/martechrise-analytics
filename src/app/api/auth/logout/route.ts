import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST() {
    const session = await auth();

    if (session) {
        // Client-side signout handles cookie clearing, 
        // server-side we can just return success or invalidate tokens if using DB sessions
        return NextResponse.json({ message: "Logged out successfully" }, { status: 200 });
    }

    return NextResponse.json({ message: "No session found" }, { status: 401 });
}
