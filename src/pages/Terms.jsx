import { useState } from "react";
import { FileText, UserCheck, ShieldOff, AlertTriangle } from "lucide-react";

const styles = `
  .legal-app {
    min-height: 100vh;
    background: var(--bg-dark);
    color: var(--text-main);
    font-family: 'Plus Jakarta Sans', sans-serif;
  }


  .page-wrap {
    max-width: 800px;
    margin: 0 auto;
    padding: 40px 24px 80px;
  }

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

  .meta-tag {
    font-size: 0.75rem;
    background: var(--surface);
    border: 1px solid var(--border);
    padding: 6px 14px;
    border-radius: 100px;
    color: var(--text-dim);
  }

  .section { margin-bottom: 48px; }

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

  .section-title { font-size: 1.25rem; font-weight: 700; }

  .section-body {
    font-size: 0.9rem;
    line-height: 1.8;
    color: var(--text-dim);
    padding-left: 52px;
  }

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

  .warn-body { font-size: 0.85rem; line-height: 1.7; color: var(--text-dim); }

  .divider {
    border: none;
    border-top: 1px solid var(--border);
    margin: 48px 0;
  }
`;

const TermsOfService = () => (
  <div className="legal-app">
    <style>{styles}</style>
    <div className="page-wrap animate-fade">
      <div className="page-header">
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
            <p className="warn-body">Money Flow is an AI-powered analytic tool. We do not provide professional financial advice. All investment and spending decisions are at your own discretion.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default TermsOfService;
 
