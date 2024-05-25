import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import axios from "axios";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token");

  // If no token is found, redirect to login page
  if (!token?.value) {
    console.log('If no token is found, redirect to login page')

    return NextResponse.redirect(new URL("/login", request.url));
  }

  try {
    // Verify the token
    const response = await axios.post(
      "https://abissinia-backend.vercel.app/api/auth/verify-token",
      { token: token?.value }
    );

    // If the token verification is not successful, redirect to login page
    if (response.status !== 200) {
      console.log('token verification is not successful')
      return NextResponse.redirect(new URL("/login", request.url));
    }
  } catch (error: unknown) {
    // Handle different types of errors
    if (axios.isAxiosError(error) && error.response) {
      const { status } = error.response;

      // If authorization error, redirect to login page
      if (status === 401) {
        console.log('If authorization error, redirect to login page')
        return NextResponse.redirect(new URL("/login", request.url));
      }

      // If server error, redirect to the previous page
      if (status >= 500 && status < 600) {
        console.log('server error, redirect to the previous page')
        const referer = request.headers.get("referer") || "/";
        return NextResponse.redirect(referer);
      }
    }

    // For other errors, redirect to login page as a fallback
    return NextResponse.redirect(new URL("/login", request.url));
  }

  // Proceed to the next middleware or the requested page
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
