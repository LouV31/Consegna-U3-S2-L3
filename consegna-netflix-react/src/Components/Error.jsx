import { Alert } from "react-bootstrap";

const Error = (props) => {
    return console.log(props.message), (<Alert variant="danger">Errore: {props.message}</Alert>);
};

export default Error;
