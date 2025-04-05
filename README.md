# Word Validation Assignment

A React-TypeScript application implementing a custom event system and word validation UI.

## Live Demo
🌐 [Try the application live](https://word-game-phi-fawn.vercel.app/)

## Assignment Requirements

### Part 1: Event System Implementation
- Custom `MyActionListener` class with:
  - Event registration
  - Listener management
  - Event emission
  - Error handling
- Support for multiple listeners per event
- Proper cleanup and removal of events

### Part 2: Word Validation UI
- Interactive character input system
- Visual feedback for word validation
- Dictionary integration
- Keyboard interface with:
  - Character input
  - Backspace functionality
  - Enter key validation

## Features

- Real-time character input
- Visual feedback for valid/invalid words
- Dictionary word validation
- Backspace functionality
- Enter key validation
- Responsive design


### Key Style Features
- Responsive grid layout
- Modern color scheme
- Smooth transitions
- Interactive hover states
- Mobile-friendly design
- Consistent spacing
- Clear visual feedback


## Quick Start

```bash
# Install dependencies
npm install

# Start development server
npm start
```

## Testing

```bash
# Run tests
npm test

# Run tests with coverage
npm test -- --coverage
```

## Technical Stack

- React 18
- TypeScript
- Custom Event System
- Dictionary API Integration
- Vercel Deployment

## Project Overview
A React-TypeScript application demonstrating advanced front-end development concepts including:
- Custom Event Management System
- React Hooks and Custom Hooks
- Component Architecture
- TypeScript Implementation
- API Integration
- State Management
- User Interface Design


## Project Overview
A React-TypeScript application demonstrating advanced front-end development concepts including:
- Custom Event Management System
- React Hooks and Custom Hooks
- Component Architecture
- TypeScript Implementation
- API Integration
- State Management
- User Interface Design


#### Event System Implementation
- Custom event registration and handling
- Event emission system
- Listener management
- Cleanup mechanisms

#### React Components
- Functional components with TypeScript
- Props interface definitions
- State management
- Effect handling

#### API Integration
- Word validation service
- Error handling
- Response processing

## Technical Requirements

### Prerequisites
- Node.js (v14+)
- TypeScript
- React

### Installation
```bash
git clone <repository-url>
cd word-validation-app
npm install
npm start
```

## Technical Challenges Solved
1. Event Management
   - Implementation of a custom event system
   - Handling multiple listeners
   - Event cleanup

2. State Management
   - Efficient state updates
   - State synchronization
   - Type-safe state handling

3. Component Communication
   - Event-based communication
   - Props and state management
   - Type-safe data flow

## Future Enhancements
1. Enhanced Type Safety
   - Stricter TypeScript configurations
   - Additional interface definitions

2. Performance Optimizations
   - Memoization implementation
   - Render optimization

3. Testing Coverage
   - Additional unit tests
   - E2E testing implementation

## Development Decisions
- **TypeScript**: Chosen for type safety and better development experience
- **Custom Event System**: Implemented to demonstrate understanding of event-driven architecture
- **Component Structure**: Organized for maintainability and reusability

## Learning Outcomes
- Implementation of custom event management systems
- Advanced React patterns and hooks
- TypeScript integration with React
- Component architecture design
- State management strategies

## References
- React Documentation
- TypeScript Handbook
- Software Design Patterns

## Features

- Interactive virtual keyboard
- Real-time word validation against an English dictionary
- Visual feedback for valid/invalid words
- Responsive design
- Customizable word length
- Backspace and Enter key functionality
- Help modal with game instructions

## Technologies Used

- React
- TypeScript
- CSS
- REST API for word validation

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/word-game.git
cd word-game
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Start the development server
```bash
npm start
# or
yarn start
```

The application will be available at `http://localhost:3000`

## How to Play

1. Type letters using the on-screen keyboard or your physical keyboard
2. Letters fill the squares from left to right
3. When all squares are filled:
   - Press ENTER to validate the word
   - If the word exists in the English dictionary, squares turn green
   - If the word doesn't exist, squares turn red
4. Use the backspace button (⌫) to delete letters
5. Click the "New Game" button to start over
6. Click the "?" button for game instructions

## Project Structure
