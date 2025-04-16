import PageHeader from "@/components/page-header"
import Link from "next/link"

export default function CookiesPage() {
  return (
    <div>
      <Link href="/">
        <div>
          <PageHeader />
        </div>
      </Link>

      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Cookie Policy</h1>

        <div className="text-zinc-400 mb-8">
          <p>Last Updated: January 20, 2024</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-300 mb-6">
            This Cookie Policy explains how Artynex Design ("we", "us", or "our") uses cookies and similar technologies
            on our website. This policy is part of our{" "}
            <Link href="/privacy" className="text-purple-500 hover:text-purple-400">
              Privacy Policy
            </Link>
            .
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. What Are Cookies?</h2>
          <p className="text-zinc-300 mb-4">
            Cookies are small text files that are stored on your device (computer, tablet, or mobile) when you visit a
            website. Cookies are widely used to make websites work more efficiently and provide information to the
            website owners.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Types of Cookies We Use</h2>
          <p className="text-zinc-300 mb-4">We use the following types of cookies on our website:</p>

          <h3 className="text-lg font-medium mt-6 mb-3">Essential Cookies</h3>
          <p className="text-zinc-300 mb-4">
            These cookies are necessary for the website to function properly. They enable basic functions like page
            navigation and access to secure areas of the website. The website cannot function properly without these
            cookies.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">Performance Cookies</h3>
          <p className="text-zinc-300 mb-4">
            These cookies help us understand how visitors interact with our website by collecting and reporting
            information anonymously. They help us improve the way our website works.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">Functionality Cookies</h3>
          <p className="text-zinc-300 mb-4">
            These cookies allow the website to remember choices you make (such as your preferred language or the region
            you are in) and provide enhanced, more personal features.
          </p>

          <h3 className="text-lg font-medium mt-6 mb-3">Marketing Cookies</h3>
          <p className="text-zinc-300 mb-4">
            These cookies are used to track visitors across websites. The intention is to display ads that are relevant
            and engaging for the individual user and thereby more valuable for publishers and third-party advertisers.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Specific Cookies We Use</h2>
          <div className="overflow-x-auto mb-6">
            <table className="min-w-full bg-zinc-900/50 border border-zinc-800 rounded-lg">
              <thead>
                <tr>
                  <th className="px-4 py-3 border-b border-zinc-800 text-left text-zinc-300">Cookie Name</th>
                  <th className="px-4 py-3 border-b border-zinc-800 text-left text-zinc-300">Type</th>
                  <th className="px-4 py-3 border-b border-zinc-800 text-left text-zinc-300">Purpose</th>
                  <th className="px-4 py-3 border-b border-zinc-800 text-left text-zinc-300">Duration</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">_ga</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">Performance</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">2 years</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">_gid</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">Performance</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">
                    Used by Google Analytics to distinguish users
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">24 hours</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">_gat</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">Performance</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">
                    Used by Google Analytics to throttle request rate
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">1 minute</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">cookie_consent</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">Essential</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">
                    Stores your cookie consent preferences
                  </td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">1 year</td>
                </tr>
                <tr>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">session</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">Essential</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">Maintains your session state</td>
                  <td className="px-4 py-3 border-b border-zinc-800 text-zinc-400">Session</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Third-Party Cookies</h2>
          <p className="text-zinc-300 mb-4">
            In addition to our own cookies, we may also use various third-party cookies to report usage statistics of
            the website and deliver advertisements on and through the website. These may include:
          </p>
          <ul className="list-disc pl-6 mb-4 text-zinc-300">
            <li className="mb-2">Google Analytics</li>
            <li className="mb-2">Google Ads</li>
            <li className="mb-2">Facebook Pixel</li>
            <li className="mb-2">LinkedIn Insight Tag</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Managing Cookies</h2>
          <p className="text-zinc-300 mb-4">
            Most web browsers allow you to control cookies through their settings preferences. However, if you limit the
            ability of websites to set cookies, you may worsen your overall user experience, since it will no longer be
            personalized to you.
          </p>
          <p className="text-zinc-300 mb-4">
            To find out more about cookies, including how to see what cookies have been set and how to manage and delete
            them, visit{" "}
            <a
              href="https://www.allaboutcookies.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-purple-500 hover:text-purple-400"
            >
              www.allaboutcookies.org
            </a>
            .
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Cookie Consent</h2>
          <p className="text-zinc-300 mb-4">
            When you first visit our website, you will be shown a cookie banner requesting your consent to set
            non-essential cookies. You can change your cookie preferences at any time by clicking on the "Cookie
            Settings" link in the footer of our website.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Changes to This Cookie Policy</h2>
          <p className="text-zinc-300 mb-4">
            We may update our Cookie Policy from time to time. We will notify you of any changes by posting the new
            Cookie Policy on this page and updating the "Last Updated" date.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Contact Us</h2>
          <p className="text-zinc-300 mb-4">If you have any questions about our Cookie Policy, please contact us:</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 mb-8">
            <div className="flex flex-col">
              <h3 className="text-lg font-medium mb-3">Email Us</h3>
              <a href="mailto:hello@Artynex.com" className="text-purple-500 hover:text-purple-400">hello@Artynex.com</a>
              <a href="mailto:support@Artynex.com" className="text-purple-500 hover:text-purple-400">support@Artynex.com</a>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-lg font-medium mb-3">Call Us</h3>
              <p className="text-zinc-400">+1 (555) 123-4567</p>
              <p className="text-zinc-400">Mon-Fri: 9am - 6pm EST</p>
            </div>
            
            <div className="flex flex-col">
              <h3 className="text-lg font-medium mb-3">Visit Us</h3>
              <p className="text-zinc-400">Artynex</p>
              <p className="text-zinc-400">Nanded-431602</p>
              <p className="text-zinc-400">Maharashtra, India.</p>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800">
          <p className="text-zinc-400">© 2023-{new Date().getFullYear()} Artynex Design. All rights reserved.</p>
          <p className="text-zinc-500 text-sm mt-2">Proudly serving clients since 2023.</p>
        </div>
      </div>
    </div>
  )
}