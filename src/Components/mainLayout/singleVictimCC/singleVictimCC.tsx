import { Component } from "react";
import { Button } from "react-bootstrap";
import "./singleVictimCC.css";

interface SingleVictimCCProps {
	img:string,
    name:string,
    age:number,
    married : string,
    salary : number,
    about : string,
    zamin: boolean
}

interface SingleVictimCCState{
    isZamin:boolean;
}

class SingleVictimCC extends Component<SingleVictimCCProps> {

    public constructor(props:SingleVictimCCProps){
        super(props);
        this.state={
            isZamin:props.zamin
        }
    }

    private callHim = ()=>{
        this.setState({isZamin:false});
    };

    public render(): JSX.Element {
        return (
            <div className="singleVictimCC Box" style={{textAlign:"center"}}>
				<img src={this.props.img} width={75} height={75}></img><br/>
                    שם הקורבן : {this.props.name}<br/>
                    גיל : {this.props.age}<br/>
                    מצב משפחתי : {this.props.married}<br/>
                    משכורת חודשית : {this.props.salary} ש"ח<br/>
                    קצת עליי : {this.props.about}<br/>
                    i am a class<hr/>
                    <Button variant="info" onClick={this.callHim}>צרי קשר</Button>
            </div>
        );
    }
}

export default SingleVictimCC;
