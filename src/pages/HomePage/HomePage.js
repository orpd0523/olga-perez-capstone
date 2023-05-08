import "./HomePage.scss"
import Card from "../../components/Card/Card";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function HomePage(){
    return(
        <div className="home">
        <Card color="main">
            <h3 className="home__title">Are you ready to be productive and stay alive?</h3>
            <div className="home__buttons">
        <Link to="/login">
            <Button color="login">YES</Button>
        </Link>
        <Link to="/no">
            <Button color="login">NO</Button>
        </Link>
        </div>
        </Card>
        </div>
    )
}

export default HomePage;