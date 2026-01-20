import React from 'react';
import { Target } from 'lucide-react';

const Section = () => {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-accent/20 mb-6">
            <Target className="h-8 w-8 text-accent-foreground" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance text-foreground">
            Our Mission
          </h2>
          <p className="text-lg text-muted-foreground text-balance leading-relaxed">
            To empower medical professionals with the tools they need to efficiently source and manage their supply needs.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Section;
