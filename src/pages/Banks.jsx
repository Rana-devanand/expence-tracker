import React from 'react';

const banks = [
  { 
    name: 'State Bank of India', 
    number: '4521 8890 1204 4521', 
    balance: '₹2,45,800', 
    type: 'VISA',
    expiry: '12/28',
    color: 'linear-gradient(135deg, #0f172a 0%, #334155 100%)',
    logo: 'SBI'
  },
  { 
    name: 'HDFC Bank', 
    number: '7834 1102 3345 7834', 
    balance: '₹1,12,350', 
    type: 'MASTERCARD',
    expiry: '09/27',
    color: 'linear-gradient(135deg, #1e3a8a 0%, #1e40af 100%)',
    logo: 'HDFC'
  },
  { 
    name: 'ICICI Bank', 
    number: '9102 5567 8890 9102', 
    balance: '₹78,200', 
    type: 'VISA',
    expiry: '05/29',
    color: 'linear-gradient(135deg, #7c2d12 0%, #9a3412 100%)',
    logo: 'ICICI'
  },
  { 
    name: 'Axis Bank', 
    number: '6287 4432 1109 6287', 
    balance: '₹46,000', 
    type: 'MASTERCARD',
    expiry: '11/26',
    color: 'linear-gradient(135deg, #4c1d95 0%, #5b21b6 100%)',
    logo: 'AXIS'
  },
  { 
    name: 'Kotak Mahindra', 
    number: '3056 9901 2234 3056', 
    balance: '₹1,89,500', 
    type: 'VISA',
    expiry: '04/30',
    color: 'linear-gradient(135deg, #064e3b 0%, #065f46 100%)',
    logo: 'KOTAK'
  },
  { 
    name: 'Yes Bank', 
    number: '1498 7765 4432 1498', 
    balance: '₹34,600', 
    type: 'VISA',
    expiry: '01/27',
    color: 'linear-gradient(135deg, #155e75 0%, #164e63 100%)',
    logo: 'YES'
  }
];

const BankAccounts = () => {
  return (
    <main className="container page-content animate-fade">
      <header className="header-row">
        <h1>Bank <span>Accounts</span></h1>
        <p>Your connected cards and real-time balances.</p>
      </header>
      
      <div className="bank-grid">
        {banks.map((bank, index) => (
          <div key={index} className="bank-card" style={{ 
            background: bank.color, 
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.4), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
            border: 'none',
            color: '#fff',
            position: 'relative'
          }}>
            <div className="card-texture"></div>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '24px' }}>
              <div style={{ fontStyle: 'italic', fontWeight: 'bold' }}>CREDIT</div>
              <div style={{ fontWeight: '800', fontSize: '1.2rem', opacity: 0.9 }}>{bank.logo}</div>
            </div>
            
            <div className="chip"></div>
            
            <div style={{ fontSize: '1.3rem', letterSpacing: '2px', wordSpacing: '8px', margin: '16px 0', opacity: 0.9 }}>
              {bank.number}
            </div>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: 'auto' }}>
              <div>
                <div style={{ fontSize: '0.6rem', opacity: 0.6, textTransform: 'uppercase' }}>Available Balance</div>
                <div className="bank-balance" style={{ fontSize: '1.4rem' }}>{bank.balance}</div>
              </div>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '0.6rem', opacity: 0.6, textTransform: 'uppercase' }}>Expires</div>
                <div style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{bank.expiry}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </main>
  );
};

export default BankAccounts;
