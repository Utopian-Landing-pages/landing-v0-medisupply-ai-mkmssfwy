import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Quote } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      name: 'Dr. Emily Carter',
      title: 'Cardiologist',
      quote: 'MediSupply AI has revolutionized the way we source medical supplies. The AI matching is incredibly accurate!',
      initials: 'EC',
      avatar: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&h=400&fit=crop',
    },
    {
      name: 'Dr. David Lee',
      title: 'General Practitioner',
      quote: 'The supplier verification feature gives me peace of mind knowing I\'m working with reputable vendors.',
      initials: 'DL',
      avatar: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&h=400&fit=crop',
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Trusted by Medical Professionals</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of healthcare providers who trust MediSupply AI
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow duration-300">
              <CardContent className="pt-6">
                <div className="flex flex-col gap-4">
                  <Quote className="h-8 w-8 text-accent/40" />
                  <p className="text-foreground leading-relaxed text-lg">
                    {testimonial.quote}
                  </p>
                  <div className="flex items-center gap-4 mt-2">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                      <AvatarFallback className="bg-accent text-accent-foreground font-semibold">
                        {testimonial.initials}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.title}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
