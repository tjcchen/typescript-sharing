import React from 'react';
import ReactDOM from 'react-dom/client';
// import JavaScript from './util/javascript';
// import TypeScript from './util/typescript';
// import InlineDocumentationJS from './util/InlineDocumentationJS';
// import InlineDocumentationTS from './util/InlineDocumentationTS';
// import App from './App';
// import App1 from './App1';
// import App2 from './App2';
// import App3 from './App3';
// import App4 from './App4';
// import App5 from './App5';
import App6 from './App6';
import './index.css';
import { InputValueProvider } from './context/InputValueContext';
import reportWebVitals from './reportWebVitals';

const address = {
    street: 'Main st.',
    number: 32,
    zip: 'AT15487',
    suite: '#577'
};

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

//=======================================================================================
// JS errors will not be catched, and TS errors will emerge before application is running
//=======================================================================================
root.render(
    <React.StrictMode>
        <App6 />
        {/* <App5 /> */}
        {/* <App4 /> */}
        {/* <InputValueProvider>
            <App3 />
        </InputValueProvider> */}
        {/* <App2 /> */}
        {/* <App1 /> */}
        {/* <App headerText="This is a header" /> */}
        {/* <App headerText="This is a header" extraText="This is an optional props" /> */}
        {/* <JavaScript /> */}
        {/* <TypeScript /> */}
        {/* <InlineDocumentationJS address={address} /> */}
        {/* <InlineDocumentationTS address={address} /> */}
    </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals(console.log);
