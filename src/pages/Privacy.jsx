import SectionHeading from "../components/shared/SectionHeading";
import SEO from "../components/SEO";

export default function Privacy() {
  return (
    <div className="py-20 lg:py-28">
      <SEO
        title="Privacy Policy | Khan Tech"
        description="Read Khan Tech Services privacy policy for website usage, data handling, and contact information."
        keywords="privacy policy, data protection, Khan Tech, GDPR"
        url="https://www.khantechservices.online/#/privacy"
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Legal" title="Privacy Policy" description="How we collect, use and protect your personal data in Ireland." />
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Khan Tech Services Ltd ("we", "us" or "our") is committed to protecting the privacy of visitors to our website and users of our services. This Privacy Policy explains how we collect, use, disclose and safeguard your personal data in accordance with Irish and EU data protection law, including the General Data Protection Regulation (GDPR) and the Irish Data Protection Act 2018.</p>

          <h3 className="text-foreground font-semibold text-lg">Company Information</h3>
          <p>Khan Tech Services Ltd is registered in Ireland with company registration number 725731 and VAT number IE 4041065WH.</p>

          <h3 className="text-foreground font-semibold text-lg">Personal Data We Collect</h3>
          <p>We may collect personal data such as your name, contact details, company name, and any information you provide through the contact form or when requesting our services. We also collect technical and usage data when you visit our website, including IP address, browser type, device information, and pages viewed.</p>

          <h3 className="text-foreground font-semibold text-lg">How We Use Your Data</h3>
          <p>We use your personal data to respond to enquiries, provide and improve our services, communicate with you, and comply with our legal obligations. We may also use your data for legitimate business interests such as analytics, security, and website maintenance.</p>

          <h3 className="text-foreground font-semibold text-lg">Legal Basis for Processing</h3>
          <p>We process personal data on the basis of your consent, the performance of a contract, our legitimate interests, or to comply with a legal obligation. Our legitimate interests include operating and improving our website, communicating with customers, and preventing fraud.</p>

          <h3 className="text-foreground font-semibold text-lg">Cookies and Tracking</h3>
          <p>We may use cookies and similar technologies to make the website work, personalise content, and analyse website traffic. Most browsers allow you to block or delete cookies, although this may affect the functionality of the site.</p>

          <h3 className="text-foreground font-semibold text-lg">Sharing and Disclosure</h3>
          <p>We do not sell your personal data. We may share information with service providers that support our business, with authorities when required by law, and with professional advisors when necessary to protect our rights.</p>

          <h3 className="text-foreground font-semibold text-lg">Data Security</h3>
          <p>We implement appropriate technical and organisational measures to protect your personal data against unauthorised access, disclosure, alteration, or destruction. However, no internet transmission is completely secure.</p>

          <h3 className="text-foreground font-semibold text-lg">Data Retention</h3>
          <p>We retain personal data only for as long as necessary to fulfil the purposes for which it was collected, satisfy legal obligations, and resolve disputes.</p>

          <h3 className="text-foreground font-semibold text-lg">Your Rights</h3>
          <p>If you are located in Ireland or the EU, you have rights under GDPR, including the rights to access, correct, erase, restrict processing of, and object to processing of your personal data, as well as the right to data portability.</p>

          <h3 className="text-foreground font-semibold text-lg">Contact</h3>
          <p>If you have questions about this Privacy Policy or wish to exercise your rights, please contact us through our website contact form or by email using the details provided on our Contact page.</p>

          <p>By using our website, you acknowledge that you have read and understood this Privacy Policy.</p>
        </div>
      </div>
    </div>
  );
}
