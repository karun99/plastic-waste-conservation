'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function NotFound() {
  useEffect(() => {
    console.error('404: route not found');
  }, []);

  return (
    <div className="hero" style={{ textAlign: 'center' }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: 0 }}>404</h1>
      <p className="lede">Page not found</p>
      <p>
        The page you are looking for does not exist. Try going back to the home page.
      </p>
      <div className="btn-row" style={{ justifyContent: 'center' }}>
        <Link href="/" className="btn">
          Back to home
        </Link>
        <Link href="/case-studies" className="btn secondary">
          Browse case studies
        </Link>
      </div>
    </div>
  );
}
