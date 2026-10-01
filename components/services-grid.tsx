import { ArrowRight } from "lucide-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/site";

export default function ServicesGrid() {
  return (
    <section id="services" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-primary">Our Services</p>
          <h2 className="mt-3 text-3xl font-bold text-foreground sm:text-4xl">
            Personalized Support for Everyday Life
          </h2>
        </div>
        <Button asChild variant="outline" className="w-fit">
          <Link href="/services">
            View all services
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {services.map((service) => {
          const Icon = service.icon;

          return (
            <Card key={service.title} className="group h-full border-border/80 bg-card transition-transform duration-200 hover:-translate-y-1 hover:shadow-md">
              <CardHeader className="pb-4">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/5 text-primary">
                  <Icon className="h-6 w-6" aria-hidden="true" />
                </div>
                <CardTitle className="text-xl text-foreground">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-7 text-muted-foreground">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
