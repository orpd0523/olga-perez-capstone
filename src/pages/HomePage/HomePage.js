import "./HomePage.scss"
import Card from "../../components/Card/Card";
import { Link } from "react-router-dom";
import { GiFallingLeaf } from 'react-icons/gi';

function HomePage() {
    return (
        <div className="home">
            <Card color="home">
                <div className="home__box">
                <h3 className="home__title">Life Gets Easier Here</h3>
                <GiFallingLeaf size={50} className="home__leaf" />
                </div>
                <div className="home__links">
                    <Link to="/login" className="home__link">
                        Log In
                    </Link>
                    <Link to="/no" className="home__link">
                        Creat Account
                    </Link>
                </div>
            </Card>
        </div>
    )
}

export default HomePage;