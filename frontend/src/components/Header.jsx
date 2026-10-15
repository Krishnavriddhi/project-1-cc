import React from 'react';
import { RefreshCw } from 'lucide-react';

export default function Header({ onRefresh, loading }) {
  return (
    <header className="navbar">
      <div className="navbar-inner">
        <div className="brand">
          <span className="brand-mark" aria-hidden="true">SR</span>
          <div>
            <span className="brand-title">Student Records</span>
            <span className="brand-subtitle">Registrar's office &mdash; admissions, departments, contacts</span>
          </div>
        </div>
        <button className="btn btn-ghost" onClick={onRefresh} disabled={loading} title="Reload records from the database">
          <RefreshCw size={16} className={loading ? 'spin' : ''} /> {loading ? 'Refreshing' : 'Refresh'}
        </button>
      </div>
    </header>
  );
}
