import React from 'react';
import { Link } from 'react-router-dom';
// import { Twitter, Linkedin, ArrowRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="footer" style={{ borderTop: '1px solid var(--border)', background: 'var(--bg-secondary)', paddingTop: '64px' }}>
      <div className="container">
        <div className="footer-top" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '48px', marginBottom: '64px' }}>
          <div className="footer-brand">
            <div className="nav-brand" style={{ marginBottom: '20px' }}>
              <div className="logo-box">M</div>
              <span style={{ fontSize: '1.4rem' }}>Money Flow</span>
            </div>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-dim)', lineHeight: '1.7', marginBottom: '24px' }}>
              Your intelligent companion for seamless expense tracking. Mastering your money flow, one insight at a time.
            </p>
            <div className="social-links" style={{ display: 'flex', gap: '16px' }}>
              {/* <a href="#" className="icon-btn" style={{ borderRadius: '10px' }}><Twitter size={14} /></a>
              <a href="#" className="icon-btn" style={{ borderRadius: '10px' }}><Linkedin size={14} /></a>
              <a href="#" className="icon-btn" style={{ borderRadius: '10px' }}><Github size={14} /></a> */}
            </div>
          </div>
          
          <div className="footer-links">
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '24px' }}>Product</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Dashboard</Link></li>
              <li><Link to="/banks" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Connected Banks</Link></li>
              <li><Link to="/insights" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>AI Analytics</Link></li>
              <li><Link to="/" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Pricing</Link></li>
            </ul>
          </div>
          
          <div className="footer-links">
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '24px' }}>Company</h3>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><Link to="/" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>About Us</Link></li>
              <li><Link to="/" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Careers</Link></li>
              <li><Link to="/privacy" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Privacy Policy</Link></li>
              <li><Link to="/terms" style={{ fontSize: '0.85rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Terms of Service</Link></li>
            </ul>
          </div>

          <div className="footer-newsletter">
            <h3 style={{ fontSize: '1rem', fontWeight: '700', marginBottom: '24px' }}>Stay in the loop</h3>
            <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)', marginBottom: '16px' }}>Subscribe to get AI tips on saving and financial health.</p>
            <div style={{ display: 'flex', gap: '8px' }}>
              <input 
                type="email" 
                placeholder="Email address" 
                style={{ 
                  background: 'var(--bg-dark)', 
                  border: '1px solid var(--border)', 
                  padding: '10px 16px', 
                  borderRadius: '10px',
                  color: '#fff',
                  fontSize: '0.85rem',
                  width: '100%'
                }} 
              />
              <button className="btn-primary" style={{ padding: '10px', borderRadius: '10px' }}>
                Submit
                {/* <ArrowRight size={18} /> */}
              </button>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom" style={{ borderTop: '1px solid var(--border)', paddingTop: '32px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '20px' }}>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-dim)' }}>
            © {new Date().getFullYear()} Money Flow Inc. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '24px' }}>
             <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none' }}>Support</a>
             <a href="#" style={{ fontSize: '0.8rem', color: 'var(--text-dim)', textDecoration: 'none' }}>System Status</a>
             <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--primary)', fontSize: '0.8rem', fontWeight: 'bold' }}>
               <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'currentColor' }}></div>
               Active
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
