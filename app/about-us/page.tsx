export const metadata = {
  title: "About Us | myCGPA.pk",
  description:
    "myCGPA.pk is a free, privacy-first CGPA calculator built for students across Pakistani universities.",
};

export default function AboutPage() {
  return (
    <div className="max-w-2xl space-y-5 text-justify">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl tracking-tight">
          About myCGPA.pk
        </h1>
        <p className="text-muted-foreground leading-relaxed">
          myCGPA.pk is a free CGPA calculator built specifically for students at
          Pakistani universities. Every institution has its own grading scale,
          credit-hour system, and GPA formula — and no single tool handled all
          of them. myCGPA.pk was built to fix that.
        </p>
      </div>

      <section className="space-y-1">
        <h2 className="font-medium text-base">What it does</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Select your university, enter your courses and grades, and get an
          accurate CGPA instantly — calculated according to your institution's
          official grading policy. No sign-up, no account, no friction.
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-medium text-base">Privacy by design</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Your academic data never leaves your device. All calculations run
          entirely in your browser and are discarded the moment you close the
          tab. We collect zero personal data — no grades, no name, nothing.
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-medium text-base">Built for Pakistani students</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          From FAST and NUST to COMSATS, UET, and beyond, myCGPA.pk supports the
          grading systems of universities across Pakistan. If your institution
          is not listed yet, you can{" "}
          <a
            className="font-medium text-primary underline-offset-4 hover:underline"
            href="/contact"
          >
            request it
          </a>{" "}
          and we will add it.
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-medium text-base">Always free</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          myCGPA.pk is and will remain free to use. The site is supported by
          non-intrusive ads that keep it running without any cost to you.
        </p>
      </section>
    </div>
  );
}
