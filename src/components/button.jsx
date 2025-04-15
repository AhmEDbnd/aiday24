import React from "react"
import clsx from "clsx"

export function Button({ children, className = "", ...props }) {
  return (
    <button
      className={clsx(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors",
        "bg-purple-600 text-white hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500",
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}
