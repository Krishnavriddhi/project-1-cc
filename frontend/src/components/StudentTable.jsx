import React from 'react';
import { Edit2, Trash2, UserX } from 'lucide-react';

const hue = (str = '') => [...str].reduce((a, c) => (a * 31 + c.charCodeAt(0)) % 360, 7);
const initials = (name = '') => name.split(/\s+/).filter(Boolean).slice(0, 2).map((w) => w[0]).join('').toUpperCase();

export default function StudentTable({ students, loading, onEdit, onDelete }) {
  if (loading) {
    return (
      <div className="table-container">
        <div className="empty-state">
          <div style={{ fontSize: '1.1rem', fontWeight: '600' }}>Loading student records...</div>
          <p style={{ color: '#64748b', fontSize: '0.875rem', marginTop: '0.25rem' }}>
            This can take up to a minute if the free API server was asleep.
          </p>
        </div>
      </div>
    );
  }

  if (students.length === 0) {
    return (
      <div className="table-container">
        <div className="empty-state">
          <div className="empty-state-icon">
            <UserX size={48} />
          </div>
          <h3>No Student Records Found</h3>
          <p>Add a student to create the first record, or clear the search and department filter.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="table-container">
      <div style={{ overflowX: 'auto' }}>
        <table className="student-table">
          <thead>
            <tr>
              <th>Student ID</th>
              <th>Student Name</th>
              <th>Email Address</th>
              <th>Department</th>
              <th>Semester</th>
              <th>Contact</th>
              <th style={{ textAlign: 'right' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student) => (
              <tr key={student._id || student.studentId}>
                <td>
                  <span className="student-id-badge">{student.studentId}</span>
                </td>
                <td>
                  <div className="person">
                    <span className="avatar" style={{ '--h': hue(student.department) }}>{initials(student.name)}</span>
                    <span className="person-name">{student.name}</span>
                  </div>
                </td>
                <td className="muted">{student.email}</td>
                <td>{student.department}</td>
                <td>
                  <span className="semester-badge">Sem {student.semester}</span>
                </td>
                <td className="muted num">{student.contact}</td>
                <td>
                  <div className="table-actions">
                    <button
                      className="btn-icon edit"
                      onClick={() => onEdit(student)}
                      title="Edit Student Details"
                    >
                      <Edit2 size={16} />
                    </button>
                    <button
                      className="btn-icon delete"
                      onClick={() => onDelete(student)}
                      title="Delete Student Record"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
