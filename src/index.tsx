import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './i18n';
import LoadingSpinner from './components/atoms/LoadingSpinner';

const rootElement = document.getElementById('root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <Suspense fallback={<LoadingSpinner />}>
        <App />
      </Suspense>
    </React.StrictMode>,
  );
} else {
  console.error("Failed to find the root element with ID 'root'.");
} 