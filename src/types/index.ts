// This file defines TypeScript types and interfaces used throughout the project.

export type ButtonState = 'idle' | 'hover' | 'focus' | 'loading' | 'success' | 'error' | 'disabled';

export interface AnimatedButtonProps {
    state: ButtonState;
    onClick: () => void;
    onRetry?: () => void;
    isLoading?: boolean;
    isDisabled?: boolean;
}