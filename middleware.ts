import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
//import { store } from "./app/store/store";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();
  // const state = store.getState();
  // const { user } = state.userState;
  // if (!user) {
  //   return NextResponse.redirect(new URL("/login", request.url));
  // }
  return response;
}
export const config = {
  matcher: [
    "/ticket-purchase/:path*",
    "/seat-selection/:path*",
    "/payment-processing/:path*",
    "/extras-selection/:path*",
  ],
};
