import {useState} from "react";
import { ToggleButtonGroup,  ToggleButton} from 'react-bootstrap';

const Styling = ({value, setValue}) => {
    const handleChange = (val) => setValue(val);

    return (
      <ToggleButtonGroup type="checkbox" value={value} onChange={handleChange}>
        <ToggleButton value={"bold"}>Bold</ToggleButton>
        <ToggleButton value={"italic"}>Italic</ToggleButton>
        <ToggleButton value={"underline"}>Underline</ToggleButton>
        {console.log(value)}
      </ToggleButtonGroup>    
    )
};

export default Styling;