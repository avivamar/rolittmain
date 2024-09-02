import { Metadata } from 'next';
import { unstable_setRequestLocale } from 'next-intl/server';
import { Navbar } from '@/templates/Navbar';
import { Footer } from '@/templates/Footer';

export const metadata: Metadata = {
  title: 'Privacy Policy | Rolitt',
  description: 'Read Rolitt\'s privacy policy to understand how we collect, use, and protect your personal information.',
  openGraph: {
    title: 'Privacy Policy | Rolitt',
    description: 'Read Rolitt\'s privacy policy to understand how we collect, use, and protect your personal information.',
    url: 'https://rolitt.com/privacy-policy',
    siteName: 'Rolitt',
    images: [
      {
        url: 'https://rolitt.com/og-image.jpg', // 请确保这个图片存在
        width: 1200,
        height: 630,
        alt: 'Rolitt Privacy Policy',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

export default function PrivacyPolicyPage({ params: { locale } }: { params: { locale: string } }) {
  unstable_setRequestLocale(locale);

  return (
    <>
      <Navbar />
      <main className="flex-grow bg-background text-foreground">
        <div className="container mx-auto px-4 py-8 sm:py-16">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight lg:text-5xl mb-6">
              Privacy Policy for Rolitt Inc.
            </h1>
            <p className="text-lg mb-8">
              Effective: January 31, 2024
            </p>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                Introduction
              </h2>
              <p className="mb-4">
                Welcome to Rolitt. We at Rolitt Inc. ("Rolitt", "we", "our" or "us")
                respect your privacy and are committed to protecting your personal
                information. This Privacy Policy describes our practices concerning
                the collection, use, and disclosure of your personal information when
                you use our websites (rolitt.ai and rolitt.com), applications, and AI
                services, including our physical AI robot products (collectively,
                "Services"). This policy complies with applicable laws in the United
                States and the European Economic Area (EEA), including the General
                Data Protection Regulation (GDPR).
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                1. Personal Information We Collect
              </h2>
              <p className="mb-4">
                We collect personal information relating to you ("Personal
                Information") as follows:
              </p>
              <h3 className="text-xl font-semibold mb-2">Personal information you provide:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Account Information: When you create an account with us, we collect
                  information such as your name, contact details, account credentials,
                  payment card information, and transaction history.
                </li>
                <li>
                  User Content: When you interact with our AI services or use our
                  products, we collect any data you input, upload, or feedback you
                  provide.
                </li>
                <li>
                  Communication Information: If you communicate with us, we collect
                  your name, contact details, and the contents of your messages.
                </li>
                <li>
                  Social Media Information: When you interact with our social media
                  accounts, we may collect information you provide or make available.
                </li>
              </ul>
              <h3 className="text-xl font-semibold mb-2">Information we collect automatically:</h3>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>
                  Usage Information: We collect information about your interactions
                  with our Services, including the pages or content you view, your
                  searches, and other actions on our Services.
                </li>
                <li>
                  Device Information: We collect information about the device you use
                  to access our Services, including the hardware model, operating
                  system and version, unique device identifiers, and mobile network
                  information.
                </li>
                <li>
                  Location Information: We may collect and process information about
                  your actual location using various technologies to determine
                  location, including IP address.
                </li>
                <li>
                  Log Data: Our servers automatically record information created by
                  your use of our Services, which may include IP address, browser
                  type, operating system, referring/exit pages, clickstream data, and
                  other usage data.
                </li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                2. How We Use Your Personal Information
              </h2>
              <p className="mb-4">
                We use your Personal Information for the following purposes:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>To provide, maintain, and improve our Services;</li>
                <li>To process transactions and send related information;</li>
                <li>To send technical notices, updates, security alerts, and support and administrative messages;</li>
                <li>To respond to your comments, questions, and requests;</li>
                <li>To communicate with you about products, services, offers, promotions, and events;</li>
                <li>To monitor and analyze trends, usage, and activities in connection with our Services;</li>
                <li>To personalize and improve the Services and provide content or features that match user profiles or interests;</li>
                <li>To carry out any other purpose for which the information was collected.</li>
              </ul>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                3. Sharing of Personal Information
              </h2>
              <p className="mb-4">
                We may share your Personal Information in the following circumstances:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 mb-4">
                  <thead>
                    <tr className="bg-yellow-500">
                      <th className="p-2 text-left border border-gray-300">Category of Personal Information</th>
                      <th className="p-2 text-left border border-gray-300">Categories of Recipients</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 border-r border-gray-300">
                        Account Information, such as your name, email address, and other contact information
                      </td>
                      <td className="p-2">
                        We may disclose this information to our affiliates, vendors
                        and service providers to process in accordance with our
                        instructions; to law enforcement and other third parties for
                        the legal reasons described above; and to parties involved in
                        Transactions.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 border-r border-gray-300">
                        Device Information, such as your IP address, browser type,
                        and other device identifiers
                      </td>
                      <td className="p-2">
                        We may disclose this information to our affiliates, vendors
                        and service providers to process in accordance with our
                        instructions; to law enforcement and other third parties for
                        the legal reasons described above; to parties involved in
                        Transactions; to corporate administrators of enterprise or
                        team accounts; and to other users and third parties you choose
                        to share it with.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 border-r border-gray-300">
                        Commercial Information, such as your transaction history
                      </td>
                      <td className="p-2">
                        We may disclose this information to our affiliates, vendors
                        and service providers to process in accordance with our
                        instructions; to law enforcement and other third parties for
                        the legal reasons described above; to parties involved in
                        Transactions; and to corporate administrators of enterprise or
                        team accounts.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 border-r border-gray-300">
                        Network Activity Information, such as Content and how you
                        interact with our Services
                      </td>
                      <td className="p-2">
                        We may disclose this information to our affiliates, vendors
                        and service providers to process in accordance with our
                        instructions; to law enforcement and other third parties for
                        the legal reasons described above; to parties involved in
                        Transactions; and to other users and third parties you choose
                        to share it with.
                      </td>
                    </tr>
                    <tr className="border-b border-gray-300">
                      <td className="p-2 border-r border-gray-300">
                        Geolocation Data
                      </td>
                      <td className="p-2">
                        We may disclose this information to our affiliates, vendors
                        and service providers to process in accordance with our
                        instructions; to law enforcement and other third parties for
                        the legal reasons described above; and to parties involved in
                        Transactions.
                      </td>
                    </tr>
                    <tr>
                      <td className="p-2 border-r border-gray-300">
                        Your account login credentials and payment card information
                        (Sensitive Personal Information)
                      </td>
                      <td className="p-2">
                        We disclose this information to our affiliates, vendors and
                        service providers, law enforcement, and parties involved in
                        Transactions.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                4. Your Rights and Choices
              </h2>
              <p className="mb-4">
                Depending on your location, you may have certain rights regarding your Personal Information:
              </p>
              <ul className="list-disc pl-6 mb-4 space-y-2">
                <li>Access and portability: You may request access to your Personal Information or request a copy in a structured, commonly used, and machine-readable format.</li>
                <li>Correction: You may request that we correct inaccurate or incomplete Personal Information.</li>
                <li>Deletion: You may request that we delete your Personal Information in certain circumstances.</li>
                <li>Restriction: You may request that we restrict the processing of your Personal Information in certain circumstances.</li>
                <li>Objection: You may object to our processing of your Personal Information in certain circumstances.</li>
                <li>Withdraw consent: Where we rely on consent as the legal basis for processing, you may withdraw consent at any time.</li>
              </ul>
              <p className="mb-4">
                <strong>Exercising Your Rights:</strong> To exercise these rights, please contact us using the information provided in the "Contact Us" section below.
              </p>
              <p className="mb-4">
                <strong>Verification:</strong> We may need to verify your identity before processing your request. We may ask for additional information to confirm your identity.
              </p>
              <p className="mb-4">
                <strong>Authorized Agents:</strong> You may designate an authorized agent to submit requests on your behalf. We may require written proof of the agent's permission to act on your behalf and verify your identity directly.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                5. Data Retention
              </h2>
              <p className="mb-4">
                We retain Personal Information for as long as necessary to provide our Services, comply with our legal obligations, resolve disputes, and enforce our agreements. The retention periods can vary depending on the type of information and the purposes for which it is used.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                6. Security
              </h2>
              <p className="mb-4">
                We implement appropriate technical and organizational measures to protect the security, confidentiality, and integrity of Personal Information. However, no security system is impenetrable, and we cannot guarantee the security of our systems 100%.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                7. International Data Transfers
              </h2>
              <p className="mb-4">
                We may transfer Personal Information to countries other than the country in which the data was originally collected. These countries may not have the same data protection laws as the country in which you initially provided the information. When we transfer Personal Information to other countries, we will protect that information as described in this Privacy Policy and comply with applicable legal requirements providing adequate protection for the transfer of Personal Information to countries outside the EEA or Switzerland.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                8. Children's Privacy
              </h2>
              <p className="mb-4">
                Our Services are not directed to children under the age of 13 (or other age as required by local law), and we do not knowingly collect Personal Information from children. If we learn that we have collected Personal Information from a child, we will take steps to delete such information from our files as soon as possible.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                9. Changes to this Privacy Policy
              </h2>
              <p className="mb-4">
                We may update this Privacy Policy from time to time. If we make material changes, we will notify you as required by applicable law. We encourage you to review this Privacy Policy periodically to stay informed about our practices.
              </p>
            </section>

            <section className="mb-12">
              <h2 className="text-2xl sm:text-3xl font-semibold mb-4">
                10. Contact Us
              </h2>
              <p className="mb-4">
                If you have any questions, concerns, or requests regarding this Privacy Policy or our privacy practices, please contact us at:
              </p>
              <address className="not-italic mb-4">
                Rolitt Inc.<br />
                Email: support@rolitt.com
                Mailing Address: 1111B S Governors Ave STE 20948 Dover, DE 19904<br />
                Phone: (302) 444-2859
              </address>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}