import "./LoginPage.scss"
import Card from "../../components/Card/Card";
import TextField from "../../components/TextField/TextField";
import Button from "../../components/Button/Button";
import { Link } from "react-router-dom";

function LoginPage() {
    return (
        <>
            <Card color="info">
                <h3>Sign In</h3>
                <TextField label="Username" variant="form" />
                <TextField label="password" variant="form" />
                <Link to="/">
                    <Button color="goin">Log In</Button>
                </Link>
                <div>--------------------------OR-------------------------</div>
                <div>🍎✉️📱</div>
                <div>___________________________________</div>
                <div>Need to get organized? <a>Click Here!</a></div>
            </Card>
        </>
    )
}

export default LoginPage;