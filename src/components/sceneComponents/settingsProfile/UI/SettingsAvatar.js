import React from 'react';
import '../style.css';
import { MdModeEdit } from 'react-icons/md';

export default function SettingsAvatar() {
  return (
    <div className="form-upload-image">
      <a>
        <div className="profile-user-avtar">
          <div className="edit-icon">
            <MdModeEdit />
          </div>
        </div>
      </a>
    </div>
  );
}
