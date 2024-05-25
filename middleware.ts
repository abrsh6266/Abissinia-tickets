import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  console.log("token ",token);
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    const response = await axios.post(
      "https://abissinia-backend.vercel.app/api/auth/verify-token",
      { token: token?.value }
    );

    if (response.status !== 200) {
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/profile",
    "/ticket-purchase/:path*",
    "/seat-selection/:path*",
    "/payment-processing/:path*",
    "/extras-selection/:path*",
  ],
};
