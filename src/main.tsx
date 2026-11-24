import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import '@fontsource-variable/inter'
import '@fontsource-variable/manrope'
import '@fontsource-variable/space-grotesk'
import './index.css'

const root = document.getElementById("root");

if (!root) {
  throw new Error("The application root element is missing.");
}

createRoot(root).render(<App />);
