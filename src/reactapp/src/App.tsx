/**
 * TypeScript Props:
 * - Defining props for a component
 *   - interface [componentName]Props {...}
 * - Optional Props
 * - Default Props
 */

// interface is used to define an entity
interface AppProps {
    headerText?: string;
    extraText?: string
}

export default function App({ headerText, extraText = 'default text' }: AppProps) {
    return (
        <>
            <h1>{ headerText }</h1>
            { extraText && <p>{ extraText }</p>}
        </>
    );
}

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.tsx</code> and save to reload.
//         </p>
//         <p>Building the application with reactjs & typescript</p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
