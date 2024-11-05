import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
  let num1 = 20;
  let num2 = 30;

  return (
    <div>
      <h1>20 + 30 = {num1 + num2}</h1>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
