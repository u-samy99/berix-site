import React from 'react';

const Contact = () => (
  <>
    <section className="section contact">
      <div className="contact-grid">
        <div className="contact-column">
          <h3>📞 Call us</h3>
          <p>Tel : +1-307-316-0370</p>
          <p>Monday – Friday</p>
        </div>

        <div className="contact-column">
          <h3>📧 Email us</h3>
          <p>by email directly:</p>
          <p><strong>sales@berixllc.com</strong></p>
        </div>

        <div className="contact-column">
          <h3>🏢 Our Offices</h3>
          <p><strong>BERIX</strong></p>
          <p>1908 Thomes Cheyenne, WY 82001</p>
        </div>
      </div>
    </section>

    <footer className="footer">
      <p>© {new Date().getFullYear()} BERIX. All rights reserved.</p>
    </footer>
  </>
);

export default Contact;
