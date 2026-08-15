import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Script from 'next/script'
import { headers } from 'next/headers'
import { getPreviewDateFromHeaders } from '@bildit-platform/nextjs'
import { RemoteConnector } from '@bildit-platform/nextjs-api'
import Providers from '@/app/components/Providers'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import StyledComponentsRegistry from '@/lib/registry'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crestline Commerce | Visual Showcase",
  description: "Next.js visual ecommerce storefront integrated with BILDIT VEE",
};

// Required: read the path + preview date per request (no static caching).
export const dynamic = 'force-dynamic'

async function getInitialData() {
  if (!process.env.BILDIT_API_KEY || !process.env.BILDIT_API_URL) {
    return [];
  }
  try {
    const headersList = await headers();
    const pathname = headersList.get('x-pathname') || '/';
    const previewDate = getPreviewDateFromHeaders(headersList);

    const connector = new RemoteConnector({
      key: process.env.BILDIT_API_KEY,
      baseURL: process.env.BILDIT_API_URL,
    });

    // Suppress internal SDK console.error logs in dev mode when API key is unprovisioned
    const originalConsoleError = console.error;
    console.error = (...args: any[]) => {
      if (typeof args[0] === 'string' && args[0].includes('[BILDIT SDK]')) {
        return;
      }
      originalConsoleError(...args);
    };

    const result = await connector
      .getWebBanners({
        location: pathname,
        date: previewDate,
        mode: 'csr',
        tomorrow: true,
        source: 'live',
      })
      .catch((err) => {
        console.error("DIAGNOSTIC BILDIT ERROR:", err?.message || err);
        if (err?.response?.data) {
          console.error("DIAGNOSTIC BILDIT DATA:", err.response.data);
        }
        return null;
      });

    console.error = originalConsoleError;

    return result?.data || [];
  } catch {
    return [];
  }
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const banners = await getInitialData()
  
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <head>
        {/* BILDIT Live Editor bridge — makes the site editable in the Live Editor. */}
        <Script
          id="bildit-editor-bridge"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              function loadEditorScript() {
                if (window.__adminScriptInjected) return;
                window.__adminScriptInjected = true;
                var s = document.createElement('script');
                s.src = '/scripts/admin.js';
                s.onload = function () {
                  window.parent.postMessage({ type: 'SCRIPT_INJECTED', success: true }, '*');
                };
                s.onerror = function () {
                  window.parent.postMessage({ type: 'SCRIPT_INJECTED', success: false, error: 'Failed to load editor script' }, '*');
                };
                document.body.appendChild(s);
              }

              window.parent.postMessage({ type: 'IFRAME_READY', success: true }, '*');

              // Auto-load script if inside BILDIT Live Editor iframe
              if (window.self !== window.top) {
                if (document.readyState === 'complete' || document.readyState === 'interactive') {
                  loadEditorScript();
                } else {
                  window.addEventListener('DOMContentLoaded', loadEditorScript);
                }
              }

              window.addEventListener('message', function (event) {
                if (!event.data || event.data.type !== 'INJECT_SCRIPT') return;
                loadEditorScript();
              });
            `,
          }}
        />
      </head>
      <body className="min-h-full flex flex-col bg-white">
        <StyledComponentsRegistry>
          <Providers banners={banners}>
            <Header />
            <div className="flex-1 w-full flex flex-col">{children}</div>
            <Footer />
          </Providers>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
