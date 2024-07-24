"use client"

import { useTranslations } from 'next-intl'
import { unstable_setRequestLocale } from 'next-intl/server'
import React from 'react'

export default function Description({params: {locale}}) {

  const t = useTranslations("HomePage")
  
  return (
    <p className="mb-4">
      {t('title')}
      {/* {`I'm a Vim enthusiast and tab advocate, finding unmatched efficiency in
      Vim's keystroke commands and tabs' flexibility for personal viewing
      preferences. This extends to my support for static typing, where its
      early error detection ensures cleaner code, and my preference for dark
      mode, which eases long coding sessions by reducing eye strain.`} */}
    </p>
  )
}
