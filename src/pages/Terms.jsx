import SectionHeading from "../components/shared/SectionHeading";
import SEO from "../components/SEO";

export default function Terms() {
  return (
    <div className="py-20 lg:py-28">
      <SEO
        title="Terms & Conditions | Khan Tech"
        description="Review Khan Tech Services terms and conditions for website use, service delivery, and legal notices."
        keywords="terms and conditions, legal notice, Khan Tech, website terms"
        url="https://www.khantechservices.online/#/terms"
      />
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Legal" title="Terms of Use" description="The rules and legal terms for using Khan Tech Services Ltd website and services." />
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>These Terms of Use govern your access to and use of the Khan Tech website and services. By using our website, you agree to these terms. If you do not agree with any part of these terms, please do not use our services.</p>

          <h3 className="text-foreground font-semibold text-lg">Company Information</h3>
          <p>Khan Tech Services Ltd is registered in Ireland with company registration number 725731 and VAT number IE 4041065WH.</p>

          <h3 className="text-foreground font-semibold text-lg">Use of the Website</h3>
          <p>You agree to use the website lawfully and in a manner that does not infringe the rights of others, restrict or inhibit their use of the site, or damage our systems. You must not attempt to gain unauthorised access to any part of our website or services.</p>

          <h3 className="text-foreground font-semibold text-lg">Intellectual Property</h3>
          <p>All content, trademarks, logos, graphics, and software available on this website are owned by or licensed to Khan Tech Services Ltd. You may not reproduce, modify, distribute, or display any part of the website without our prior written consent.</p>

          <h3 className="text-foreground font-semibold text-lg">Limitation of Liability</h3>
          <p>To the fullest extent permitted by law, Khan Tech Services Ltd will not be liable for any indirect, incidental, special, or consequential loss or damage arising from your use of the website or reliance on any content provided. Our total liability for any claim arising out of or related to these terms shall not exceed the amount you paid for the service in question, or €100 if no payment was made.</p>

          <h3 className="text-foreground font-semibold text-lg">Third-Party Links</h3>
          <p>Our website may contain links to third-party sites. Those links are provided for convenience only, and we are not responsible for the content or practices of those third-party websites.</p>

          <h3 className="text-foreground font-semibold text-lg">Governing Law</h3>
          <p>These Terms of Use are governed by the laws of Ireland. Any dispute arising from or related to these terms will be subject to the exclusive jurisdiction of the Irish courts.</p>

          <h3 className="text-foreground font-semibold text-lg">Changes to Terms</h3>
          <p>We reserve the right to update or change these terms at any time. When we make changes, we will update this page. Your continued use of the website after the changes have been posted constitutes your acceptance of the updated Terms of Use.</p>

          <h3 className="text-foreground font-semibold text-lg">Contact</h3>
          <p>If you have questions about these Terms of Use, please contact us via the contact form on our website or using the details on our Contact page.</p>
        </div>
      </div>
    </div>
  );
}
