import Add from "./components/Add";
import Greetings from "./components/Greetings";
import JsxExpression from "./components/JsxExpression";
import List from "./components/List";
import UserInfo from "./components/UserInfo";
import PropsExp from "./components/PropsExp";
import CheckPassword from "./components/Password";
import Cart from "./Cart";
import "./index.css";
import Buttons from "./components/Bootstrap/Button";
import NavbarBasic from "./components/Bootstrap/Navbar";

function App() {
  return (
    <>
      <h1>Hello React</h1>
      <Add />
      <Greetings />
      <JsxExpression />
      <List />
      <UserInfo />

      <PropsExp
        img="https://media.licdn.com/dms/image/v2/D4E03AQFfVrowOryxgg/profile-displayphoto-shrink_400_400/profile-displayphoto-shrink_400_400/0/1682543113787?e=1735171200&v=beta&t=yxyi1BaNHnYp6Bo0o1qWaNyYG4CIGEQudrMHW5ia6tA"
        name="Milja Else Augustine"
        age={18}
        hobbies={["Coding", "Reading", "Sleeping"]}
        realData={{ name: "Paari", location: "Germany" }}
      >
        <p> I AM CHILDREN </p>
      </PropsExp>
      <NavbarBasic />
      <CheckPassword isValid={false} />
      <Cart />
      <Buttons />
    </>
  );
}
export default App;
