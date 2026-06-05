import { auth } from "@/lib/auth";
import { NextResponse } from "next/server";

export default auth(function proxy(req) {
    const token = req.auth;
    const isAuth = !!token;
    const isAuthPage = req.nextUrl.pathname.startsWith("/admin/login");

    if (isAuthPage) {
        if (isAuth) {
            return NextResponse.redirect(new URL("/admin/dashboard", req.url));
        }
        return null;
    }

    if (!isAuth) {
        let from = req.nextUrl.pathname;
        if (req.nextUrl.search) {
            from += req.nextUrl.search;
        }
        return NextResponse.redirect(
            new URL(`/admin/login?callbackUrl=${encodeURIComponent(from)}`, req.url)
        );
    }

    if (
        req.nextUrl.pathname.startsWith("/admin") &&
        req.nextUrl.pathname !== "/admin/login" &&
        token?.user?.role !== "admin" &&
        token?.user?.role !== "editor"
    ) {
        return NextResponse.rewrite(new URL("/403", req.url));
    }
});

export const config = {
    matcher: ["/admin/:path*", "/dashboard/:path*"],
};
