import React, { useEffect } from 'react';

import './index.scss';

type ToastProps = {
  message: string;
  duration?: number; // Время показа в миллисекундах
  onClose: () => void;
};

export const Toast: React.FC<ToastProps> = ({ message, duration = 1000, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, duration);

    return () => clearTimeout(timer);
  }, [onClose, duration]);

  return (
    <div className="toast">
      <span>{message}</span>
      <button className="toast__close" onClick={onClose}>&times;</button>
    </div>
  );
};
