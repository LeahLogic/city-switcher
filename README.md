
# City Switcher

A simple and responsive React application that allows users to switch between Toronto and Vancouver, displaying each city's name and photograph.

## Features

- Switch between Toronto and Vancouver with a single click
- Dynamically update city names and photographs
- Display a button indicating the next city
- Responsive layout for desktop and mobile devices
- Clean and minimal user interface

## Technologies Used

- React
- JavaScript (ES6)
- JSX
- CSS3
- Vite

## Project Structure

```text
src/
├── App.jsx
├── App.css
├── City.jsx
├── cities.js
├── index.css
└── main.jsx
```

The application separates responsibilities across components and files:

- **App.jsx** — manages application state and city switching logic using a React class component.
- **City.jsx** — displays the city name and photograph using props.
- **cities.js** — stores city names and image URLs.
- **App.css** — provides styling and responsive layout.

## Getting Started

Clone the repository:

```bash
git clone https://github.com/LeahLogic/city-switcher.git
```

Navigate to the project directory:

```bash
cd city-switcher
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open the local URL displayed in the terminal.

## Image Credits

City photographs are sourced from [Unsplash](https://unsplash.com/).

## Author

[LeahLogic](https://github.com/LeahLogic)
