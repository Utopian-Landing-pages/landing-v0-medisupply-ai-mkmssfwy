import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ShieldCheck, Search, Globe } from 'lucide-react';

const FeatureHighlights = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Verified Suppliers',
      description: 'We rigorously verify all suppliers to ensure quality and reliability.',
    },
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Our advanced search filters help you find exactly what you need.',
    },
    {
      icon: Globe,
      title: 'Worldwide Access',
      description: 'Connect with suppliers and find supplies globally.',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Key Features</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Powerful tools designed for medical professionals
          </p>
        </div>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300 bg-card">
              <CardHeader>
                <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureHighlights;
