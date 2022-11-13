import { Buttons } from "../../atoms/Buttons";
import { TestButton } from "../../TestComponents/TestCustomButton";
import { DropDown } from "../../atoms/DropDown";
import { TestDropDown } from "../../TestComponents/TestCustomDropDown";
import { Header } from "../../organisms/Header";
import './HomePage.css'

function HomePage() {
  return (
    <div className="App">
      <Header /><br></br><br></br>
      <Buttons /><br></br><br></br>
      <TestButton /><br></br><br></br>
      <DropDown /><br></br><br></br>
      <TestDropDown /><br></br><br></br>
      <TestDropDown /><br></br><br></br>
      <TestDropDown /><br></br><br></br>
      <TestDropDown /><br></br><br></br>
      <TestDropDown /><br></br><br></br>
      <TestDropDown /><br></br><br></br>
    </div>
  );
}

export default HomePage;
