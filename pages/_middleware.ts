import { NextRequest, NextResponse } from 'next/server';
import { loginRequired } from '@config/middleware';
import { checkJwtToken } from '@utils/utils';

export function middleware(req: NextRequest) {
  if (!req.page.name || !loginRequired.includes(req.page.name)) {
    return;
  }

  if (req.cookies.jwt) {
    // && checkJwtToken(req.cookies.jwt)
    // FIXME: Can't check JWT Token because `eval` is
    // is not allowed in Middlewares
    return NextResponse.next();
  }

  return NextResponse.redirect('/login');
}
