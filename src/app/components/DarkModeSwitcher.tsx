"use client";
import { useTheme } from "next-themes"
import { useEffect, useState } from "react"

export default function DarkModeSwitcher({className}: {className?: string}) {
  const [mounted, setMounted] = useState(false)
  const { setTheme, resolvedTheme } = useTheme()

  useEffect(() =>  setMounted(true), [])
  return (mounted &&
    <button
      className={className}
      onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
    >
      {resolvedTheme === 'dark' ? "go light" : "go dark"}
    </button>
  )
}