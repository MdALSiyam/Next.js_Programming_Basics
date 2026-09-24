import { NextResponse } from 'next/server';

export function middleware(request) {
  // Check auth status from cookies or custom header
  const isAuthenticated = request.cookies.get('auth_token')?.value;
  const isDashboardRoute = request.nextUrl.pathname.startsWith('/Part-6/protected');

  // Redirect unauthenticated user attempting to visit protected route
  if (isDashboardRoute && !isAuthenticated) {
    return NextResponse.redirect(new URL('/Part-6/login', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/Part-6/protected/:path*'],
};