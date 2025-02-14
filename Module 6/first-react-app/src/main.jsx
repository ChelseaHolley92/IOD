import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

import { ErrorBoundary } from 'react-error-boundary'

<ErrorBoundary FallbackComponent={ErrorMessage}>
<App /> {/* can wrap App or other high-level parent components */}
</ErrorBoundary>

// add to ErrorMessage.jsx
function ErrorMessage({ error, resetErrorBoundary }) {
console.error(error);

return (
<div className="ErrorMessage">
<p>An error occurred:</p>
<pre>{error.message}</pre>
<button onClick={() => resetErrorBoundary()}>Try Again?</button>
</div>
);
}

export default ErrorMessage;