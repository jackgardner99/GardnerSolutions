import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage.jsx";
import { SITE } from "../seo.js";

export default function Privacy() {
  return (
    <LegalPage eyebrow="Legal" title="Privacy policy" updated="November 18, 2026">
      <p>
        This policy explains what Gardner Solutions ("we", "us") collects through gardnersolutions.co and
        our client portal at portal.gardnersolutions.co, how we use it, and the choices you have. Questions:{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>What we collect</h2>
      <h3>On gardnersolutions.co</h3>
      <ul>
        <li>
          <strong>Contact form:</strong> your name, business name, email, phone number, type of business and
          message, if you choose to send them.
        </li>
        <li>
          <strong>Fit quiz:</strong> your answers, name, email and business name, so we can send your results
          and follow up.
        </li>
      </ul>
      <p>The website doesn't use analytics, advertising trackers or cookies.</p>

      <h3>In the client portal</h3>
      <p>The portal is only for our clients, who are invited by us. For each client account we keep:</p>
      <ul>
        <li>Name, email, business name and role, and a securely hashed password (we never see your password).</li>
        <li>Project details and the status updates we post.</li>
        <li>Documents you or we upload, such as contracts, invoices and deliverables.</li>
        <li>Email conversations about your project that include our portal address, which the portal mirrors.</li>
        <li>Meetings you book or we schedule with you, including their times and Google Meet links.</li>
      </ul>
      <p>
        When you sign in, the portal saves a sign-in token in your browser's storage so you stay signed in. It
        doesn't use cookies for tracking.
      </p>

      <h2>How we use it</h2>
      <p>
        Only to respond to you and to provide and run our services: delivering your project, sharing files and
        updates with you, scheduling meetings, and sending emails you'd expect, such as portal invitations and
        meeting invites. We don't sell your information, use it for advertising, or share it with anyone except
        the service providers below.
      </p>

      <h2>Google user data</h2>
      <p>
        The portal can connect to a Google account to schedule meetings. Only Gardner Solutions staff connect
        their own Google accounts; clients are never asked to sign in with Google. With a connected account, the
        portal:
      </p>
      <ul>
        <li>
          reads <strong>free/busy times</strong> on that person's calendar, so clients are only offered times
          when they're available (it doesn't read event titles, descriptions or attendees), and
        </li>
        <li>
          <strong>creates, updates and cancels calendar events</strong> for meetings booked in the portal, with a
          Google Meet link, and sends the invitation to the client.
        </li>
      </ul>
      <p>
        We use this access only for those scheduling features. We don't store calendar contents beyond the
        meetings the portal itself creates, and the access credential Google provides is stored encrypted. The
        account owner can disconnect at any time from the portal or from their Google Account settings, which
        stops all access.
      </p>
      <p>
        Gardner Solutions' use and transfer of information received from Google APIs adheres to the{" "}
        <a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noreferrer">
          Google API Services User Data Policy
        </a>
        , including the Limited Use requirements. We don't use Google user data for advertising, don't sell it,
        don't let people read it except as needed to run the features above or for security and legal reasons,
        and don't use it to train AI models.
      </p>

      <h2>Service providers</h2>
      <p>We rely on a few companies to run the website and portal, and they handle data only on our behalf:</p>
      <ul>
        <li>GitHub Pages (hosts this website) and Railway (hosts the portal, its database and files, and the quiz).</li>
        <li>Formspree (receives contact form submissions).</li>
        <li>Resend (sends portal emails such as invitations) and Postmark (receives project emails for the portal).</li>
        <li>Google (Calendar and Meet, for meetings).</li>
      </ul>

      <h2>How long we keep it</h2>
      <p>
        We keep client portal information for as long as we work together and for a reasonable period afterward
        for our records, or as required by law. Contact form and quiz submissions are kept as long as they're
        useful for following up. You can ask us to delete your information at any time.
      </p>

      <h2>Security</h2>
      <p>
        Connections to the website and portal are encrypted (HTTPS), passwords are hashed, portal access is
        limited to your own company's records, and Google credentials are encrypted at rest. No system is
        perfectly secure, so please keep your portal password private and tell us right away if you think your
        account has been misused.
      </p>

      <h2>Your choices</h2>
      <p>
        You can ask to see, correct or delete the information we hold about you, or to close your portal account,
        by emailing <a href={`mailto:${SITE.email}`}>{SITE.email}</a>. Our services aren't directed to children
        under 13, and we don't knowingly collect their information.
      </p>

      <h2>Changes</h2>
      <p>
        If we change this policy we'll update the date above, and we'll tell portal clients about significant
        changes. See also our <Link to="/terms">terms of service</Link>.
      </p>
    </LegalPage>
  );
}
