import React from "react";
import SectionHeading from "../components/shared/SectionHeading";

export default function Terms() {
  return (
    <div className="py-20 lg:py-28">
      <div className="max-w-3xl mx-auto px-6 lg:px-8">
        <SectionHeading label="Legal" title="Terms of Use" />
        <div className="prose prose-invert prose-sm max-w-none space-y-6 text-muted-foreground leading-relaxed">
          <p>Welcome to Khan Tech. By accessing and using our website and services, you agree to be bound by these Terms of Use. If you do not agree with any part of these terms, you may not use our services.</p>
          <h3 className="text-foreground font-semibold text-lg">Use of Services</h3>
          <p>Our services are provided "as is" and are intended for lawful purposes only. You agree not to misuse our services, attempt to gain unauthorized access, or engage in activities that could harm our systems or other users.</p>
          <h3 className="text-foreground font-semibold text-lg">Intellectual Property</h3>
          <p>All content, trademarks, and intellectual property on this website are owned by Khan Tech. Unauthorized reproduction, distribution, or use of our content is strictly prohibited.</p>
          <h3 className="text-foreground font-semibold text-lg">Limitation of Liability</h3>
          <p>Khan Tech shall not be liable for any indirect, incidental, or consequential damages arising from the use of our services. Our total liability shall not exceed the amount paid for the specific service in question.</p>
          <h3 className="text-foreground font-semibold text-lg">Changes</h3>
          <p>We reserve the right to modify these terms at any time. Continued use of our services constitutes acceptance of the updated terms.</p>
        </div>
      </div>
    </div>
  );
}