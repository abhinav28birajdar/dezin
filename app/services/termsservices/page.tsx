import PageHeader from "@/components/page-header";
import Link from "next/link";

export default function TermsPage() {
  return (
    <div>
      <Link href="/">
        <div>
          <PageHeader />
        </div>
      </Link>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-3xl md:text-4xl font-bold mb-8">Terms of Service</h1>

        <div className="text-zinc-400 mb-8">
          <p>Last Updated: December 15, 2023</p>
        </div>

        <div className="prose prose-invert max-w-none">
          <p className="text-zinc-300 mb-6">
            Welcome to Artynex Design. These Terms of Service ("Terms") govern your use of our website, services, and
            products. By accessing or using our services, you agree to be bound by these Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">1. Acceptance of Terms</h2>
          <p className="text-zinc-300 mb-4">
            By accessing or using the services provided by Artynex Design ("we," "us," or "our"), you agree to be bound
            by these Terms of Service. If you do not agree to all the terms and conditions, you may not access or use
            our services.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">2. Description of Services</h2>
          <p className="text-zinc-300 mb-4">
            Artynex Design provides creative design services including but not limited to graphic design, UI/UX design,
            branding, motion graphics, AR/VR design, and sound design. The specific deliverables and scope of work will
            be outlined in a separate agreement or statement of work for each project.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">3. Client Responsibilities</h2>
          <p className="text-zinc-300 mb-4">Clients are responsible for:</p>
          <ul className="list-disc pl-6 mb-4 text-zinc-300">
            <li className="mb-2">Providing timely and accurate information required for the project</li>
            <li className="mb-2">Reviewing and providing feedback on deliverables within agreed timeframes</li>
            <li className="mb-2">Ensuring they have the necessary rights to any materials provided to us</li>
            <li className="mb-2">Making payments according to the agreed payment schedule</li>
          </ul>

          <h2 className="text-xl font-semibold mt-8 mb-4">4. Intellectual Property Rights</h2>
          <p className="text-zinc-300 mb-4">
            Upon full payment of all fees, clients will receive ownership rights to the final deliverables as specified
            in the project agreement. Artynex Design retains ownership of all preliminary designs and concepts not
            selected for final delivery.
          </p>
          <p className="text-zinc-300 mb-4">
            We reserve the right to display and link to completed client projects as part of our portfolio and to
            describe our role in the project for promotional purposes, unless explicitly agreed otherwise.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">5. Payment Terms</h2>
          <p className="text-zinc-300 mb-4">
            Payment terms will be specified in each project agreement. Typically, we require a deposit before beginning
            work, with remaining payments due at specified milestones or upon completion of the project.
          </p>
          <p className="text-zinc-300 mb-4">
            Late payments may incur additional fees and result in suspension of work until payment is received.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">6. Revisions and Alterations</h2>
          <p className="text-zinc-300 mb-4">
            The number of revisions included in a project will be specified in the project agreement. Additional
            revisions beyond the agreed scope may incur additional charges.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">7. Project Cancellation</h2>
          <p className="text-zinc-300 mb-4">
            If a client cancels a project after work has begun, payment will be due for all work completed up to the
            cancellation date, plus any non-refundable expenses incurred.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">8. Confidentiality</h2>
          <p className="text-zinc-300 mb-4">
            We agree to keep confidential any proprietary information shared by clients during the course of a project.
            Clients agree to keep confidential any proprietary information about our methods, processes, or business
            shared during the project.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">9. Limitation of Liability</h2>
          <p className="text-zinc-300 mb-4">
            Artynex Design shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            resulting from the use of our services or any deliverables provided.
          </p>
          <p className="text-zinc-300 mb-4">
            Our total liability for any claims under these Terms shall not exceed the amount paid by the client for the
            specific project giving rise to the claim.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">10. Governing Law</h2>
          <p className="text-zinc-300 mb-4">
            These Terms shall be governed by and construed in accordance with the laws of the jurisdiction in which
            Artynex Design is established, without regard to its conflict of law provisions.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">11. Changes to Terms</h2>
          <p className="text-zinc-300 mb-4">
            We reserve the right to modify these Terms at any time. Changes will be effective upon posting to our
            website. Your continued use of our services after any changes indicates your acceptance of the new Terms.
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-4">12. Contact Information</h2>
          <p className="text-zinc-300 mb-4">If you have any questions about these Terms, please contact us:</p>

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
  );
}