import React from 'react';

const Toast = ({ message, onClose }) => (
    <div className={`toast-notification ${message ? 'visible' : ''}`}>
        <span>{message}</span>
        <button onClick={onClose} className="toast-close">×</button>
    </div>
);

export default Toast;
