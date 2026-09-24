import { cn } from "@/lib/utils";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <img
      src="/images/branding/noah/noah-logo.png"
      alt="NOAH Guardra"
      className={cn("object-contain", className)}
    />
  );
}
