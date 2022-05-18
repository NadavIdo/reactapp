import { Component } from "react";
import "./myMovie.css";
import wifi_on from "../../../assets/wifi_on.gif"
import wifi_off from "../../../assets/wifi_off.gif"

class MyMovie extends Component {
    private isGeri = false;
    private isConnected=false;
    private myDate = new Date();
    private myDay = new Date().getDay()+1;

    public render(): JSX.Element {
        return (
            <div className="myMovie">
				<iframe src={"https://www.youtube.com/embed/SE2ANQ25vto"} frameBorder={"0"}
                allow="autoplay; encrypted-media" title="video" width={280} height={157}
                />{" "}
                <br/><br/>
                {this.isGeri?<span>Lea is sleeping</span>:<span>Geri is in the house :)</span>}
                <br/>
                {this.isGeri && <span>Kill Oren</span>}
               
                {/*this.isConnected && <img src={wifi_on} width={100}></img>*/}
                <img src={this.isConnected?wifi_on:wifi_off} width={100}></img>
                <br/>
                שנה {this.myDate.getFullYear()}{' '}
                {(this.myDay==1 || this.myDay==3) && <span>למכירה לאה חדשה מרופא</span>}            
            </div>
            
        );
    }
}

export default MyMovie;

