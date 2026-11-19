import { Link } from "react-router-dom";
import LegalPage from "../components/LegalPage.jsx";
import { SITE } from "../seo.js";

export default function Terms() {
  return (
    <LegalPage eyebrow="Legal" title="Terms of service" updated="November 18, 2026">
      <p>
        These terms cover your use of gardnersolutions.co and the Gardner Solutions client portal at
        portal.gardnersolutions.co. By using either, you agree to them. Questions:{" "}
        <a href={`mailto:${SITE.email}`}>{SITE.email}</a>.
      </p>

      <h2>Our services and your agreement with us</h2>
      <p>
        The work we do for you (scope, fees, timelines and ownership of deliverables) is set out in your written
        service agreement with Gardner Solutions. If that agreement and these terms disagree, the service
        agreement wins. These terms only cover using the website and portal.
      </p>

      <h2>Portal accounts</h2>
      <ul>
        <li>Portal access is by invitation only, for people at businesses we work with.</li>
        <li>
          Keep your password private and don't share your account. You're responsible for what happens under it,
          and you should tell us right away if you think someone else has used it.
        </li>
        <li>
          We may suspend or end portal access when our work together ends, or if an account is misused. We'll
          give you a reasonable chance to download your documents first, except where that's not possible for
          security reasons.
        </li>
      </ul>

      <h2>Your content</h2>
      <p>
        You keep ownership of the files and information you upload or send us. You give us permission to store,
        copy and use them only as needed to provide our services and run the portal. Please only upload content
        you have the right to share, and nothing unlawful, harmful or containing malware.
      </p>

      <h2>Meetings</h2>
      <p>
        You can book, reschedule and cancel meetings in the portal during the times we make available. Booked
        meetings are added to our Google Calendar and include a Google Meet link; your use of Google Meet is also
        subject to Google's terms. Please cancel or reschedule in the portal if you can't make a meeting.
      </p>

      <h2>Acceptable use</h2>
      <p>
        Don't try to access other clients' information or parts of the portal you weren't given access to,
        interfere with or overload the service, or use the website or portal for anything unlawful.
      </p>

      <h2>Website content</h2>
      <p>
        Content on gardnersolutions.co, including quiz results, is general information to support your own
        business decisions. It isn't legal, financial, tax or accounting advice, and it isn't a guarantee of
        particular results.
      </p>

      <h2>Availability and liability</h2>
      <p>
        We work to keep the website and portal running and secure, but they're provided "as is" and may
        sometimes be unavailable. To the extent the law allows, Gardner Solutions isn't liable for indirect or
        consequential losses from using them, and our total liability related to the website and portal is
        limited to the amount you've paid us in the three months before the claim. This doesn't limit anything
        in your service agreement or any rights the law doesn't let us limit.
      </p>

      <h2>Privacy</h2>
      <p>
        Our <Link to="/privacy">privacy policy</Link> explains what we collect and how we use it.
      </p>

      <h2>Changes and governing law</h2>
      <p>
        We may update these terms and will change the date above when we do; continuing to use the website or
        portal after that means you accept the update. These terms are governed by the laws of the State of
        Tennessee.
      </p>
    </LegalPage>
  );
}
