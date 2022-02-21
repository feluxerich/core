import { NextRequest } from 'next/server';
import jwt from '@tsndr/cloudflare-worker-jwt';
import platform from 'platform';

class Vitals {
  worker(req: NextRequest) {
    return {
      nextUrl: req.nextUrl.href,
      ip: req.ip,
      connection: req.headers.get('connection'),
      cookies: {
        token: jwt.decode(req.cookies.token),
      },
      platform: JSON.parse(JSON.stringify(platform.parse(req.headers.get('user-agent')!))),
      acceptLanguage: req.headers.get('accept-language'),
    };
  }
}

export const vitals = new Vitals();
