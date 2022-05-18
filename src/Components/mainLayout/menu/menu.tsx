import "./menu.css";
import { useEffect, useState } from 'react';

function Menu(): JSX.Element {
    
    var [talTime,setTal] = useState("");

    useEffect(()=>{
        setInterval(()=>{
            setTal(new Date().toLocaleTimeString());
        },1000);
    })

    var geri = ()=>{
        console.log("Hello cruel world :(")
    }

    return (
        <div className="menu">
            <h1>{talTime}</h1>
            <hr/>
			<h1>תפריט ראשי</h1><hr/>
            איתור רכב פרטי<br/><br/>
            איתור רכב משא<br/><br/>
            איתור אופנוע<br/><br/>
            איתור רכב שהורד מהכביש<br/><br/>
            איתור רכב נכים<br/><br/>
        </div>
    );
}

export default Menu;
