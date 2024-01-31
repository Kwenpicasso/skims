import { cn } from "@/lib/utils"

function Skeleton({
  className,
  ...props
}) {
  return (<div className={cn("animate-pulse rounded-md bg-[#EEE4DA]", className)} {...props} />);
}

export { Skeleton }
