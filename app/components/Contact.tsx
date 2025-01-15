'use client';

import { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type FormData = {
  name: string;
  email: string;
  message: string;
};

type FormState = {
  loading: boolean;
  error: string | null;
  success: boolean;
};

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const [formState, setFormState] = useState<FormState>({
    loading: false,
    error: null,
    success: false,
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState({ loading: true, error: null, success: false });

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Something went wrong');
      }

      setFormState({ loading: false, error: null, success: true });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setFormState({
        loading: false,
        error: error instanceof Error ? error.message : 'Something went wrong',
        success: false,
      });
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section className="py-20 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Contact Us</h2>
        <Card>
          <CardHeader>
            <CardTitle>Send us a message</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <Input
                  placeholder="Your name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  disabled={formState.loading}
                  required
                />
              </div>
              <div>
                <Input
                  type="email"
                  placeholder="Your email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  disabled={formState.loading}
                  required
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  disabled={formState.loading}
                  required
                  rows={4}
                />
              </div>
              {formState.error && (
                <div className="text-red-500 text-sm">{formState.error}</div>
              )}
              {formState.success && (
                <div className="text-green-500 text-sm">Message sent successfully!</div>
              )}
              <Button 
                type="submit" 
                className="w-full"
                disabled={formState.loading}
              >
                {formState.loading ? 'Sending...' : 'Send Message'}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
} 