export const simulateDelay = (duration: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, duration));
};

export const randomDelay = (): number => {
    return Math.floor(Math.random() * 1000) + 500; // Random delay between 500ms and 1500ms
};

export const simulateFailure = (): boolean => {
    return Math.random() < 0.2; // 20% chance of failure
};