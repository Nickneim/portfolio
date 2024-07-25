"use client";
import React from 'react'
import { FaCopy } from 'react-icons/fa6'

const CopyButton = ({text, tooltip } : {text: string, tooltip: string }) => {
  return (
    <button className="group ml-3" onClick={() => navigator.clipboard.writeText(text)}>
      <FaCopy className="hover:text-neutral-600 dark:hover:text-neutral-400"/>
      <span className="invisible text-sm absolute z-1 group-hover:visible text-center px-1 border border-black rounded-md bg-neutral-300 dark:bg-neutral-600">{tooltip}</span>
    </button>
  )
}

export default CopyButton
