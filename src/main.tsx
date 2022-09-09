import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './containers/App';

import './assets/styles/tailwind.css';

const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
