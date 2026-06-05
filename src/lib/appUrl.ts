const LOCALHOST_RE = /^https?:\/\/(localhost|127\.0\.0\.1)(:\d+)?\/?$/i;

export function getAppUrl(): string {
  const envUrl = process.env.NEXT_PUBLIC_APP_URL;

  if (envUrl && !LOCALHOST_RE.test(envUrl)) {
    return envUrl;
  }

  if (process.env.NODE_ENV === 'production') {
    return 'https://www.martechrise.ai';
  }

  return envUrl || 'http://localhost:3000';
}
