import type { LucideIcon } from "lucide-react";
import {
  Activity,
  HeartHandshake,
  Home,
  Pill,
  ShoppingBag,
  Sparkles,
  UserCheck,
  Utensils,
} from "lucide-react";

export type SiteService = {
  title: string;
  icon: LucideIcon;
  description: string;
};

export const siteConfig = {
  name: "TTJ PRO NEAT HOME CARE & SUPPORT SERVICES",
  phone: "425-247-5341",
  phoneHref: "tel:425-247-5341",
  serviceArea: "Bellevue, WA & Surrounding Puget Sound Areas",
  qrCodeUrl: process.env.NEXT_PUBLIC_CONTACT_URL ?? "/contact",
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Our Services", href: "/services" },
  { label: "Why TTJ PRO", href: "/#why-choose-us" },
  { label: "How It Works", href: "/#how-it-works" },
  { label: "Service Area", href: "/#service-area" },
  { label: "Contact", href: "/contact" },
];

export const services: SiteService[] = [
  {
    title: "Personal Care",
    icon: UserCheck,
    description:
      "Compassionate assistance with daily personal hygiene, including grooming, bathing, and dressing to maintain dignity and comfort.",
  },
  {
    title: "Companionship",
    icon: HeartHandshake,
    description:
      "Meaningful emotional support, engaging conversation, and social interaction to prevent isolation and support mental well-being.",
  },
  {
    title: "Meal Preparation",
    icon: Utensils,
    description:
      "Delicious, nutritious meals planned and prepared according to individual dietary needs and preferences.",
  },
  {
    title: "Medication Reminders",
    icon: Pill,
    description:
      "Timely, dependable reminders to ensure client care schedules and daily routines stay consistently on track.",
  },
  {
    title: "Mobility Assistance",
    icon: Activity,
    description:
      "Dedicated support with walking, safe transfers, and comfortable movement around the home to promote independence.",
  },
  {
    title: "Errands & Shopping",
    icon: ShoppingBag,
    description:
      "Dependable help with grocery shopping, picking up prescriptions, and running essential routine errands.",
  },
  {
    title: "Light Housekeeping",
    icon: Home,
    description:
      "Maintaining a tidy, safe, and comfortable living environment through light cleaning, laundry, and organizing.",
  },
  {
    title: "Customized Care",
    icon: Sparkles,
    description:
      "Tailored support built around your family’s unique routine because every individual's care needs vary.",
  },
];

export const serviceOptions = [
  ...services.map((service) => service.title),
  "Other",
];
