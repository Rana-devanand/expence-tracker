import React from 'react';
import { NavLink } from 'react-router-dom';

const PrivacyPolicy = () => {
  return (
    <main className="container page-content animate-fade">
      <div className="privacy-layout">
        <aside className="side-nav">
          <NavLink to="/privacy" className={({ isActive }) => isActive ? "side-nav-link active" : "side-nav-link"}>Privacy Policy</NavLink>
          <NavLink to="/terms" className={({ isActive }) => isActive ? "side-nav-link active" : "side-nav-link"}>Terms of Service</NavLink>
        </aside>
        
        <article className="privacy-content-box">
          <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>Updated March 28, 2026</p>
          <h1 style={{ fontSize: '1.8rem', margin: '8px 0 24px' }}>Privacy Policy</h1>
          
          <section>
            <h3>1. Personal Data Management</h3>
            <p>At <strong>Money Flow</strong>, we prioritize your data privacy. We collect information necessary to track transfers and expenses including:</p>
            <ul>
              <li>Account metadata (encrypted)</li>
              <li>SMS patterns for financial categorization</li>
              <li>Usage metrics for app optimization</li>
            </ul>
          </section>
          
          <section>
            <h3>2. Local-First Processing</h3>
            <p>Money Flow processes your sensitive financial SMS data <strong>on-device</strong>. We do not store raw transaction contents on our servers.</p>
          </section>
          
          <section>
            <h3>3. Third-party APIs</h3>
            <p>We use state-of-the-art AI models to categorize transactions. Only non-sensitive transaction snippets are passed through our enrichment pipeline.</p>
          </section>
        </article>
      </div>
    </main>
  );
};

export default PrivacyPolicy;
