import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  const response = NextResponse.next()

  // Additional security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')

  // Prevent clickjacking
  response.headers.set('Content-Security-Policy', "frame-ancestors 'self'")

  // Validate and sanitize request
  const url = request.nextUrl.clone()
  
  // Block suspicious patterns
  const suspiciousPatterns = [
    /\.\./, // Path traversal
    /<script/i, // Script tags
    /javascript:/i, // JavaScript protocol
    /on\w+\s*=/i, // Event handlers
  ]

  const pathname = url.pathname
  const search = url.search

  // Check for suspicious patterns in URL
  if (suspiciousPatterns.some(pattern => pattern.test(pathname + search))) {
    return new NextResponse('Forbidden', { status: 403 })
  }

  return response
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}

