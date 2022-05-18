import { Button } from "react-bootstrap";
import "./login.css";

function Login(): JSX.Element {
    const writeSomething = ()=>{
        console.log("Hello class 146, the best that lecturer can get")
    };
    return (
        <div className="login SolidBox" dir="ltr">
			<h3>Login Screen</h3><hr/>
            <input type="text" placeholder="Enter user name" id="uName"/><br/><br/>
            <input type="password" placeholder="Enter password" id="uPass"/><br/><br/>
            <Button onClick={writeSomething}>Login</Button>
        </div>
    );
}

export default Login;
