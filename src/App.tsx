
import React, { useEffect, useRef, useState } from 'react';
import AnimatedButton from './components/AnimatedButton';
import DemoControls from './components/DemoControls';
import './styles/button.css';

type ButtonState = 'idle' | 'loading' | 'success' | 'error';

const App: React.FC = () => {
    const [buttonState, setButtonState] = useState<ButtonState>('idle');
    const requestTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
    const resetTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const clearTimers = () => {
        if (requestTimer.current) clearTimeout(requestTimer.current);
        if (resetTimer.current) clearTimeout(resetTimer.current);

        requestTimer.current = null;
        resetTimer.current = null;
    };

    const returnToIdle = () => {
        resetTimer.current = setTimeout(() => {
            setButtonState('idle');
            resetTimer.current = null;
        }, 2000);
    };

    const handleClick = () => {
        if (buttonState !== 'idle') return;

        clearTimers();
        setButtonState('loading');

        requestTimer.current = setTimeout(() => {
            requestTimer.current = null;

            const success = Math.random() >= 0.2;
            setButtonState(success ? 'success' : 'error');
            returnToIdle();
        }, 1200);
    };

    const showResult = (result: 'success' | 'error') => {
        clearTimers();
        setButtonState(result);
        returnToIdle();
    };

    const handleReset = () => {
        clearTimers();
        setButtonState('idle');
    };

    useEffect(() => {
        return () => clearTimers();
    }, []);

    return (
        <main className="app">
            <div className="eyebrow">
                <span className="status-dot" />
                INTERACTIVE UI COMPONENT
            </div>

            <h1>Animated Button</h1>

            <p className="intro">
                A small demonstration of button states, motion, and
                interaction feedback.
            </p>

            <section className="demo-panel" aria-label="Button demonstration">
                <div className="panel-heading">
                    <span>LIVE PREVIEW</span>
                    <span className={`state-label state-${buttonState}`}>
                        <span className="state-indicator" />
                        {buttonState.toUpperCase()}
                    </span>
                </div>

                <div className="button-stage">
                    <AnimatedButton
                        state={buttonState}
                        onClick={handleClick}
                        label="Send message"
                    />
                </div>

                <p className="stage-hint" aria-live="polite">
                    {buttonState === 'idle' &&
                        'Click the button to simulate a request.'}
                    {buttonState === 'loading' &&
                        'Processing your request…'}
                    {buttonState === 'success' &&
                        'The simulated request completed successfully.'}
                    {buttonState === 'error' &&
                        'The simulated request failed. You can try again.'}
                </p>
            </section>

            <DemoControls
                onSuccess={() => showResult('success')}
                onError={() => showResult('error')}
                onReset={handleReset}
                disabled={buttonState === 'loading'}
            />

            <footer className="app-footer">
                <span className="footer-mark">i</span>
                <p>
                    Demo only. No message is sent and no external service is
                    contacted.
                </p>
            </footer>
        </main>
    );
};

export default App;
