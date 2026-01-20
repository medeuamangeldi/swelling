"use client";

import { useState, FormEvent } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { CONTACT_INFO } from "@/lib/data";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", phone: "", message: "" });

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      } else {
        setSubmitStatus("error");
        console.error("Error:", data.error);

        // Reset status after 5 seconds
        setTimeout(() => setSubmitStatus("idle"), 5000);
      }
    } catch (error) {
      setSubmitStatus("error");
      console.error("Failed to submit form:", error);

      // Reset status after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-12 sm:py-16 md:py-20 bg-steel-950">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 sm:py-2 rounded-full bg-spark-600/10 border border-spark-600/30 mb-4 sm:mb-6">
            <Mail className="w-3 h-3 sm:w-4 sm:h-4 text-spark-600" />
            <span className="text-xs sm:text-sm font-medium text-spark-600">
              Contact Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
            Get Your Free Quote Today
          </h2>
          <p className="text-lg text-steel-300">
            Ready to start your project? Contact us for a free consultation and
            quote.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                {/* Phone Numbers */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Phone className="w-5 h-5 mr-3 text-spark-600" />
                      Phone Numbers
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    <a
                      href={`tel:${CONTACT_INFO.phones.ory}`}
                      className="block text-steel-300 hover:text-spark-600 transition-colors"
                    >
                      <strong className="text-white">Ory:</strong>{" "}
                      {CONTACT_INFO.phones.ory}
                    </a>
                    <a
                      href={`tel:${CONTACT_INFO.phones.sultan}`}
                      className="block text-steel-300 hover:text-spark-600 transition-colors"
                    >
                      <strong className="text-white">Sultan:</strong>{" "}
                      {CONTACT_INFO.phones.sultan}
                    </a>
                  </CardContent>
                </Card>

                {/* Email */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Mail className="w-5 h-5 mr-3 text-spark-600" />
                      Email
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <a
                      href={`mailto:${CONTACT_INFO.email}`}
                      className="text-steel-300 hover:text-spark-600 transition-colors"
                    >
                      {CONTACT_INFO.email}
                    </a>
                  </CardContent>
                </Card>

                {/* Address */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <MapPin className="w-5 h-5 mr-3 text-spark-600" />
                      Address
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-steel-300">
                      {CONTACT_INFO.address.full}
                    </p>
                  </CardContent>
                </Card>

                {/* Hours */}
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      <Clock className="w-5 h-5 mr-3 text-spark-600" />
                      Working Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-steel-300">{CONTACT_INFO.hours}</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Map */}
            <div className="rounded-lg overflow-hidden border border-steel-700">
              <iframe
                src={`https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2964.8!2d${CONTACT_INFO.coordinates.lng}!3d${CONTACT_INFO.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDAzJzU5LjAiTiA4N8KwNTYnMTQuMyJX!5e0!3m2!1sen!2sus!4v1234567890123!5m2!1sen!2sus`}
                width="100%"
                height="300"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="O&S Welding Location"
              />
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Name *
                    </label>
                    <Input
                      id="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({ ...formData, name: e.target.value })
                      }
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Email *
                    </label>
                    <Input
                      id="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="your.email@example.com"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Phone
                    </label>
                    <Input
                      id="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="(123) 456-7890"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-white mb-2"
                    >
                      Project Details *
                    </label>
                    <Textarea
                      id="message"
                      required
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Tell us about your project..."
                      rows={6}
                    />
                  </div>

                  {submitStatus === "success" && (
                    <div className="p-4 rounded-lg bg-green-600/20 border border-green-600/50 text-green-400 text-sm">
                      ✓ Thank you! Your message has been sent. We&apos;ll
                      contact you within the next couple of hours.
                    </div>
                  )}

                  {submitStatus === "error" && (
                    <div className="p-4 rounded-lg bg-red-600/20 border border-red-600/50 text-red-400 text-sm">
                      Failed to send message. Please try again or contact us
                      directly at 773-815-2391.
                    </div>
                  )}

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      "Sending..."
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
