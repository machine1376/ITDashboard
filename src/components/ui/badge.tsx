import * as React from "react"
import { cn } from "@/lib/utils"
import { badgeVariants } from "./badge-variants"
import type { VariantProps } from "./badge-variants"

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants(props), className)} {...props} />
}

export { Badge }
