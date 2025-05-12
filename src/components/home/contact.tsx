"use client";
import { useEffect, useRef, useState } from "react";
import { ArrowLeft, Mail, MapPin, Phone, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";
import Link from "next/link";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const formRef = useRef<HTMLFormElement>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast("Message sent!", {
        description: "Thank you for your message. We'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      });

      setIsSubmitting(false);
    }, 1500);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section className="py-16 md:py-20">
      <div className="container max-w-6xl">
        <Button asChild variant="ghost" className="mb-6 scale-transition -ml-3">
          <Link href="/" className="flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
        </Button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold mb-4 opacity-0 animate-fade-in">
              Get In Touch
            </h1>

            <p
              className="text-muted-foreground mb-8 max-w-md opacity-0 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              I&apos;m always interested in new opportunities, collaborations,
              or just chatting about web development and design. Feel free to
              reach out!
            </p>

            <div
              className="space-y-6 opacity-0 animate-fade-in"
              style={{ animationDelay: "300ms" }}
            >
              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Email</h3>
                  <p className="text-muted-foreground">
                    <a
                      href="mailto:hello@devspro.com"
                      className="hover-underline"
                    >
                      hello@devspro.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Phone</h3>
                  <p className="text-muted-foreground">
                    <a href="tel:+12345678901" className="hover-underline">
                      +1 (234) 567-8901
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="bg-secondary dark:bg-accent p-3 rounded-full">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-medium">Location</h3>
                  <p className="text-muted-foreground">
                    San Francisco, California
                  </p>
                </div>
              </div>
            </div>

            <div
              className="mt-12 aspect-w-16 aspect-h-9 opacity-0 animate-fade-in"
              style={{ animationDelay: "400ms" }}
            >
              <iframe
                title="Map"
                className="w-full h-64 md:h-80 rounded-lg border border-border"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d100939.98555098464!2d-122.50764017948262!3d37.75781499657633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80859a6d00690021%3A0x4a501367f076adff!2sSan%20Francisco%2C%20CA%2C%20USA!5e0!3m2!1sen!2sus!4v1620796071182!5m2!1sen!2sus"
                loading="lazy"
              ></iframe>
            </div>
          </div>

          <div
            className="bg-card rounded-lg shadow-sm p-6 md:p-8 ring-transition opacity-0 animate-fade-in"
            style={{ animationDelay: "500ms" }}
          >
            <h2 className="text-2xl font-bold mb-6">Send a Message</h2>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Name
                </label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formData.email}
                    onChange={handleChange}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  placeholder="Subject of your message"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Your message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full rounded-full scale-transition"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
