import { AnimatedText, FadeIn } from "@/components/anim/AnimatedText";
import { IssuesGridClient } from "./IssuesGrid.client";

export const IssuesSectionServer = () => {
  return (
    <section id="solutions" className="relative py-24 px-6 bg-background">
      <div className="mx-auto max-w-6xl">
        <div className="text-center mb-14">
          <FadeIn>
            <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-xs uppercase tracking-widest text-foreground/70 mb-6">
              The Problem
            </span>
          </FadeIn>
          <AnimatedText
            text="Is your Marketing data"
            as="h2"
            className="font-display font-bold text-4xl md:text-6xl text-foreground"
          />
          <AnimatedText
            text="actually reliable?"
            as="h2"
            delay={0.3}
            className="font-display font-bold text-4xl md:text-6xl text-foreground/40 mt-1"
          />
          <FadeIn delay={0.5}>
            <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
              Many companies invest heavily in marketing but still struggle with foundational data issues.
            </p>
          </FadeIn>
        </div>

        <IssuesGridClient />

        <FadeIn delay={0.2}>
          <div className="mt-16 text-center max-w-3xl mx-auto">
            <p className="font-serif-display text-2xl md:text-3xl text-foreground leading-snug">
              "Without reliable data, marketing decisions become guesswork."
            </p>
            <p className="mt-5 text-muted-foreground">
              This leads to wasted ad spend, poor performance, and missed growth opportunities.
              That's where <b className="text-foreground">MarTechRise</b> comes in. We fix your tracking,
              eliminate data gaps, and build clean, reliable data pipelines.
            </p>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};
