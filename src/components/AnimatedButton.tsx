
import React from 'react';
import '../styles/button.css';

export type ButtonState = 'idle' | 'loading' | 'success' | 'error';

interface AnimatedButtonProps {
  state: ButtonState;
  onClick?: () => void;
  label?: string;
}

const AnimatedButton: React.FC<AnimatedButtonProps> = ({
  state,
  onClick,
  label = 'Send message',
}) => {
  return (
    <button
      type="button"
      className={`animated-button ${state}`}
      onClick={onClick}
      disabled={state === 'loading'}
      aria-live="polite"
      aria-busy={state === 'loading'}
    >
      {state === 'loading' && <span className="loader" />}
      {state === 'success' ? (
        <span className="success-message">✓ Success!</span>
      ) : state === 'error' ? (
        <span className="error-message">Error! Try again</span>
      ) : state === 'loading' ? (
        'Sending...'
      ) : (
        label
      )}
    </button>
  );
};

export default AnimatedButton;
