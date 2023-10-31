import './App.css';
import NavBar from './components/NavBar/NavBar'
import NameLogo from './components/assets/Name-Logo.png'
import Work from './Work/Work.js';
import Leadership from './Leadership/Leadership';
import Home from './Home/Home';
import Projects from './Projects/Projects';

function App() {
  let component
  console.log(window.location)
  switch(window.location.pathname){
    case '/':
      component = <Home></Home>
    case '/Home':
      component = <Home></Home>
      break
    case '/Work':
      component = <Work></Work>
      break
    case '/Projects':
      component = <Projects></Projects>
      break
    case '/Leadership':
      component = <Leadership></Leadership>
      break
    case '/Interest':
      break
  }
  return (
    <div className="App">
      
        <div className='Header'>
          <img className='Name-Logo' src={NameLogo}></img>
          <NavBar></NavBar>
        </div>
        {component}
    </div>
  );
}

export default App;
