export const metadata = {
  title: "Privacy Policy | myCGPA.pk",
  description:
    "myCGPA.pk collects zero personal data. Everything stays in your browser. Learn how we handle your information.",
};

const LAST_UPDATED = "May 26, 2025";
const CONTACT_EMAIL = "mycgpa@azizurrehman.com";

export default function PrivacyPolicyPage() {
  return (
    <div className="max-w-2xl space-y-6">
      <div className="space-y-2">
        <h1 className="font-semibold text-2xl tracking-tight">
          Privacy Policy
        </h1>
        <p className="text-muted-foreground text-sm">
          Last updated: {LAST_UPDATED}
        </p>
        <p className="text-muted-foreground leading-relaxed">
          myCGPA.pk is built on a simple principle: your academic data belongs
          to you. We collect <strong>zero bytes</strong> of personal
          information. Every calculation happens entirely inside your browser
          and is never transmitted to any server.
        </p>
      </div>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">1. Information we collect</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We collect <strong>no personal information whatsoever</strong>. We do
          not collect your name, email address, student ID, university, grades,
          or any other data you enter into the calculator. All inputs are
          processed locally in your browser and discarded when you close or
          refresh the page.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We do not use cookies, local storage, or any browser storage mechanism
          to track, identify, or remember you between sessions.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">2. How your data is used</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Since we collect no data, there is nothing to use, sell, share, or
          process. Your grade information never leaves your device and is never
          accessible to us or any third party.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">3. Third-party advertising</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          myCGPA.pk uses <strong>Google AdSense</strong> to display
          advertisements. Google, as a third-party vendor, uses cookies to serve
          ads based on your prior visits to this site and other sites on the
          internet. Google's use of advertising cookies enables it and its
          partners to serve ads to you based on your visit to myCGPA.pk and/or
          other sites on the internet.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          You may opt out of personalised advertising by visiting{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="https://www.google.com/settings/ads"
            rel="noopener noreferrer"
            target="_blank"
          >
            Google Ads Settings
          </a>
          . Alternatively, you may opt out of a third-party vendor's use of
          cookies by visiting the{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="https://optout.networkadvertising.org/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Network Advertising Initiative opt-out page
          </a>
          .
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          Google's privacy policy is available at{" "}
          <a
            className="font-medium text-primary hover:underline"
            href="https://policies.google.com/privacy"
            rel="noopener noreferrer"
            target="_blank"
          >
            policies.google.com/privacy
          </a>
          .
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">4. Cookies</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          myCGPA.pk itself does not set any cookies. However, Google AdSense and
          other third-party services embedded on this site may set their own
          cookies on your device to serve relevant advertisements or measure ad
          performance. These cookies are governed by the respective third
          parties' privacy policies, not ours.
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          You can control cookie behaviour through your browser settings. Most
          browsers allow you to refuse cookies or to delete cookies already
          stored on your device. For instructions, refer to your browser's help
          documentation.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">5. Analytics</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We may use anonymised, aggregated analytics tools (such as Google
          Analytics) solely to understand general traffic patterns — for
          example, which universities are most commonly searched. Any such data
          is fully anonymised and cannot be linked to any individual user. If
          analytics are used, they track only page views and session counts, not
          any grade or academic data.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">6. Children's privacy</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          myCGPA.pk does not knowingly collect personal information from anyone,
          including children under the age of 13. Because we collect no data at
          all, our service is safe for users of all ages from a data-privacy
          standpoint.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">7. Links to other websites</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          This site may contain links to external websites for reference
          purposes (such as university grading policy pages). We have no control
          over the content or privacy practices of those sites and are not
          responsible for them. We encourage you to review the privacy policy of
          any external site you visit.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">8. Changes to this policy</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          We may update this Privacy Policy from time to time. Any changes will
          be posted on this page with a revised "Last updated" date. Because we
          collect no personal data, changes are unlikely to affect your rights;
          however, we recommend reviewing this page periodically.
        </p>
      </section>

      <section className="space-y-2">
        <h2 className="font-semibold text-lg">9. Contact us</h2>
        <p className="text-muted-foreground text-sm leading-relaxed">
          If you have any questions, concerns, or feedback about this Privacy
          Policy, please reach out at{" "}
          <a
            className="font-medium text-primary hover:underline"
            href={`mailto:${CONTACT_EMAIL}`}
          >
            {CONTACT_EMAIL}
          </a>
          .
        </p>
      </section>
    </div>
  );
}
