"use client";
import React, { useRef, useState } from 'react'
import { FaCopy } from 'react-icons/fa6'

const CopyButton = ({text, tooltip } : {text: string, tooltip: string }) => {
  const [copied, setCopied] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout>();

  function handleCopyToClipboard() {
    navigator.clipboard.writeText(text);
    clearTimeout(intervalRef.current);
    setCopied(true);
    intervalRef.current = setTimeout(() => {
      setCopied(false);
    }, 300);
  }

  return (
    <button className="flex flex-row items-end ml-3" onClick={handleCopyToClipboard}>
      <FaCopy className="hover:text-neutral-600 dark:hover:text-neutral-400"/>
      <p className={`${copied? "opacity-100" : "transition-opacity duration-1000 opacity-0"} absolute -translate-y-6 -translate-x-[40%] sm:translate-y-0 sm:translate-x-5 select-none text-xs ml-1`}>{tooltip}</p>
    </button>
  )
}

export default CopyButton
