import React from 'react';
import { ShoppingCart, Coffee, Home, Zap, Car } from 'lucide-react';

const txns = [
  { id: 1, merchant: 'Amazon', amount: '₹12,450', category: 'Shopping', date: 'Today, 2:45 PM', icon: <ShoppingCart size={16} />, color: '#3b82f6' },
  { id: 2, merchant: 'Starbucks', amount: '₹450', category: 'Food & Drink', date: 'Yesterday', icon: <Coffee size={16} />, color: '#ef4444' },
  { id: 3, merchant: 'Society Rent', amount: '₹22,000', category: 'Housing', date: '25 Mar', icon: <Home size={16} />, color: '#10b981' },
  { id: 4, merchant: 'TATA Power', amount: '₹4,200', category: 'Utilities', date: '22 Mar', icon: <Zap size={16} />, color: '#f59e0b' },
  { id: 5, merchant: 'Uber India', amount: '₹840', category: 'Transport', date: '20 Mar', icon: <Car size={16} />, color: '#8b5cf6' },
];

const Transactions = () => {
  return (
    <div className="card" style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
        <h3 style={{ fontSize: '1.2rem' }}>Recent Transactions</h3>
        <button style={{ color: 'var(--primary)', background: 'transparent', fontSize: '0.8rem', fontWeight: '600' }}>View All</button>
      </div>
      
      <div className="tx-list" style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
        {txns.map(tx => (
          <div key={tx.id} className="tx-item" style={{ 
            display: 'flex', 
            justifyContent: 'space-between', 
            alignItems: 'center',
            padding: '12px',
            borderRadius: '12px',
            background: 'var(--glass)',
            border: '1px solid var(--border)'
          }}>
            <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
              <div style={{ 
                width: '36px', 
                height: '36px', 
                borderRadius: '10px', 
                background: tx.color + '20', 
                color: tx.color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                {tx.icon}
              </div>
              <div>
                <h4 style={{ fontSize: '0.9rem', marginBottom: '2px' }}>{tx.merchant}</h4>
                <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>{tx.category} • {tx.date}</p>
              </div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontWeight: '700', fontSize: '0.95rem' }}>{tx.amount}</div>
              <div style={{ color: '#10b981', fontSize: '0.7rem' }}>Confirm Balance</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Transactions;
