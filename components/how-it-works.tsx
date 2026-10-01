const steps = [
  {
    title: "Free Phone Consultation",
    description: "Call 425-247-5341 to discuss your loved one's daily needs and schedule.",
  },
  {
    title: "Care Assessment & Matching",
    description: "We evaluate care requirements and match a reliable, compatible caregiver.",
  },
  {
    title: "Personalized Home Care Delivery",
    description: "Begin care with continuous oversight, updates, and backup coverage.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">How It Works</p>
        <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
          A Simple, Supportive Process
        </h2>
      </div>

      <div className="mt-12 grid gap-6 lg:grid-cols-3">
        {steps.map((step, index) => (
          <div key={step.title} className="relative rounded-2xl border border-border bg-card p-6 shadow-sm">
            <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-lg font-semibold text-primary-foreground">
              {index + 1}
            </div>
            <h3 className="text-xl font-semibold text-foreground">{step.title}</h3>
            <p className="mt-3 text-base leading-7 text-muted-foreground">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
