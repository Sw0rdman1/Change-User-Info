import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function AttributeField({ componentName, attributeData }) {
   return (
      <div className="attribute-field">
         <Box
            className="input-atrribute"
            component="form"
            sx={{
               "& .MuiTextField-root": {
                  m: 1,
                  width: "40ch",
               },
            }}
            noValidate
            autoComplete="off"
         >
            <TextField
               InputProps={{ style: { fontSize: 18 } }}
               InputLabelProps={{ style: { fontSize: 18 } }}
               required
               id="outlined-required"
               label={componentName}
               defaultValue={attributeData}
            />
         </Box>
      </div>
   );
}
