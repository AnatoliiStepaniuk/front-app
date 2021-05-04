import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <iframe width="560" height="315" src="https://www.youtube.com/embed/2tLp-7ZwDz0?autoplay=1&start=28" title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen></iframe>
          <h2>What's Up, Thug?</h2>

      </header>
    </div>
  );
}

export default App;
