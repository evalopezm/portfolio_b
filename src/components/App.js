import React from 'react';
import '../stylesheets/App.css';

function App() {
  return (
    <div className='App'>
      <header>
        <h1>Portfolio de Eva López Merino</h1>
      </header>
      <main>
        <nav>
          <button>Trabajos FrontEnd</button>
          <button>Trabajos comunicación</button>
          <button>Mi CV / Mi historia</button>
          <button>Contacto</button>
        </nav>
      </main>
      <footer>
        <small>Copyright Eva López Merino</small>
      </footer>
    </div>
  );
}

export default App;
