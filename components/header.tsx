import React from 'react';
import { Button } from '@/components/ui/button';
import { Stethoscope } from 'lucide-react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        <a href="/" className="flex items-center gap-2 text-lg font-bold text-foreground hover:text-primary transition-colors">
          <Stethoscope className="h-6 w-6" />
          <span>MediSupply AI</span>
        </a>
        <Button className="font-semibold">Request a Demo</Button>
      </div>
    </header>
  );
};

export default Header;
