import { Alert, Button } from "react-bootstrap";
import "./alert.css";

function myAlert(): JSX.Element {
    return (
        <Alert dismissible variant="danger">
            <Alert.Heading>Oh No! Lea did it again</Alert.Heading>
            <p>
                Mess with the best and die like the rest !!!!
            </p>
            
        </Alert>
    );
}

export default myAlert;
