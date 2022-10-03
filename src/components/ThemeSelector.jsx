import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function ThemeSelector() {
   const [theme, setTheme] = React.useState("");

   const handleChange = (event) => {
      setTheme(event.target.value);
   };

   return (
      <div className="selector">
         <FormControl sx={{ m: 1, width: "40ch" }}>
            <InputLabel id="demo-simple-select-helper-label">Theme</InputLabel>
            <Select
               labelId="demo-simple-select-helper-label"
               id="demo-simple-select-helper"
               value={theme}
               label="Theme"
               onChange={handleChange}
            >
               <MenuItem value={1}>Light</MenuItem>
               <MenuItem value={2}>Dark</MenuItem>
               <MenuItem value={3}>Custom</MenuItem>
            </Select>
            <FormHelperText>Select what theme do you like</FormHelperText>
         </FormControl>
      </div>
   );
}
