import "./HomePage.scss"
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <>
        <Card color="main">
        <Link to="/login">
            <Button color="login">Log In</Button>
        </Link>
        </Card>
        </>
    )
}

export default HomePage;