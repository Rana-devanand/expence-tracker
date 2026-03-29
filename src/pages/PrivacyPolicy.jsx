import { useState, useEffect } from "react";
import { ShieldCheck, Database, Lock, FileText, UserCheck, ShieldOff, AlertTriangle, ChevronRight } from "lucide-react";

const styles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  .legal-app {
    min-height: 100vh;
    background: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }



  /* Layout */
  .page-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

  /* Page Header */
  .page-header {
    margin-bottom: 40px;
    padding-bottom: 32px;
    border-bottom: 1px solid var(--border);
  }

  .breadcrumb {
    font-size: 0.7rem;
    font-weight: 700;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: var(--primary);
    margin-bottom: 12px;
  }

  .page-title {
    font-size: 2.2rem;
    font-weight: 800;
    letter-spacing: -0.03em;
    line-height: 1.1;
    margin-bottom: 12px;
  }

  .page-subtitle {
    font-size: 0.95rem;
    color: var(--text-dim);
    line-height: 1.6;
    margin-bottom: 24px;
  }

  .meta-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }

  .meta-tag {
    font-size: 0.75rem;
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: 100px;
    color: var(--text-dim);
  }

  /* Sections */
  .section {
    margin-bottom: 48px;
  }

  .section-header {
    display: flex;
    align-items: center;
    gap: 16px;
    margin-bottom: 20px;
  }

  .icon-wrap {
    width: 36px;
    height: 36px;
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;
    border: 1px solid var(--border);
  }

  .icon-green { background: rgba(16, 185, 129, 0.1); color: var(--primary); }
  .icon-blue  { background: rgba(59, 130, 246, 0.1);  color: #3b82f6;  }
  .icon-red   { background: rgba(239, 68, 68, 0.1);   color: #ef4444;   }

  .section-title {
    font-size: 1.25rem;
    font-weight: 700;
  }

  .section-body {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-dim);
    padding-left: 52px;
  }

  .section-body strong {
    color: var(--text-main);
  }

  .item-list {
    background: var(--surface);
    border: 1px solid var(--border);
    border-radius: 12px;
    padding: 20px;
    margin-top: 16px;
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .item-list li {
    display: flex;
    align-items: center;
    gap: 12px;
    font-size: 0.85rem;
    color: var(--text-dim);
  }

  .item-list li::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 2px;
    background: var(--primary);
    flex-shrink: 0;
  }

  .info-card {
    background: var(--surface);
    border: 1px dashed var(--border);
    border-radius: 12px;
    padding: 16px;
    margin-top: 20px;
    font-size: 0.85rem;
    color: var(--text-dim);
    display: flex;
    align-items: center;
    gap: 12px;
  }

  .info-card svg { color: var(--primary); }

  .warn-card {
    background: rgba(239, 68, 68, 0.05);
    border: 1px solid rgba(239, 68, 68, 0.2);
    border-radius: 12px;
    padding: 20px;
    margin-top: 20px;
  }

  .warn-title {
    display: flex;
    align-items: center;
    gap: 10px;
    color: #ef4444;
    font-weight: 700;
    font-size: 0.9rem;
    margin-bottom: 12px;
  }

  .warn-body {
    font-size: 0.85rem;
    line-height: 1.7;
    color: var(--text-dim);
  }

  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 48px 0;
  }

  /* Responsive */
  @media (max-width: 768px) {
    .page-wrap { padding: 32px 20px 60px; }
    .section-body { padding-left: 0; }
    .top-nav { display: none; } /* On mobile we use the main nav only */
  }
