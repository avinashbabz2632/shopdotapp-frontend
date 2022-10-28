import React from 'react';
import '../style.css';

export default function SectionHeader({ title, asterisk }) {
  return (
    <div>
      <h2 className="setting-section-title">
        {title}
        {asterisk ? <span class="asterisk-red"> *</span> : <div />}
      </h2>
    </div>
  );
}
