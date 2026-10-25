
import { useState } from 'react';

export const useAsyncRequest = (
    onSuccess: () => void,
    onError: () => void
) => {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const simulateAsyncOperation = () => {
        setLoading(true);
        setError(false);

        const delay = Math.random() * 2000 + 500;
        const isSuccess = Math.random() > 0.2;

        setTimeout(() => {
            setLoading(false);

            if (isSuccess) {
                onSuccess();
            } else {
                setError(true);
                onError();
            }
        }, delay);
    };

    return { loading, error, simulateAsyncOperation };
};
