import * as Icons from 'lucide-react';
import React from 'react';

interface LucideIconProps {
  name: string;
  size?: number;
  className?: string;
  color?: string;
}

export default function LucideIcon({ name, size = 18, className, color }: LucideIconProps) {
  // We cast to 'unknown' first, then to our Record. This is the "bridge" TS requires.
  const IconsRecord = (Icons as unknown) as Record<string, React.ComponentType<{ size?: number; className?: string; color?: string }>>;
  
  const IconComponent = IconsRecord[name];

  if (!IconComponent) {
    // Fallback: render a generic circle icon if the name isn't found
    const Fallback = IconsRecord['Circle'] || IconsRecord['HelpCircle'];
    return <Fallback size={size} className={className} color={color} />;
  }

  return <IconComponent size={size} className={className} color={color} />;
}
