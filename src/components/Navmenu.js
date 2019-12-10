import React from 'react';
import './Navmenu.css'




function Navmenu(props){
    const nav=props.nav
    let menuhtml=[]
 for(let i = 0;i< nav.length ; i++){
if(nav[i].dropdown)
menuhtml.push (<li className="menu-title" key={i}><a className="menu-link" href={nav[i].link}>{nav[i].menu}</a><ul className="dropdown">{nav[i].dropdown}</ul></li>)
else
 menuhtml.push (<li className="menu-title" key={i}><a className="menu-link"  href={nav[i].link}>{nav[i].menu}</a></li>)

}
return menuhtml


    
}


export default Navmenu;