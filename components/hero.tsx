import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-gradient-to-b from-secondary/30 to-background overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 text-sm font-medium rounded-full bg-accent/20 text-accent-foreground border border-accent/30">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
            </span>
            AI-Powered Medical Supply Matching
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance text-foreground leading-tight">
            Find the right medical supplies, every time.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed max-w-3xl mx-auto">
            A global platform to help medical professionals easily find and compare medical supplies, leveraging AI for optimal matching and supplier verification.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="font-semibold gap-2 group">
              Request a Demo
              <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="font-semibold bg-transparent">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
