export const metadata = {
  title: "Contact Us | myCGPA.pk",
  description:
    "Get in touch with the myCGPA.pk team for questions, feedback, or university support requests.",
};

const CONTACT_EMAIL = "mycgpa@azizurrehman.com";

export default function ContactUsPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl tracking-tight">Contact us</h1>
        <p className="text-muted-foreground leading-relaxed">
          Have a question, found an error in a grading scheme, or want your
          university added? We would love to hear from you.
        </p>
      </div>

      <section className="space-y-1">
        <h2 className="font-medium text-base">Email</h2>
        <p className="text-muted-foreground text-sm">
          Send us a message at{" "}
          <a
            className="font-medium text-primary underline-offset-4 hover:underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          . We typically respond within one to two business days.
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-medium text-base">Report a grading issue</h2>
        <p className="text-muted-foreground text-sm">
          If the CGPA formula for your university appears incorrect, please
          include your university name and a link to the official grading policy
          in your email so we can verify and update it promptly.
        </p>
      </section>

      <section className="space-y-1">
        <h2 className="font-medium text-base">Request a university</h2>
        <p className="text-muted-foreground text-sm">
          Don't see your institution listed? Email us the university name along
          with a link to the official transcript or grading scale and we will
          work to add it.
        </p>
      </section>
    </div>
  );
}
