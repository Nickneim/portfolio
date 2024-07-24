'use client'

import { AbstractIntlMessages, NextIntlClientProvider } from "next-intl";
import { ThemeProvider } from "next-themes";
import React from "react";

export function Providers({
  children,
  locale,
  messages
}: {
  children: React.ReactNode,
  locale: string,
  messages: AbstractIntlMessages
}) {
  return (
    <NextIntlClientProvider
      locale={locale}
      messages={messages}
    >
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
      >
        {children}
      </ThemeProvider>
    </NextIntlClientProvider>
  );
}