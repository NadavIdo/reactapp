import "./singleVictim.css";
import person from "../../../assets/golan.jpg"
import { Button } from "react-bootstrap";
import { useState } from "react";


interface SingleVictimProps {
	img:string,
    name:string,
    age:number,
    married : string,
    salary : number,
    about : string,
    zamin: boolean,
}

function SingleVictim(props: SingleVictimProps): JSX.Element {
    //var isZamin = false;
    
    //    name   function     state   defualt value
    var [isZamin,setZamin] = useState(props.zamin);
    /*
    function callHim(){
        alert("dialing victim : "+props.name);
    }
    */
    const callHim = ()=>{
        //alert("dialing victim : "+props.name);
        console.log("מי לאה? מה פתאום, לא רוצה");
        //isZamin=false;   BIG NO NO
        setZamin(false);
    };

    return (
        <div className="singleVictim" style={{textAlign:"center"}}>
			<img src={props.img} width={75} height={75}></img><br/>
            שם הקורבן : {props.name}<br/>
            גיל : {props.age}<br/>
            מצב משפחתי : {props.married}<br/>
            משכורת חודשית : {props.salary} ש"ח<br/>
            קצת עליי : {props.about}<br/>
            <h1>{isZamin?<span>זמין להצעה</span>:<span>לא מעוניין</span>}</h1><hr/>
            {isZamin && <Button variant="danger" onClick={()=>{setZamin(false);}} >צרי קשר</Button>}
            {!isZamin && <Button variant="primary" disabled>bla bla</Button>}
        </div>
    );
}

export default SingleVictim;
