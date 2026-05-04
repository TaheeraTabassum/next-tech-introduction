import { NextResponse } from "next/server";

export function proxy(request) {
  const user = {
    role: "user",
    emmail: "test@mail.com",
  };
  let isAdmin = user.role === "admin";
  let inAboutPage = request.nextUrl.pathname.startsWith("/about");

  if (inAboutPage && !isAdmin)
    return NextResponse.redirect(new URL("/", request.url));
    // return NextResponse.rewrite(new URL("/", request.url));
  return NextResponse.next();
}

