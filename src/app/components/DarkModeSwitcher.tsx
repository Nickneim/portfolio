"use client";
import { useTranslations } from "next-intl";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { FaLightbulb } from "react-icons/fa6";

export default function DarkModeSwitcher({className}: {className?: string}) {
  const t = useTranslations("DarkModeSwitcher")
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  const label = resolvedTheme === 'dark' ? t("go-light") : t("go-dark")

  useEffect(() =>  setMounted(true), [])
  return (mounted &&
    <button
      className={`flex flex-row ${className}`}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      <FaLightbulb aria-label={label} className="flex sm:hidden" />
      <p className="hidden sm:flex">{label}</p>
    </button>
  )
}