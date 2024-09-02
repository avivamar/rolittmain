import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';

export const metadata: Metadata = {
  title: 'Terms of Service | Rolitt',
  description: 'Read Rolitt\'s terms of service to understand the rules and regulations governing the use of our services.',
  openGraph: {
    title: 'Terms of Service | Rolitt',
    description: 'Read Rolitt\'s terms of service to understand the rules and regulations governing the use of our services.',
    url: 'https://rolitt.com/terms-of-service',
    siteName: 'Rolitt',
    images: [
      {
        url: 'https://rolitt.com/og-image.jpg', // 请确保这个图片存在
        width: 1200,
        height: 630,
        alt: 'Rolitt Terms of Service',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function TermsOfServicePage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              User Agreement for Rolitt Inc.
            </h1>
            <p className="text-sm text-muted-foreground mb-8">
              Effective Date: January 31, 2024
            </p>
            
            <div className="space-y-8">
              <section>
                <h2 className="text-2xl font-semibold mb-4">1. Introduction</h2>
                <p>
                  Welcome to Rolitt! This User Agreement ("Agreement") is a legally
                  binding contract between you ("User", "you", "your") and Rolitt Inc.
                  ("Rolitt", "we", "our", "us") governing your use of our websites
                  (rolitt.ai and rolitt.com), applications, AI services, and physical AI
                  robot products (collectively, "Services"). By accessing or using our
                  Services, you agree to be bound by this Agreement.
                </p>
                <p className="mt-4">
                  If you do not agree to this Agreement, do not use our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">2. Eligibility</h2>
                <p>
                  You must be at least 13 years old to use our Services. If you are
                  under 18, you must have your parent or guardian's permission to use
                  our Services. By using our Services, you represent and warrant that
                  you meet these eligibility requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">3. Account Registration and Security</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Account Creation:</strong> To access certain features of our
                    Services, you may need to create an account. You agree to provide
                    accurate, current, and complete information during the registration
                    process and to update such information as necessary.
                  </li>
                  <li>
                    <strong>Account Security:</strong> You are responsible for
                    maintaining the confidentiality of your account credentials and for
                    all activities that occur under your account. You agree to notify us
                    immediately of any unauthorized use of your account or any other
                    breach of security.
                  </li>
                  <li>
                    <strong>Account Termination:</strong> We reserve the right to
                    suspend or terminate your account if we suspect any unauthorized use
                    or breach of this Agreement.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">4. Use of Services</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>License:</strong> Subject to your compliance with this
                    Agreement, we grant you a limited, non-exclusive, non-transferable,
                    revocable license to access and use our Services for personal,
                    non-commercial purposes.
                  </li>
                  <li>
                    <strong>Restrictions:</strong> You agree not to:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>Use our Services for any illegal or unauthorized purpose;</li>
                      <li>Modify, adapt, hack, or interfere with our Services;</li>
                      <li>Use any automated means to access our Services;</li>
                      <li>Reverse engineer or decompile any part of our Services;</li>
                      <li>
                        Use our Services to transmit any harmful or disruptive content.
                      </li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">5. User Content</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Responsibility:</strong> You are solely responsible for any
                    content you upload, post, or otherwise transmit through our Services
                    ("User Content"). You represent and warrant that you own or have the
                    necessary rights to use and authorize the use of your User Content.
                  </li>
                  <li>
                    <strong>License to Rolitt:</strong> By submitting User Content, you
                    grant Rolitt a worldwide, non-exclusive, royalty-free,
                    sublicensable, and transferable license to use, reproduce,
                    distribute, prepare derivative works of, display, and perform your
                    User Content in connection with our Services.
                  </li>
                  <li>
                    <strong>Prohibited Content:</strong> You agree not to upload, post,
                    or otherwise transmit any User Content that:
                    <ul className="list-disc pl-5 mt-2 space-y-1">
                      <li>
                        Is unlawful, harmful, threatening, abusive, defamatory, or
                        otherwise objectionable;
                      </li>
                      <li>
                        Infringes on any third party's intellectual property rights or
                        privacy rights;
                      </li>
                      <li>Contains viruses or any other malicious code.</li>
                    </ul>
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">6. Intellectual Property</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Ownership:</strong> All intellectual property rights in our
                    Services, including but not limited to text, graphics, logos, icons,
                    images, audio clips, video clips, software, and other content, are
                    owned by Rolitt or our licensors.
                  </li>
                  <li>
                    <strong>Trademarks:</strong> Rolitt and all related names, logos,
                    product and service names, designs, and slogans are trademarks of
                    Rolitt or our affiliates or licensors. You must not use such marks
                    without our prior written permission.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">7. Privacy</h2>
                <p>
                  Your use of our Services is also governed by our Privacy Policy, which
                  describes our practices regarding the collection, use, and disclosure
                  of your personal information. By using our Services, you consent to
                  our collection and use of your personal information as described in
                  the Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">8. Disclaimers and Limitation of Liability</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Disclaimers:</strong> Our Services are provided "as is" and
                    "as available" without warranties of any kind, either express or
                    implied, including but not limited to implied warranties of
                    merchantability, fitness for a particular purpose, and
                    non-infringement. We do not warrant that our Services will be
                    uninterrupted, error-free, or secure.
                  </li>
                  <li>
                    <strong>Limitation of Liability:</strong> To the fullest extent
                    permitted by law, Rolitt and its affiliates, officers, employees,
                    agents, and licensors will not be liable for any indirect,
                    incidental, special, consequential, or punitive damages, or any loss
                    of profits or revenues, whether incurred directly or indirectly, or
                    any loss of data, use, goodwill, or other intangible losses,
                    resulting from (i) your use or inability to use our Services; (ii)
                    any unauthorized access to or use of our servers and/or any personal
                    information stored therein; (iii) any interruption or cessation of
                    transmission to or from our Services; (iv) any bugs, viruses, trojan
                    horses, or the like which may be transmitted to or through our
                    Services by any third party; (v) any errors or omissions in any
                    content; and (vi) any loss or damage of any kind incurred as a
                    result of the use of any content posted, emailed, transmitted, or
                    otherwise made available via our Services, whether based on
                    warranty, contract, tort, or any other legal theory, and whether or
                    not Rolitt has been advised of the possibility of such damages.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Rolitt, its
                  affiliates, officers, directors, employees, agents, and licensors from
                  and against all claims, liabilities, damages, losses, costs, and
                  expenses, including reasonable attorneys' fees, arising out of or in
                  any way connected with your access to or use of our Services, your
                  violation of this Agreement, or your infringement of any intellectual
                  property or other rights of any third party.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">10. Termination</h2>
                <p>
                  We reserve the right to suspend or terminate your access to our
                  Services at any time, with or without cause or notice, and without
                  liability to you. Upon termination, your right to use our Services
                  will immediately cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">11. Governing Law and Dispute Resolution</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Governing Law:</strong> This Agreement and any dispute
                    arising out of or in connection with it will be governed by the laws
                    of the State of California, United States, without regard to its
                    conflict of laws principles.
                  </li>
                  <li>
                    <strong>Dispute Resolution:</strong> Any dispute arising out of or
                    in connection with this Agreement or your use of our Services will
                    be resolved through binding arbitration administered by the American
                    Arbitration Association under its Commercial Arbitration Rules. The
                    arbitration will take place in San Francisco, California, and will
                    be conducted in English. The arbitrator's decision will be final and
                    binding, and judgment on the award rendered by the arbitrator may be
                    entered in any court having jurisdiction thereof.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">12. Changes to this Agreement</h2>
                <p>
                  We may update this Agreement from time to time. When we do, we will
                  post the updated version on this page and, if required by law, notify
                  you of the changes through other means. Your continued use of our
                  Services after any changes to this Agreement signifies your acceptance
                  of the updated terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">13. Miscellaneous</h2>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <strong>Entire Agreement:</strong> This Agreement, together with our
                    Privacy Policy, constitutes the entire agreement between you and
                    Rolitt regarding your use of our Services.
                  </li>
                  <li>
                    <strong>Severability:</strong> If any provision of this Agreement is
                    found to be invalid or unenforceable, the remaining provisions will
                    continue in full force and effect.
                  </li>
                  <li>
                    <strong>Waiver:</strong> No waiver of any term of this Agreement
                    will be deemed a further or continuing waiver of such term or any
                    other term, and Rolitt's failure to assert any right or provision
                    under this Agreement will not constitute a waiver of such right or
                    provision.
                  </li>
                  <li>
                    <strong>Assignment:</strong> You may not assign or transfer this
                    Agreement or any rights or obligations hereunder without our prior
                    written consent. We may assign or transfer this Agreement, in whole
                    or in part, without restriction.
                  </li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold mb-4">14. How to Contact Us</h2>
                <p>
                  If you have any questions or concerns not already addressed in this
                  page, please contact us at:
                </p>
                <p className="mt-4">Email: support@rolitt.com</p>
                <p className="mt-2">
                  Mailing Address: 1111B S Governors Ave STE 20948 Dover, DE 19904
                </p>
              </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}