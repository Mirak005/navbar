import React from 'react';
import './App.css';
import Navmenu from './components/Navmenu.js';

const menuList=[
  {
  menu:"Home",
  link:"#",
  dropdown:null,
},
{
menu:"Services",
link:"#",
dropdown:[<li key="0"><a href="#">For entrepreneurs</a></li>,<li key="1"><a href="#">For studentes</a></li>,<li key="2"><a href="#">For hobbysts</a></li>]

},
{
menu:"Contact",
link:"#",
dropdown:null
}

]

function App() {
 
 return (<div className="nav-container">
 <ul className="nav-menu">
    <Navmenu nav={menuList} />
    </ul>
    </div>
  );
}

export default App;
