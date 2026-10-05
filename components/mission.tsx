import { Heart } from "lucide-react";
import Image from "next/image";

export default function Mission() {
  return (
    <section className="border-y border-border bg-accent/40">
      <div className="mx-auto grid max-w-6xl items-center gap-8 px-4 py-12 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="relative aspect-[4/3] overflow-hidden rounded-[2rem]">
          <Image
            src="/image/images_05.jpg"
            alt="A caregiver offering steady support to an older adult at home"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>

        <div className="rounded-[2rem] border border-secondary/20 bg-white/70 p-8 shadow-sm sm:p-10">
          <div className="flex items-center gap-3 text-secondary">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary/15">
              <Heart className="h-5 w-5" />
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
              Our Mission
            </p>
          </div>

          <blockquote className="mt-6 text-2xl font-medium leading-relaxed text-foreground sm:text-3xl">
            “To provide high-quality, compassionate care where you feel at home, so loved ones can live happier and healthier at home.”
          </blockquote>
        </div>
      </div>
    </section>
  );
}
