import Card from "./components/Card/Card.js";
import Header from "./components/Header/Header.js";
import Footer from "./components/Footer/Footer.js";
import HealthBar from "./components/HealthBar/HealthBar.js";
import Avatar from "./components/Avatar/Avatar.js";
import TodoList from "./components/TodoList/TodoList.js";
import Presentation from "./components/Presentation/Presentation.js";

function App() {
  return (
    <>
      <Header></Header>
      <main className="main">
        <Card color="demo">
          <Presentation/>
        </Card>
        <Card color="secondary">
          <Avatar />
          <HealthBar />
        </Card>
        <Card color="primary">
          <TodoList />
        </Card>
      </main>
      <Footer></Footer>
    </>
  );
}

export default App;
