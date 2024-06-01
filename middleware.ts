import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");
  const referer = request.headers.get("referer") || "/";

  // If no token is found, redirect to login page
  if (!token?.value) {
    console.log("If no token is found, redirect to login page");

    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token
    const response = await axios.post(
      "https://abissinia-backend.vercel.app/api/auth/verify-token",
      { token: token?.value }
    );

    // If the token verification is not successful, redirect to login page
    if (response.status === 401) {
      console.log("token verification is not successful");
      return NextResponse.redirect(referer);
    }
  } catch (error: unknown) {
    // Handle different types of errors
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response;

      // If authorization error, redirect to login page
      if (status === 401) {
        console.log("If authorization error, redirect to login page");
        return NextResponse.redirect(referer);
      }

      if (status >= 500 && status < 600) {
        console.log("server error, redirect to the previous page");
        return NextResponse.redirect(referer);
      }
    }

    return NextResponse.redirect(referer);
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
