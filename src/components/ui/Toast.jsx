import * as React from "react"
import { cva } from "class-variance-authority"

import { cn } from "../../lib/utils"

const ToastProvider = ({ children, ...props }) => {
  return (
    <div {...props}>
      {children}
    </div>
  )
}

const ToastViewport = ({ className, ...props }) => {
  return (
    <div
      className={cn(
        "fixed top-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:bottom-0 sm:right-0 sm:top-auto sm:flex-col md:max-w-[420px]",
        className
      )}
      {...props}
    />
  )
}

const toastVariants = cva(
  "group pointer-events-auto relative flex w-full items-center justify-between space-x-4 overflow-hidden rounded-md border p-6 pr-8 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
  {
    variants: {
      variant: {
        default: "border bg-background text-foreground",
        destructive:
          "destructive group border-destructive bg-destructive text-destructive-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Toast = ({ className, variant, ...props }) => {
  return (
    <div
      className={cn(toastVariants({ variant }), className)}
      {...props}
    />
  )
}

const ToastTitle = ({ className, ...props }) => {
  return (
    <div
      className={cn("text-sm font-semibold", className)}
      {...props}
    />
  )
}

const ToastDescription = ({ className, ...props }) => {
  return (
    <div
      className={cn("text-sm opacity-90", className)}
      {...props}
    />
  )
}

const ToastClose = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "absolute right-2 top-2 rounded-md p-1 text-foreground/50 opacity-0 transition-opacity hover:text-foreground focus:opacity-100 focus:outline-none focus:ring-2 group-hover:opacity-100",
        className
      )}
      {...props}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="h-4 w-4"
      >
        <path d="M6 18L18 6M6 6l12 12" />
      </svg>
    </button>
  )
}

const ToastAction = ({ className, ...props }) => {
  return (
    <button
      className={cn(
        "inline-flex h-8 shrink-0 items-center justify-center rounded-md border bg-transparent px-3 text-sm font-medium ring-offset-background transition-colors hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 group-[.destructive]:border-destructive/30 group-[.destructive]:hover:border-destructive/30 group-[.destructive]:hover:bg-destructive group-[.destructive]:hover:text-destructive-foreground group-[.destructive]:focus:ring-destructive",
        className
      )}
      {...props}
    />
  )
}

export {
  ToastProvider,
  ToastViewport,
  Toast,
  ToastTitle,
  ToastDescription,
  ToastClose,
  ToastAction,
}