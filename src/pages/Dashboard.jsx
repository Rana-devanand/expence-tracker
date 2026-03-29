import React from 'react';
import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { TrendingUp, TrendingDown, Plus, AlertCircle, CheckCircle2, PieChart, Wallet } from 'lucide-react';
import Transactions from '../components/Transactions';

const data = [
  { name: 'Jan', income: 4000, expense: 2400 },
  { name: 'Feb', income: 3000, expense: 1398 },
  { name: 'Mar', income: 2000, expense: 3800 },
  { name: 'Apr', income: 2780, expense: 3908 },
  { name: 'May', income: 1890, expense: 4800 },
  { name: 'Jun', income: 2390, expense: 3800 },
  { name: 'Jul', income: 3490, expense: 4300 },
];

const Dashboard = () => {
  return (
    <main className="container page-content animate-fade">
      <header className="header-row">
        <h1>Welcome, <span>Devanand</span></h1>
        <p>Your financial status is looking strong today.</p>
      </header>

      <section className="stats-grid">
        <div className="card stat-card" style={{ background: 'var(--surface)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="stat-label">Total Balance</span>
            <Wallet size={16} color="var(--primary)" />
          </div>
          <span className="stat-value">₹4,82,350</span>
          <div className="stat-trend up" style={{ marginTop: '8px' }}>
             <TrendingUp size={12} /> +12.5% vs last month
          </div>
        </div>
        
        <div className="card stat-card" style={{ background: 'var(--surface)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="stat-label">Monthly Spend</span>
            <PieChart size={16} color="#EF4444" />
          </div>
          <span className="stat-value">₹1,24,800</span>
          <div className="stat-trend down" style={{ marginTop: '8px' }}>
             <TrendingDown size={12} /> -8.2% vs last month
          </div>
        </div>
        
        <div className="card stat-card" style={{ background: 'var(--surface)' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
            <span className="stat-label">AI Prediction</span>
            <CheckCircle2 size={16} color="#10b981" />
          </div>
          <span className="stat-value">₹32,400</span>
          <div className="stat-trend up" style={{ marginTop: '8px' }}>
             <TrendingUp size={12} /> +24% vs last month
          </div>
        </div>
      </section>

      <div className="dashboard-layout">
        <section style={{ display: 'flex', flexDirection: 'column' }}>
          <div className="card trend-card">
            <h3 style={{ fontSize: '1.2rem', marginBottom: '16px' }}>Money Flow Trends</h3>
            <div style={{ width: '100%', height: '240px' }}>
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={data}>
                  <defs>
                    <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#10B981" stopOpacity={0.08}/>
                      <stop offset="95%" stopColor="#10B981" stopOpacity={0}/>
                    </linearGradient>
                    <XAxis dataKey="name" stroke="var(--text-dim)" fontSize={10} tickLine={false} axisLine={false} />
                    <Tooltip contentStyle={{ background: 'var(--surface)', border: '1px solid var(--border)', borderRadius: '8px', fontSize: '11px' }} />
                  </defs>
                  <Area type="monotone" dataKey="income" stroke="#10B981" fillOpacity={1} fill="url(#colorIncome)" strokeWidth={2} />
                  <Area type="monotone" dataKey="expense" stroke="#EF4444" fillOpacity={1} fill="rgba(239, 68, 68, 0.05)" strokeWidth={2} />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
          
          {/* Added Transaction content from Mobile Appparity */}
          <Transactions />
        </section>

        <section style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <button className="btn-primary" style={{ width: '100%', padding: '16px', borderRadius: '12px', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
            <Plus size={18} /> Connect New Bank
          </button>
          
          <div className="card" style={{ flexGrow: 1 }}>
            <h3 style={{ fontSize: '1.1rem', marginBottom: '20px' }}>Live AI Alerts</h3>
            <div className="alerts-list">
              <div className="alert-item" style={{ background: 'rgba(239, 68, 68, 0.05)', borderRadius: '12px', padding: '12px' }}>
                <AlertCircle size={14} color="#EF4444" />
                <div className="alert-info">
                  <h4 style={{ color: 'var(--text-main)', fontSize: '0.85rem' }}>Subscription Detected</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>Money Flow found recurring ₹299 at Netflix.</p>
                </div>
              </div>
              
              <div className="alert-item" style={{ background: 'rgba(16, 185, 129, 0.05)', borderRadius: '12px', padding: '12px' }}>
                <CheckCircle2 size={14} color="#10B981" />
                <div className="alert-info">
                  <h4 style={{ color: 'var(--text-main)', fontSize: '0.85rem' }}>Income Categorized</h4>
                  <p style={{ color: 'var(--text-dim)', fontSize: '0.75rem' }}>AI successfully linked your ₹45k Salary.</p>
                </div>
              </div>
            </div>
            
            <div style={{ marginTop: '24px' }}>
              <h4 style={{ fontSize: '0.9rem', marginBottom: '12px' }}>Monthly Goals</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-dim)' }}>Savings Goal</span>
                    <span style={{ fontWeight: 'bold' }}>75%</span>
                  </div>
                  <div style={{ height: '6px', width: '100%', background: 'var(--border)', borderRadius: '3px' }}>
                    <div style={{ height: '100%', width: '75%', background: 'var(--primary)', borderRadius: '3px' }}></div>
                  </div>
                </div>
                <div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.75rem', marginBottom: '6px' }}>
                    <span style={{ color: 'var(--text-dim)' }}>Expense Limit</span>
                    <span style={{ fontWeight: 'bold' }}>40%</span>
                  </div>
                  <div style={{ height: '6px', width: '100%', background: 'var(--border)', borderRadius: '3px' }}>
                    <div style={{ height: '100%', width: '40%', background: '#f59e0b', borderRadius: '3px' }}></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Dashboard;
