import React from 'react';

export default function StudentStats({ students }) {
  const items = [
    { value: students.length, label: 'Students' },
    { value: new Set(students.map((s) => s.department)).size, label: 'Departments' },
    { value: new Set(students.map((s) => s.semester)).size, label: 'Semesters in use' }
  ];
  return (
    <div className="stats-grid">
      {items.map((i) => (
        <div className="stat-card" key={i.label}>
          <div className="stat-value">{i.value}</div>
          <div className="stat-label">{i.label}</div>
        </div>
      ))}
    </div>
  );
}
