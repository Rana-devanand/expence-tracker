import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Sun, Moon, Bell } from 'lucide-react';

const Navbar = () => {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <nav className="nav-bar" style={{ background: 'var(--surface)' }}>
      <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <NavLink to="/" className="nav-brand">
          <div className="logo-box">M</div>
          <span>Money Flow</span>
        </NavLink>
        
        <div className="nav-links">
          <NavLink to="/" end className={({ isActive }) => isActive ? "active" : ""}>Dashboard</NavLink>
          <NavLink to="/banks" className={({ isActive }) => isActive ? "active" : ""}>Bank Accounts</NavLink>
          <NavLink to="/insights" className={({ isActive }) => isActive ? "active" : ""}>AI Insights</NavLink>
        </div>
        
        <div className="nav-actions">
          <button className="icon-btn" title="Notifications"><Bell size={16} /></button>
          <button className="icon-btn" onClick={toggleTheme} title="Toggle Dark/Light Mode">
            {theme === 'dark' ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