`;

const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const PrivacyContent = () => (
  <>
    <div className="page-header animate-fade">
      <p className="breadcrumb">Money Flow · Privacy</p>
      <h1 className="page-title">Privacy Policy</h1>
      <p className="page-subtitle">Your trust is our most valuable asset. We handle your financial data with transparency and military-grade security.</p>
      <div className="meta-tags">
        <span className="meta-tag">Last Updated: March 28, 2026</span>
        <span className="meta-tag">Version 1.0.2</span>
        <span className="meta-tag">GDPR Compliant</span>
      </div>
    </div>

    <div className="section">
      <div className="section-header">
        <div className="icon-wrap icon-green"><ShieldCheck size={18} /></div>
        <h2 className="section-title">1. Data Collection Philosophy</h2>
      </div>
      <div className="section-body">
        <p>At <strong>Money Flow</strong>, we prioritize your data privacy but require certain data to operate effectively. We collect information necessary to track transfers and expenses including:</p>
        <ul className="item-list">
          <li>Account metadata (fully encrypted at rest)</li>
          <li>SMS patterns for automated financial categorization</li>
          <li>Usage metrics for app stability and optimization</li>
        </ul>
      </div>
    </div>

    <hr className="divider" />

    <div className="section">
      <div className="section-header">
        <div className="icon-wrap icon-blue"><Database size={18} /></div>
        <h2 className="section-title">2. Local-First Awareness</h2>
      </div>
      <div className="section-body">
        <p>Money Flow processes your sensitive financial SMS data <strong>locally on your device</strong>. We do not store raw transaction contents on our servers.</p>
        <div className="info-card">
          <CheckIcon />
          <span>Raw SMS content never leaves your physical device.</span>
        </div>
      </div>
    </div>

    <hr className="divider" />

    <div className="section">
      <div className="section-header">
        <div className="icon-wrap icon-red"><Lock size={18} /></div>
        <h2 className="section-title">3. Data Transmission Security</h2>
      </div>
      <div className="section-body">
        <p>We use state-of-the-art AI models to categorize transactions. Only non-sensitive, anonymized transaction snippets are passed through our enrichment pipeline via TLS 1.3 encrypted tunnels.</p>
      </div>
    </div>
  </>
);

const TermsContent = () => (
  <>
    <div className="page-header animate-fade">
      <p className="breadcrumb">Money Flow · Agreement</p>
      <h1 className="page-title">Terms of Service</h1>
      <p className="page-subtitle">Understand your rights and responsibilities when managing your wealth with Money Flow.</p>
      <div className="meta-tags">
        <span className="meta-tag">Effective: March 28, 2026</span>
        <span className="meta-tag">Terms v1.1</span>
      </div>
    </div>

    <div className="section">
      <div className="section-header">
        <div className="icon-wrap icon-blue"><FileText size={18} /></div>
        <h2 className="section-title">1. Service Agreement</h2>
      </div>
      <div className="section-body">
        <p>By using <strong>Money Flow</strong>, you enter into a binding agreement with us. You agree to use our services responsibly and for your personal financial management only.</p>
      </div>
    </div>

    <hr className="divider" />

    <div className="section">
      <div className="section-header">
        <div className="icon-wrap icon-green"><UserCheck size={18} /></div>
        <h2 className="section-title">2. User Conduct</h2>
      </div>
      <div className="section-body">
        <p>You are solely responsible for all activities within your account. Using Money Flow to commit fraud or engage in illegal activities is strictly prohibited and results in immediate termination.</p>
      </div>
    </div>

    <hr className="divider" />

    <div className="section">
      <div className="section-header">
        <div className="icon-wrap icon-red"><ShieldOff size={18} /></div>
        <h2 className="section-title">3. Disclaimer of Liability</h2>
      </div>
      <div className="section-body">
        <div className="warn-card">
          <div className="warn-title">
            <AlertTriangle size={15} />
            Financial Advisory Disclosure
          </div>
          <p className="warn-body">Money Flow is an AI-powered analytic tool. We do not provide professional financial advice. All investment and spending decisions are at your own discretion. Money Flow is not liable for financial outcomes.</p>
        </div>
      </div>
    </div>
  </>
);

export default function LegalPages() {
  const [tab, setTab] = useState("privacy");

  return (
    <div className="legal-app">
      <style>{styles}</style>


      <div className="page-wrap">
        {tab === "privacy" ? <PrivacyContent /> : <TermsContent />}
      </div>
    </div>
  );
}