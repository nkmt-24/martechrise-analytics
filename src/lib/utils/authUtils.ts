import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";

export async function getSession() {
    return await auth();
}

export async function getCurrentUser() {
    const session = await getSession();
    return session?.user;
}

export async function requireAuth() {
    const session = await getSession();
    if (!session) {
        redirect("/admin/login");
    }
    return session;
}

export async function requireAdmin() {
    const session = await getSession();
    if (!session || session.user.role !== "admin") {
        redirect("/admin/login");
    }
    return session;
}
