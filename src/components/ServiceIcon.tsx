"use client";

import {
  Microscope,
  Shield,
  Heart,
  TestTube2,
  Package,
  type LucideIcon,
} from "lucide-react";

const iconMap: Record<string, LucideIcon> = {
  cervical: Microscope,
  sti: Shield,
  endometrial: Heart,
  diabetes: TestTube2,
  full: Package,
};

interface ServiceIconProps {
  iconId: string;
  className?: string;
}

export default function ServiceIcon({ iconId, className = "w-10 h-10" }: ServiceIconProps) {
  const Icon = iconMap[iconId] ?? Package;
  return <Icon className={className} strokeWidth={1.5} />;
}
