import { enhanceMiddlewareWithBildit } from '@bildit-platform/nextjs'
import { NextRequest, NextResponse } from 'next/server'

async function customMiddleware(request: NextRequest) {
  // Surface the request path so scheduled content can be matched by location.
  const requestHeaders = new Headers(request.headers)
  requestHeaders.set('x-pathname', request.nextUrl.pathname)
  return NextResponse.next({ request: { headers: requestHeaders } })
}

// enhanceMiddlewareWithBildit adds VEE preview-date support.
export const middleware = enhanceMiddlewareWithBildit(customMiddleware)

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
}
