import React from 'react';
import { NavLink } from 'react-router-dom';

const TermsOfService = () => {
  return (
    <main className="container page-content animate-fade">
      <div className="privacy-layout">
        <aside className="side-nav">
          <NavLink to="/privacy" className="side-nav-link">Privacy Policy</NavLink>
          <NavLink to="/terms" className="side-nav-link active">Terms of Service</NavLink>
        </aside>
        
        <article className="privacy-content-box">
          <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Last Updated: March 28, 2026</p>
          <h1 style={{ fontSize: '2.5rem', margin: '12px 0 32px' }}>Terms of Service</h1>
          
          <section>
            <h3>1. Acceptance of Terms</h3>
            <p>By accessing and using ExpenseAI, you agree to be bound by these Terms of Service and all applicable laws and regulations.</p>
          </section>
          
          <section>
            <h3>2. User Responsibilities</h3>
            <p>You are responsible for maintaining the confidentiality of your account credentials and for all activities that occur under your account.</p>
          </section>
          
          <section>
            <h3>3. Service Limitations</h3>
            <p>ExpenseAI provides financial insights for informational purposes. We do not provide professional financial, legal, or tax advice. Always consult with a qualified professional before making significant financial decisions.</p>
          </section>
          
          <section>
            <h3>4. Intellectual Property</h3>
            <p>The service and its original content, features, and functionality are and will remain the exclusive property of ExpenseAI and its licensors.</p>
          </section>
          
          <section>
            <h3>5. Termination</h3>
            <p>We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default TermsOfService;
