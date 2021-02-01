import {useState} from "react";
import Styling from "./components/Styling";
import { Title, TextBox, Buttons } from "./styles";

const textStyles = {
  bold: {fontWeight:"bold"},
  italic: {fontStyle:"italic"},
  underline: {textDecorationLine:"underline"},
};
const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [textColor, setTextColor] = useState("Black");
  const [value, setValue] = useState([]);
  
  let textStyle = {color: textColor};
  value.forEach((style) => {
    textStyle = {...textStyle, ...textStyles[style]}
  });

  const colorButtons = colors.map((color) => 
  <button key={color} 
  style={{backgroundColor:color, height:"30px", width:"40px"}} 
  onClick={()=> setTextColor(color)}/>);

  return (
    <> 
    <Title>I am a Magical Box</Title>
    <h3 style={{textAlign: "center"}}>Enter your wishes and they shall be granted!</h3>
    <TextBox>
      <Buttons>
        <Styling value={value} setValue={setValue}/>
      </Buttons>
      <div style={{marginLeft: "10px"}}>
        <textarea style={textStyle}/>
      </div>
      <Buttons>{colorButtons}</Buttons>
    </TextBox>
    </>
  );
}

export default App;
