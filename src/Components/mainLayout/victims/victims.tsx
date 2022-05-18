import { Button } from "react-bootstrap";
import SingleVictim from "../singleVictim/singleVictim";
import SingleVictimCC from "../singleVictimCC/singleVictimCC";
import "./victims.css";
import { SyntheticEvent, useState } from 'react';
import Test from "../test/test";
import img2 from "../../../assets/elli.jpg"
function Victims(): JSX.Element {
    var [groom,setGroom] = useState("");

    const victims = ["golan","oren","omer","saar","roee"]
    const victimsList = [
        {
            img:"https://icon-library.com/images/animal-icon-png/animal-icon-png-6.jpg",
            name:"אורן",
            age:22,
            married : "בתקווה",
            salary : 22000,
            about : "או לאה או כלום",
            zamin : true
        },
        {
            img:"https://scontent.ftlv5-1.fna.fbcdn.net/v/t39.30808-6/274705867_10224369429014825_1359373689239372108_n.jpg?_nc_cat=107&ccb=1-6&_nc_sid=09cbfe&_nc_ohc=OdpGVGu9e-sAX9G1j2b&_nc_ht=scontent.ftlv5-1.fna&oh=00_AT9JNQZe_UZlZ3ONKcEqZZfBhWui1N8e4lv0hDKUnLPkpA&oe=62810F05",
            name:"גולן",
            age:30,
            married : "זה מסובך",
            salary : 43000,
            about : "יש כסף אין בית",
            zamin : false
        },
        {
            img:"https://www.i2symbol.com/images/text-symbols/animal-symbol.png",
            name:"עומר",
            age:28,
            married : "יש אבל לא מחייב",
            salary : 13000,
            about : "פה ושם ובאף מקום",
            zamin : true
        },
        {
            img:"https://spencercreekvet.com/wp-content/uploads/2020/05/iconfinder_034_cat_kitty_pussy_pussycat_animal_meow_2090333.png",
            name:"סהר",
            age:25,
            married : "יש אבל לא מחייב",
            salary : 73000,
            about : "הטוב ביותר",
            zamin : true
        },
        {
            img:"https://artbreeder.b-cdn.net/imgs/0959cc21a44aa721a615.jpeg?width=256",
            name:"רועי (יורי)",
            age:41,
            married : "לצערי",
            salary : 93000,
            about : "חי בסרטים",
            zamin : true
        },
        {
            img:img2,
            name:"elli",
            age:12,
            married : "בעתיד",
            salary : 93000,
            about : "חי בסרטים",
            zamin : true
        }
    ]

    const searchGroom = (sender:SyntheticEvent)=>{
        //console.log("got a letter");
        const value = (sender.target as HTMLInputElement).value;
        setGroom(value);
    };

    /*
    const foundGroom = ()=>{
        setGroom("אורן לוי");
    };
    */

    const clearMe = ()=>{
        setGroom("");
    };

    return (
        <div className="victims" >
            <Test/>
            <br/><br/>
            <input type="text" placeholder="מציאת חתן לפי שם" onChange={searchGroom} value={groom}></input>
            {/*<Button variant="primary" onClick={}>מצא</Button>*/}
            <Button variant="danger" onClick={clearMe}>נקה</Button>
            <br/><br/>
            מציאת חתן לפי השם : {groom}
            <br/><br/>
			{/*victims.map(item=><div className="Box">{item}</div>)*/}
            <br/>
            {/*
            <SingleVictim img={victimsList[0].img} name={victimsList[0].name} 
                age={victimsList[0].age} married={victimsList[0].married} 
                salary={victimsList[0].salary} about={victimsList[0].about}/>
            */}
            {victimsList.filter(item=>item.name.includes(groom)).map(item=><div className="Box">
                <SingleVictim img={item.img} name={item.name} age={item.age}
                married={item.married} salary={item.salary} about={item.about} zamin={item.zamin}/>
            </div>)}

            
        </div>
    );
}

export default Victims;
