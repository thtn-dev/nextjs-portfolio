'use client';

import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import {
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Github,
  Twitter,
  Copy,
  Check
} from 'lucide-react';
import Container from '../layouts/container';

export function ContactSection() {
  const { toast } = useToast();
  const [copiedField, setCopiedField] = React.useState<string | null>(null);

  const copyToClipboard = (text: string, field: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setCopiedField(field);
        toast({
          title: 'Copied!',
          description: `${field} has been copied to your clipboard.`
        });
        setTimeout(() => setCopiedField(null), 2000);
      })
      .catch((err) => {
        console.error('Failed to copy: ', err);
        toast({
          title: 'Error',
          description: 'Failed to copy to clipboard',
          variant: 'destructive'
        });
      });
  };

  const contactInfo = [
    { icon: Mail, text: 'thtn.1611.dev@gmail.com', field: 'Email' },
    { icon: Phone, text: '0865346424', field: 'Phone' },
    { icon: MapPin, text: 'Go Vap, Ho Chi Minh City, VN', field: 'Location' }
  ];

  const socialLinks = [
    { icon: Linkedin, href: 'https://www.linkedin.com/in/yourprofile' },
    { icon: Github, href: 'https://github.com/yourusername' },
    { icon: Twitter, href: 'https://twitter.com/yourhandle' }
  ];

  return (
    <Container className='bg-zinc-50 dark:bg-zinc-900'>
      <div className='container mx-auto px-4'>
        <h2 className='mb-8 text-center text-3xl font-bold'>Get in Touch</h2>
        <Card className='mx-auto max-w-2xl'>
          <CardHeader>
            <CardTitle className='text-center'>Contact Information</CardTitle>
          </CardHeader>
          <CardContent className='space-y-6'>
            <div className='grid grid-cols-1 gap-4'>
              {contactInfo.map(({ icon: Icon, text, field }) => (
                <div
                  key={field}
                  className='flex items-center justify-between space-x-3'
                >
                  <div className='flex items-center space-x-3'>
                    <Icon className='h-5 w-5 text-muted-foreground' />
                    <span className='text-ellipsis'>{text}</span>
                  </div>
                  {field !== 'Location' && (
                    <Button
                      variant='outline'
                      size='icon'
                      onClick={() => copyToClipboard(text, field)}
                    >
                      {copiedField === field ? (
                        <Check className='h-4 w-4' />
                      ) : (
                        <Copy className='h-4 w-4' />
                      )}
                    </Button>
                  )}
                </div>
              ))}
            </div>
            <div className='border-t pt-4'>
              <h3 className='mb-4 text-center text-lg font-semibold'>
                Connect with me
              </h3>
              <div className='flex justify-center space-x-4'>
                {socialLinks.map(({ icon: Icon, href }) => (
                  <Button key={href} variant='outline' size='icon' asChild>
                    <a href={href} target='_blank' rel='noopener noreferrer'>
                      <Icon className='h-5 w-5' />
                    </a>
                  </Button>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </Container>
  );
}
