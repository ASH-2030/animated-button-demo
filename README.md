# Animated Button Demo

An interactive animated button built with React and TypeScript, demonstrating how motion and visual feedback can improve user interactions through loading, success, and error states.

**Repository:** [ASH-2030/animated-button-demo](https://github.com/ASH-2030/animated-button-demo)

## Overview

This project demonstrates a reusable animated button component with a clean, responsive interface. It simulates an asynchronous operation and communicates its progress through visual states and animations.

The project is designed to explore state-driven UI behavior, CSS transitions, accessibility, and user interaction feedback. No actual message is sent, and no external service is contacted.

## Features

- **Idle State:** Displays the button in its default state.
- **Hover and Focus:** Provides visual feedback during mouse and keyboard interaction.
- **Loading State:** Displays a spinner while the simulated request is processing.
- **Success State:** Shows confirmation when the simulated operation succeeds.
- **Error State:** Displays an error message when the operation fails.
- **Manual State Controls:** Allows success and error states to be triggered on demand.
- **Reset Control:** Returns the demonstration to its initial state.
- **Keyboard Accessibility:** Uses native buttons and visible focus indicators.
- **Responsive Design:** Adapts the layout to different screen sizes.
- **Reduced-Motion Support:** Respects the `prefers-reduced-motion` setting.

## Animation Details

- **CSS Transitions:** Provide smooth hover, active, and interaction effects.
- **Loading Animation:** A rotating spinner indicates ongoing processing.
- **Result Animations:** Subtle entrance effects highlight success and error feedback.
- **Easing:** CSS easing functions help create smooth transitions.
- **Reduced Motion:** Animations and transitions are minimized for users who prefer reduced motion.

## Simulated Request

Clicking the main button starts a simulated asynchronous operation.

- **Processing delay:** Approximately 1.2 seconds.
- **Success probability:** 80%.
- **Error probability:** 20%.
- **Automatic reset:** The result returns to idle after approximately 2 seconds.

The operation is simulated entirely on the front end and does not communicate with a backend or send messages.

## Demo Controls

The interface includes controls to test different outcomes:

- **Trigger Success:** Displays the success state.
- **Trigger Error:** Displays the error state.
- **Reset:** Returns the interface to idle.

These controls make it easy to test the button's behavior without repeatedly starting the simulated request.

## Built With

- React
- TypeScript
- Vite
- CSS

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/) and npm.

### Installation

Clone the repository:

```bash
git clone https://github.com/ASH-2030/animated-button-demo.git
```

Navigate to the project directory:

```bash
cd animated-button-demo
```

Install dependencies:

```bash
npm install
```

### Run Locally

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in your terminal.

### Production Build

Create a production build:

```bash
npm run build
```

To preview the production build locally:

```bash
npm run preview
```

## Testing the Button

1. Observe the initial idle state.
2. Hover over the main button to see its hover effect.
3. Navigate using the keyboard to check the visible focus indicator.
4. Click **Send message** to observe the loading animation.
5. Observe the success or error result.
6. Use **Trigger Success** and **Trigger Error** to test the result states manually.
7. Select **Reset** to return to idle.

## Project Structure

```text
animated-button-demo/
├── src/
│   ├── components/
│   │   ├── AnimatedButton.tsx
│   │   └── DemoControls.tsx
│   ├── styles/
│   │   └── button.css
│   └── App.tsx
├── public/
├── package.json
├── package-lock.json
├── index.html
├── vite.config.ts
└── README.md
```

This tree highlights the main application files. Additional project and configuration files may be present.

## Learning Outcomes

This project provided practical experience with:

- React components and TypeScript props.
- State-driven rendering and simulated asynchronous operations.
- CSS animations, transitions, and responsive styling.
- Keyboard interaction and accessibility considerations.
- Preparing a front-end application for a production build.

## Future Improvements

- Add automated component tests.
- Expand accessibility testing with screen readers.
- Refine animation timing and transition behavior.
- Deploy a publicly accessible live demo.

## License

No license has been specified for this project.