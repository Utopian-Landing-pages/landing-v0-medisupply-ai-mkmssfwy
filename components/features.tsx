import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Sparkles, ShieldCheck, Globe } from 'lucide-react';

const SolutionBenefits = () => {
  const benefits = [
    {
      icon: Sparkles,
      title: 'AI-Powered Matching',
      description: 'Find the best supplies based on your specific needs, quickly and accurately.',
    },
    {
      icon: ShieldCheck,
      title: 'Supplier Verification',
      description: 'Ensure you\'re working with trusted and reliable suppliers.',
    },
    {
      icon: Globe,
      title: 'Global Reach',
      description: 'Access a vast network of suppliers from around the world.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Benefits</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Streamline your medical supply procurement with our advanced platform
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-accent/20 flex items-center justify-center mb-4">
                  <benefit.icon className="h-6 w-6 text-accent-foreground" />
                </div>
                <CardTitle className="text-xl">{benefit.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionBenefits;
