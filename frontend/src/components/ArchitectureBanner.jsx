import React from 'react';
import { studentAPI } from '../services/api';

export default function ArchitectureBanner({ backendHealthy, checkingHealth }) {
  const apiUrl = studentAPI.getBaseUrl();
  const apiState = checkingHealth ? 'pending' : backendHealthy ? 'online' : 'offline';
  const tiers = [
    { label: 'Frontend', name: 'Netlify', note: 'React app', state: 'online' },
    { label: 'API', name: 'Render', note: checkingHealth ? 'Checking...' : apiUrl, state: apiState },
    { label: 'Database', name: 'MongoDB Atlas', note: 'studentDB / students', state: apiState }
  ];
  return (
    <div className="tiers-banner" role="status">
      {tiers.map((t) => (
        <div className="tier" key={t.label}>
          <span className={`status-dot ${t.state}`} title={t.state}></span>
          <div>
            <div className="tier-name">{t.name} <span className="tier-label">{t.label}</span></div>
            <div className="tier-note">{t.note}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
