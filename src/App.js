import './App.css';
import Main from './Main/Main';
import Menu from './Menu/Menu';

function App() {
  const menuPage = window.location.pathname === '/menu';
  return (
    <div className="App">
      <nav>
        <a href="/">home</a>
        <a href="/menu">menu</a>
      </nav>
      <header className="App-header">HANWOO VILLAGE</header>
      {
        menuPage ? <Menu /> : <Main />
      }
    </div>
  );
}

export default App;
