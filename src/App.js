import './App.css';
import NavBar from './components/NavBar/NavBar'
import NameLogo from './components/assets/Name-Logo.png'

import Work from './Work/Work.js';
import Leadership from './Leadership'
import Projects from './Projects'
import Home from './Home/Home';

function App() {
  let component
  console.log(window.location)
  switch(window.location.pathname){
    case '/Home':
      component = <Home></Home>
      break
    case '/Work':
      component = <Work></Work>
      break
    case '/Projects':
      component = <Projects></Projects>
      break
    case 'Leadership':
      component = <Leadership></Leadership>
      break
    case 'Interest':
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
