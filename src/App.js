import Card from "./components/Card/Card.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import HealthBar from "./components/HealthBar/HealthBar.js";
import Avatar from "./components/Avatar/Avatar.js";
import TodoList from "./components/TodoList/TodoList.js";

function App() {
  return (
    <div>
      <Header></Header>
      <Card>
        <Avatar />
        <HealthBar/>
      </Card>
      <Card>
        <TodoList />
      </Card>
      <Footer></Footer>
    </div>
  );
}

export default App;
