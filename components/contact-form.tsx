"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { AlertCircle, CheckCircle2, Phone } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { serviceOptions, siteConfig } from "@/lib/site";

const formSchema = z.object({
  name: z.string().min(2, "Please enter your full name."),
  phone: z.string().min(7, "Please enter a valid phone number."),
  email: z.string().email("Please enter a valid email address."),
  serviceNeeded: z.string().min(1, "Please select a service."),
  message: z.string().min(10, "Please share a little more detail."),
});

export type ContactFormValues = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [submitState, setSubmitState] = useState<"idle" | "success" | "error">("idle");
  const [submitMessage, setSubmitMessage] = useState("");

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (values: ContactFormValues) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 700));

      if (values.serviceNeeded === "Other") {
        setSubmitState("success");
        setSubmitMessage("Thanks for reaching out. We’ll review your inquiry and contact you soon.");
      } else {
        setSubmitState("success");
        setSubmitMessage("Thanks for reaching out. We’ll review your request and contact you soon.");
      }

      reset();
    } catch {
      setSubmitState("error");
      setSubmitMessage(
        `We were unable to send this inquiry right now. Please call TTJ PRO at ${siteConfig.phone} for immediate assistance.`,
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 rounded-[2rem] border border-border bg-card p-6 shadow-sm sm:p-8">
      <div>
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Free Consultation</p>
        <h3 className="mt-2 text-2xl font-bold text-foreground">Tell us about your care needs</h3>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" placeholder="Your name" {...register("name")} aria-invalid={Boolean(errors.name)} />
          {errors.name && <p className="text-sm text-red-600">{errors.name.message}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" type="tel" placeholder="(555) 123-4567" {...register("phone")} aria-invalid={Boolean(errors.phone)} />
          {errors.phone && <p className="text-sm text-red-600">{errors.phone.message}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" type="email" placeholder="you@example.com" {...register("email")} aria-invalid={Boolean(errors.email)} />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="serviceNeeded">Service Needed</Label>
          <Select id="serviceNeeded" defaultValue="" {...register("serviceNeeded")} aria-invalid={Boolean(errors.serviceNeeded)}>
            <option value="" disabled>
              Select a service
            </option>
            {serviceOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </Select>
          {errors.serviceNeeded && <p className="text-sm text-red-600">{errors.serviceNeeded.message}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea id="message" placeholder="Tell us a little about your loved one’s needs and schedule." {...register("message")} aria-invalid={Boolean(errors.message)} />
          {errors.message && <p className="text-sm text-red-600">{errors.message.message}</p>}
        </div>
      </div>

      {submitState !== "idle" && (
        <div
          className={
            submitState === "success"
              ? "flex items-start gap-3 rounded-xl border border-emerald-200 bg-emerald-50 p-4 text-sm text-emerald-800"
              : "flex items-start gap-3 rounded-xl border border-red-200 bg-red-50 p-4 text-sm text-red-800"
          }
          role={submitState === "error" ? "alert" : "status"}
        >
          {submitState === "success" ? (
            <CheckCircle2 className="mt-0.5 h-5 w-5" aria-hidden="true" />
          ) : (
            <AlertCircle className="mt-0.5 h-5 w-5" aria-hidden="true" />
          )}
          <span>{submitMessage}</span>
        </div>
      )}

      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <Button type="submit" size="lg" disabled={isSubmitting} className="min-h-[48px]">
          {isSubmitting ? "Sending..." : "Send My Inquiry"}
        </Button>

        <a
          href={siteConfig.phoneHref}
          aria-label="Call TTJ PRO at 425-247-5341"
          className="inline-flex items-center gap-2 text-sm font-medium text-primary underline-offset-4 hover:underline"
        >
          <Phone className="h-4 w-4" aria-hidden="true" />
          Call TTJ PRO at {siteConfig.phone}
        </a>
      </div>
    </form>
  );
}
