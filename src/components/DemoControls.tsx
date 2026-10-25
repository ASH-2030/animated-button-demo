
import React from 'react';

interface DemoControlsProps {
    onSuccess: () => void;
    onError: () => void;
    onReset: () => void;
    disabled?: boolean;
}

const DemoControls: React.FC<DemoControlsProps> = ({
    onSuccess,
    onError,
    onReset,
    disabled = false,
}) => {
    return (
        <section className="demo-controls" aria-labelledby="controls-title">
            <div className="controls-heading">
                <h2 id="controls-title">Test a state</h2>
                <p>Preview each result instantly.</p>
            </div>

            <div className="controls-row">
                <button
                    type="button"
                    onClick={onSuccess}
                    className="demo-button success-button"
                    disabled={disabled}
                >
                    <span aria-hidden="true">✓</span>
                    Trigger success
                </button>

                <button
                    type="button"
                    onClick={onError}
                    className="demo-button error-button"
                    disabled={disabled}
                >
                    <span aria-hidden="true">!</span>
                    Trigger error
                </button>

                <button
                    type="button"
                    onClick={onReset}
                    className="demo-button reset-button"
                >
                    Reset
                </button>
            </div>
        </section>
    );
};

export default DemoControls;
