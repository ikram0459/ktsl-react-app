import SectionHeading from "../components/shared/SectionHeading";
import SEO from "../components/SEO";

export default function Cookies() {
  return (
    <div className="py-20 lg:py-28">
      <SEO
        title="Cookies Policy | Khan Tech"
        description="Understand how Khan Tech Services uses cookies to improve website experience, analytics, and performance."
        keywords="cookies policy, website cookies, tracking, analytics"
        url="https://www.khantechservices.online/#/cookies"
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Legal"
          title="Cookies Policy"
          description="How we use cookies and tracking technologies, including Google Analytics."
        />
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>
            Khan Tech Services Ltd uses cookies and similar tracking technologies on this website. This Cookies Policy explains what cookies are, why we use them, and how you can manage them.
          </p>

          <h3 className="text-foreground font-semibold text-lg">Company Information</h3>
          <p>
            Khan Tech Services Ltd is registered in Ireland with company registration number 725731 and VAT number IE 4041065WH.
          </p>

          <h3 className="text-foreground font-semibold text-lg">What are cookies?</h3>
          <p>
            Cookies are small text files stored on your device by your browser when you visit a website. They help the website remember your preferences and improve your experience.
          </p>

          <h3 className="text-foreground font-semibold text-lg">Why we use cookies</h3>
          <p>
            We use cookies to make the website work properly, to improve its performance, and to understand how visitors interact with the site. This allows us to provide a better user experience.
          </p>

          <h3 className="text-foreground font-semibold text-lg">Types of cookies we use</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Essential cookies:</strong> Required for website functionality and secure access.
            </li>
            <li>
              <strong>Analytics cookies:</strong> Used to understand site usage and improve the website.
            </li>
            <li>
              <strong>Preferences cookies:</strong> Used to remember your settings and preferences.
            </li>
          </ul>

          <h3 className="text-foreground font-semibold text-lg">Google Analytics</h3>
          <p>
            We use Google Analytics to collect anonymous information about how visitors use our website. Google Analytics may set cookies to measure visitor behaviour, session duration, and page interactions. We use this data to improve our services and the website experience.
          </p>

          <h3 className="text-foreground font-semibold text-lg">Third-party cookies</h3>
          <p>
            Some site features may rely on third-party services that set their own cookies. Third-party cookies are governed by the relevant provider&apos;s cookie policy.
          </p>

          <h3 className="text-foreground font-semibold text-lg">Managing cookies</h3>
          <p>
            You can manage or delete cookies through your browser settings. Blocking cookies may affect the functionality of the website and limit your experience. For more control, review the privacy settings in your browser or use any available opt-out tools provided by third-party services.
          </p>

          <h3 className="text-foreground font-semibold text-lg">Changes to this policy</h3>
          <p>
            We may update this Cookies Policy from time to time. The latest version will be published on this page. Continued use of the website after changes have been posted constitutes acceptance of the updated policy.
          </p>

          <h3 className="text-foreground font-semibold text-lg">Contact</h3>
          <p>
            If you have questions about this Cookies Policy, please contact us through the contact form on our website or by using the details on our Contact page.
          </p>
        </div>
      </div>
    </div>
  );
}
