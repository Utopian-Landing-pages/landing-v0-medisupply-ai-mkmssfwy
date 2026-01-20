import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 text-balance text-foreground">
            Ready to find the right medical supplies?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 text-balance leading-relaxed">
            Request a demo to see how MediSupply AI can streamline your supply sourcing process.
          </p>
          <Button size="lg" className="font-semibold gap-2 group">
            Request a Demo
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
