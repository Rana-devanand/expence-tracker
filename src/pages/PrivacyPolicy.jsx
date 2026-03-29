import React from 'react';
import { NavLink } from 'react-router-dom';
import { ShieldCheck, Database, CreditCard, Lock, ChevronRight } from 'lucide-react';

const PrivacyPolicy = () => {
  return (
    <main className="container page-content animate-fade">
      <div className="privacy-layout">
        <aside className="side-nav">
          <div style={{ marginBottom: '32px' }}>
            <h4 style={{ fontSize: '0.9rem', color: 'var(--text-dim)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '16px' }}>Legal Center</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <NavLink to="/privacy" className={({ isActive }) => isActive ? "side-nav-link active" : "side-nav-link"}>
                Privacy Policy <ChevronRight size={14} style={{ opacity: 0.5 }} />
              </NavLink>
              <NavLink to="/terms" className={({ isActive }) => isActive ? "side-nav-link active" : "side-nav-link"}>
                Terms of Service <ChevronRight size={14} style={{ opacity: 0.5 }} />
              </NavLink>
            </div>
          </div>
          <div className="card" style={{ background: 'var(--primary)', color: '#000', border: 'none', padding: '24px' }}>
            <h4 style={{ fontSize: '0.95rem', fontWeight: '800', marginBottom: '12px' }}>Data Security</h4>
            <p style={{ fontSize: '0.8rem', opacity: 0.8, lineHeight: '1.6' }}>We use bank-grade AES-256 encryption to protect your financial flow data.</p>
          </div>
        </aside>
        
        <article className="privacy-content-box">
          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '32px', marginBottom: '48px' }}>
             <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '12px' }}>Legal / Policy</p>
             <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.02em', marginBottom: '16px' }}>Privacy Policy</h1>
             <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>At Money Flow, your privacy is our foundation. Learn how we handle your data with care.</p>
             <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <span style={{ fontSize: '0.75rem', background: 'var(--bg-secondary)', padding: '6px 12px', borderRadius: '100px', border: '1px solid var(--border)' }}>Last Updated: March 28, 2026</span>
                <span style={{ fontSize: '0.75rem', background: 'var(--bg-secondary)', padding: '6px 12px', borderRadius: '100px', border: '1px solid var(--border)' }}>Version: 1.0.2</span>
             </div>
          </div>
          
          <section className="legal-section">
            <div className="legal-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', padding: '10px', borderRadius: '12px' }}>
                <ShieldCheck size={20} />
              </div>
              <h2 style={{ fontSize: '1.4rem' }}>1. Data Collection Philosophy</h2>
            </div>
            <p>At <strong>Money Flow</strong>, we prioritize your data privacy but require certain data to operate effectively. We collect information necessary to track transfers and expenses including:</p>
            <ul style={{ background: 'var(--glass)', padding: '24px 24px 24px 44px', borderRadius: '16px', border: '1px solid var(--border)', margin: '24px 0' }}>
              <li>Account metadata (fully encrypted)</li>
              <li>SMS patterns for financial categorization</li>
              <li>Usage metrics for app optimization (anonymous)</li>
            </ul>
          </section>
          
          <section className="legal-section" style={{ marginTop: '48px' }}>
            <div className="legal-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="icon-box" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6', padding: '10px', borderRadius: '12px' }}>
                <Database size={20} />
              </div>
              <h2 style={{ fontSize: '1.4rem' }}>2. Local-First Awareness</h2>
            </div>
            <p>Money Flow processes your sensitive financial SMS data <strong>on-device</strong>. We do not store raw transaction contents on our servers.</p>
            <div className="card" style={{ borderStyle: 'dashed', background: 'transparent', marginTop: '20px' }}>
               <p style={{ fontSize: '0.85rem' }}><CheckCircle size={14} color="var(--primary)" /> No SMS content is ever uploaded to the cloud.</p>
            </div>
          </section>
          
          <section className="legal-section" style={{ marginTop: '48px' }}>
             <div className="legal-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="icon-box" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', padding: '10px', borderRadius: '12px' }}>
                <Lock size={20} />
              </div>
              <h2 style={{ fontSize: '1.4rem' }}>3. Data Transmission Security</h2>
            </div>
            <p>We use state-of-the-art AI models to categorize transactions. Only non-sensitive transaction snippets are passed through our enrichment pipeline via TLS 1.3 encrypted tunnels.</p>
          </section>
        </article>
      </div>
    </main>
  );
};

// Internal icon for the list
const CheckCircle = ({size, color}) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" style={{marginRight: '8px', verticalAlign: 'middle'}}><polyline points="20 6 9 17 4 12"></polyline></svg>
);

export default PrivacyPolicy;
