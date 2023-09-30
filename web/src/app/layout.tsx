import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Providers from "./providers";

import { cn } from "@/shared/utils";
import { Toaster } from "@/shared/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

const APP_NAME = "Dobriki PWA";
const APP_DEFAULT_TITLE = "Dobriki";
const APP_TITLE_TEMPLATE = "%s - Dobriki-app";
const APP_DESCRIPTION = "Dobriki are not Bobriki";

export const metadata: Metadata = {
  applicationName: APP_NAME,
  title: {
    default: APP_DEFAULT_TITLE,
    template: APP_TITLE_TEMPLATE,
  },
  description: APP_DESCRIPTION,
  manifest: "/manifest.json",
  themeColor: "#FFFFFF",
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: APP_DEFAULT_TITLE,
  },
  formatDetection: {
    telephone: false,
  },
  openGraph: {
    type: "website",
    siteName: APP_NAME,
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
  twitter: {
    card: "summary",
    title: {
      default: APP_DEFAULT_TITLE,
      template: APP_TITLE_TEMPLATE,
    },
    description: APP_DESCRIPTION,
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className={cn("pb-16", inter.className)}>
        <Providers>
          {children}
          <Toaster />
          <div className="h-[100vh] w-[100vw] bg-black fixed top-0 left-0 z-[99999] overflow-hidden device-hidden">
            сорямба ток мобильная версия
          </div>
        </Providers>
      </body>
    </html>
  );
}
