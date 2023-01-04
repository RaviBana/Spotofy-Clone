import './App.css';
import LeftMenu from './components/LeftMenu';
import MainMenu from './components/MainMenu';
import RightMenu from './components/RightMenu';

function App() {
  return (
   <div id='body'>
   <LeftMenu/> 
    <MainMenu/>
   <RightMenu/>
   <div id="background">
    
   </div>
   </div>
   
  );
}

export default App;
