import React from 'react';
import { Input } from './Input';

export function Compo({ on, className = '', ...props }) {
  return (
    <div>
      <Input type="checkbox" />
      <button
        className={`${className} toggle-btn ${
          on ? 'toggle-btn-on' : 'toggle-btn-off'
        }`}
        aria-expanded={on}
        {...props}
      />
    </div>
  );
}
