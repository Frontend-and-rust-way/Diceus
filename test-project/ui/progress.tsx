"use client"
import * as React from "react"
import * as ProgressPrimitive from "@radix-ui/react-progress"
import { cn } from "@/lib/utils"

function Progress({
  className,
  value,
  ...props
}: React.ComponentProps<typeof ProgressPrimitive.Root>) {
  return (
    <ProgressPrimitive.Root
      data-slot="progress"
      className={cn(
        "bg-primary/20 relative bg-tw-light-gray h-[15px] w-full overflow-hidden rounded-full",
        className
      )}
      {...props}
    >
      <ProgressPrimitive.Indicator
        data-slot="progress-indicator"
        className="bg-red-900 h-full rounded-r-2xl w-full flex-1 transition-all"
        style={{ transform: `translateX(-${100 - (value || 0)}%)`,
        backgroundImage:"linear-gradient(90deg, #1e3a8a 0%, #2563eb 100%)"}}
      />
    </ProgressPrimitive.Root>
  )
}

export { Progress }
