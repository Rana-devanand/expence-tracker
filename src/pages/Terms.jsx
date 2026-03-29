import React from 'react';
import { NavLink } from 'react-router-dom';
import { FileText, UserCheck, ShieldOff, AlertTriangle, ChevronRight } from 'lucide-react';

const TermsOfService = () => {
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
          <div className="card" style={{ borderStyle: 'dotted', background: 'var(--bg-secondary)', padding: '24px' }}>
            <h4 style={{ fontSize: '0.9rem', fontWeight: '800', marginBottom: '8px' }}>Need Help?</h4>
            <p style={{ fontSize: '0.75rem', opacity: 0.7, lineHeight: '1.6' }}>If terms are unclear, contact our legal support desk anytime.</p>
          </div>
        </aside>
        
        <article className="privacy-content-box">
          <div style={{ borderBottom: '1px solid var(--border)', paddingBottom: '32px', marginBottom: '48px' }}>
             <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '12px' }}>Legal / Agreement</p>
             <h1 style={{ fontSize: '2.5rem', fontWeight: '900', letterSpacing: '-0.02em', marginBottom: '16px' }}>Terms of Service</h1>
             <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>Read how you and Money Flow interact through our platform and services.</p>
             <div style={{ display: 'flex', gap: '16px', marginTop: '24px' }}>
                <span style={{ fontSize: '0.75rem', background: 'var(--bg-secondary)', padding: '6px 12px', borderRadius: '100px', border: '1px solid var(--border)' }}>Effective: March 28, 2026</span>
             </div>
          </div>
          
          <section className="legal-section">
            <div className="legal-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="icon-box" style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6', padding: '10px', borderRadius: '12px' }}>
                <FileText size={20} />
              </div>
              <h2 style={{ fontSize: '1.4rem' }}>1. Service Agreement</h2>
            </div>
            <p>By using <strong>Money Flow</strong>, you enter into a binding agreement with us. You agree to use our services responsibly and for your personal financial management only.</p>
          </section>
          
          <section className="legal-section" style={{ marginTop: '48px' }}>
            <div className="legal-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="icon-box" style={{ background: 'rgba(16, 185, 129, 0.1)', color: 'var(--primary)', padding: '10px', borderRadius: '12px' }}>
                <UserCheck size={20} />
              </div>
              <h2 style={{ fontSize: '1.4rem' }}>2. User Conduct</h2>
            </div>
            <p>You are solely responsible for all activities within your account. Using Money Flow to commit fraud or engage in illegal activities is strictly prohibited and results in immediate termination.</p>
          </section>
          
          <section className="legal-section" style={{ marginTop: '48px' }}>
             <div className="legal-header" style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '24px' }}>
              <div className="icon-box" style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', padding: '10px', borderRadius: '12px' }}>
                <ShieldOff size={20} />
              </div>
              <h2 style={{ fontSize: '1.4rem' }}>3. Disclaimer of Liability</h2>
            </div>
            <div style={{ background: 'rgba(239, 68, 68, 0.05)', padding: '24px', borderRadius: '16px', border: '1px solid rgba(239, 68, 68, 0.2)' }}>
              <div style={{ display: 'flex', gap: '12px', color: '#EF4444', marginBottom: '12px' }}>
                 <AlertTriangle size={18} />
                 <h4 style={{ fontSize: '0.95rem', fontWeight: 'bold' }}>Important Financial Disclosure</h4>
              </div>
              <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: '1.7' }}>
                Money Flow is an AI-powered insights tool. We do not provide professional financial advice. All investment and spending decisions are your own. We are not liable for any financial losses or incorrect categorizations.
              </p>
            </div>
          </section>
        </article>
      </div>
    </main>
  );
};

export default TermsOfService;
