import { CheckCircle2 } from "lucide-react";

const pillars = [
  {
    title: "Compassionate & Reliable Caregivers",
    description: "Vetted, dedicated professionals who treat clients with warmth and dignity.",
  },
  {
    title: "Customized Care Plans",
    description: "Individualized care blueprints adapted to your family's exact daily schedule.",
  },
  {
    title: "Flexible Scheduling to Fit Your Needs",
    description: "Hourly visits, daily assistance, or long-term schedules without rigid constraints.",
  },
  {
    title: "Emergency & Backup Care Plans",
    description: "Preparedness and contingency coverage so your family is never left without support.",
  },
  {
    title: "Long-term Care You Can Trust",
    description: "Ongoing continuity of care focused on safety, happiness, and peace of mind.",
  },
];

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="bg-muted/60 py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Why Families Choose TTJ PRO</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Thoughtful Care Built Around Your Family
          </h2>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
          {pillars.map((pillar) => (
            <div key={pillar.title} className="rounded-2xl border border-border bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
                <CheckCircle2 className="h-5 w-5" aria-hidden="true" />
              </div>
              <h3 className="text-lg font-semibold text-foreground">{pillar.title}</h3>
              <p className="mt-3 text-sm leading-6 text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
