import {useState} from "react";
import styled from "styled-components";

const clicked = {
  light: {backgroundColor: "#DCDCDC"},
  dark: {backgroundColor: "#A9A9A9"},
};

const textStyles = {
  bold: {fontWeight:"bold"},
  italic: {fontStyle:"italic"},
  underline: {textDecorationLine:"underline"},
};
const styles = ["bold", "italic", "underline"];
const colors = ["yellow", "blue", "red", "black", "purple"];

function App() {
  const [textColor, setTextColor] = useState("Black");

  const [active, setActive] = useState("light");
  const clickedButton = () => {
    if(active === "dark") setActive("light");
    else setActive("dark");
  }

  const [textStyle, setTextStyle] = useState("");


  const styleButtons = styles.map((style) => <button key={style} theme={clicked[active]} style={textStyles[style]} onClick={()=> setTextStyle(style)}>{style}</button>);
  const colorButtons = colors.map((color) => <button key={color} style={{backgroundColor:color, height:"30px", width:"40px"}} onClick={()=> setTextColor(color)}/>);

  return (
    <div>
      <div>{styleButtons}</div>
        <textarea style={{color: textColor}}
          onChange = {(event) => console.log(event.target.value)}
        />
      <div>{colorButtons}</div>
    </div>
  );
}

//styles[textStyle]
export default App;
