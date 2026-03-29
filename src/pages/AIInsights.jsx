import React from 'react';
import { PiggyBank, ShieldAlert, BadgeInfo, Cpu, BarChart3, ArrowRight } from 'lucide-react';

const AIInsights = () => {
  return (
    <main className="container page-content animate-fade">
      <header className="header-row">
        <h1>AI <span>Insights</span></h1>
        <p>Your personalized financial intelligence engine.</p>
      </header>
      
      <div className="insight-grid">
        <div className="card insight-card" style={{ background: 'var(--surface)' }}>
          <div style={{ background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
            <PiggyBank size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3>Savings Opportunity</h3>
              <span className="insight-tag savings">Savings</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>You can save ₹8,400/month by reducing dining expenses. Your dining spend is 34% above similar profiles.</p>
          </div>
        </div>
        
        <div className="card insight-card" style={{ background: 'var(--surface)' }}>
          <div style={{ background: 'rgba(239, 68, 68, 0.1)', color: '#EF4444', padding: '12px', borderRadius: '12px', height: 'fit-content' }}>
            <ShieldAlert size={24} />
          </div>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
              <h3>Subscription Audit</h3>
              <span className="insight-tag alert">Alert</span>
            </div>
            <p style={{ color: 'var(--text-dim)', fontSize: '0.9rem' }}>3 unused subscriptions detected totaling ₹2,100/month. Consider canceling Netflix, Hotstar, and Spotify duplicates.</p>
          </div>
        </div>
        
        <div className="card" style={{ gridColumn: 'span 2', background: 'var(--surface)' }}>
           <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px' }}>
              <div className="insight-card-small" style={{ border: 'none', background: 'transparent', display: 'flex', gap: '16px' }}>
                <div style={{ background: 'rgba(59, 130, 246, 0.1)', color: '#3B82F6', padding: '12px', borderRadius: '10px', height: 'fit-content' }}>
                  <BadgeInfo size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '1rem' }}>Investment Tip</h4>
                    <span className="insight-tag invest">Invest</span>
                  </div>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>An SIP of ₹15,000 in index funds could grow to ₹12.8L in 5 years.</p>
                </div>
              </div>
              
              <div className="insight-card-small" style={{ border: 'none', background: 'transparent', display: 'flex', gap: '16px' }}>
                <div style={{ background: 'rgba(139, 92, 246, 0.1)', color: '#8B5CF6', padding: '12px', borderRadius: '10px', height: 'fit-content' }}>
                  <Cpu size={20} />
                </div>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '4px' }}>
                    <h4 style={{ fontSize: '1rem' }}>Spending Prediction</h4>
                    <span className="insight-tag prediction">AI</span>
                  </div>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.8rem' }}>Next month spending predicted at ₹1,18,500 based on history.</p>
                </div>
              </div>
           </div>
        </div>

        {/* New Rich Content Section mirroring Mobile App's detailed stats */}
        <section className="card" style={{ gridColumn: 'span 2', background: 'var(--surface)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
            <div>
              <h3 style={{ fontSize: '1.2rem', display: 'flex', alignItems: 'center', gap: '10px' }}><BarChart3 size={20} color="var(--primary)" /> Top Expense Categories</h3>
              <p style={{ color: 'var(--text-dim)', fontSize: '0.85rem' }}>Where your money flowed this month.</p>
            </div>
            <button style={{ fontSize: '0.8rem', color: 'var(--primary)', background: 'transparent', fontWeight: 'bold' }}>All Categories</button>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
            <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem' }}>Rent & Home</span>
                <span style={{ fontWeight: 'bold' }}>₹22,000</span>
              </div>
              <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px' }}>
                 <div style={{ width: '65%', height: '100%', background: '#EF4444', borderRadius: '2px' }}></div>
              </div>
            </div>
            
            <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem' }}>Shopping</span>
                <span style={{ fontWeight: 'bold' }}>₹12,450</span>
              </div>
              <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px' }}>
                 <div style={{ width: '40%', height: '100%', background: '#3b82f6', borderRadius: '2px' }}></div>
              </div>
            </div>
            
            <div style={{ padding: '16px', borderRadius: '12px', background: 'var(--bg-dark)', border: '1px solid var(--border)' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
                <span style={{ fontSize: '0.85rem' }}>Food & Drink</span>
                <span style={{ fontWeight: 'bold' }}>₹8,900</span>
              </div>
              <div style={{ height: '4px', background: 'var(--border)', borderRadius: '2px' }}>
                 <div style={{ width: '30%', height: '100%', background: '#10b981', borderRadius: '2px' }}></div>
              </div>
            </div>
          </div>

          <div style={{ marginTop: '32px', padding: '20px', borderRadius: '12px', background: 'var(--primary)', color: '#000', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <h4 style={{ fontSize: '1.1rem', fontWeight: '800' }}>Ready to optimize?</h4>
              <p style={{ fontSize: '0.9rem', opacity: 0.8 }}>AI enrichment can save you up to 15% on daily expenses.</p>
            </div>
            <button style={{ background: '#000', color: '#fff', padding: '10px 20px', borderRadius: '100px', fontSize: '0.85rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Enable Now <ArrowRight size={14} />
            </button>
          </div>
        </section>
      </div>
    </main>
  );
};

export default AIInsights;
