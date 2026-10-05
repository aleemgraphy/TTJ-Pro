import { Activity, HeartHandshake, Home, PhoneCall, Sparkles } from "lucide-react";

import { siteConfig } from "@/lib/site";

const programs = [
  {
    title: "Hospital-to-Home Care",
    description:
      "Non-medical help after a hospital or rehabilitation stay, including bathing, dressing, meals, mobility assistance, medication reminders, transportation, light housekeeping, and companionship.",
    icon: Home,
  },
  {
    title: "Aging-at-Home Care",
    description:
      "Personal care and everyday household support tailored to familiar routines, changing needs, and individual preferences.",
    icon: Activity,
  },
  {
    title: "Family Caregiver Respite",
    description:
      "In-home support that gives family caregivers time for rest, work, errands, and other responsibilities.",
    icon: HeartHandshake,
  },
  {
    title: "Culturally Responsive Home Care",
    description:
      "Respectful support shaped around each person's cultural preferences, customs, and daily routines.",
    icon: Sparkles,
  },
];

export default function CarePrograms() {
  return (
    <section className="border-b border-border bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Care Programs</p>
          <h2 className="mt-3 text-3xl font-bold leading-tight text-foreground sm:text-4xl">
            Helping families bring their loved ones home safely and keep them safely at home.
          </h2>
          <p className="mt-5 text-lg leading-8 text-muted-foreground">
            Dependable, non-medical support for the transition home and the everyday routines that help people remain comfortable in familiar surroundings.
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-2 text-center sm:flex-row sm:gap-3">
          <p className="text-base text-muted-foreground">
            Need help after a hospital or rehabilitation stay? Call to discuss current availability.
          </p>
          <a
            href={siteConfig.phoneHref}
            aria-label={`Call TTJ PRO at ${siteConfig.phone} to discuss care availability`}
            className="inline-flex min-h-11 items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
          >
            <PhoneCall className="h-4 w-4" aria-hidden="true" />
            {siteConfig.phone}
          </a>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {programs.map((program) => {
            const Icon = program.icon;

            return (
              <article key={program.title} className="border-t-2 border-secondary bg-muted/50 p-5">
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-5 w-5" aria-hidden="true" />
                </div>
                <h3 className="text-lg font-semibold text-foreground">{program.title}</h3>
                <p className="mt-3 text-sm leading-6 text-muted-foreground">{program.description}</p>
              </article>
            );
          })}
        </div>

        <p className="mt-6 text-center text-sm text-muted-foreground">
          Support and start dates depend on the needs discussed and caregiver availability. Medication reminders are non-medical and do not include administering medication.
        </p>
      </div>
    </section>
  );
}