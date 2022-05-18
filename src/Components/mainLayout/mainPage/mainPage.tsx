import "./mainPage.css";
import golanPhoto from "../../../assets/golan.jpg"
import { Image, ProgressBar } from "react-bootstrap";

function MainPage(): JSX.Element {
    const isWeekend = false;

    const bestStudents = [
        {id:1 , name:"Tal"},
        {id:2 , name:"Golan"},
        {id:3 , name:"Saar"},
        {id:4 , name:"Lea"},
        {id:5 , name:"Roee/Roei/Roy/Roi"},
    ]

    
    return (
        <div className="mainPage">
			<h2>דף הבית</h2><hr/>
            <Image src={golanPhoto} height={100} thumbnail/><br/><br/>
            <div className="Box">Oren</div>
            the best students in class<br/>
            {bestStudents.map(item=><span className="Box" key={item.id}>{item.name}</span>)}
            <br/>
            {isWeekend?<span>Pizza !!!</span>:<span>Pasta :(</span>}
            <br/>
            {isWeekend && <span>Weekend, time to rest</span>}<br/>

            Golan score : <ProgressBar animated striped now={90} label={"90%"} variant="success"/>
            
        </div>
    );
}

export default MainPage;
