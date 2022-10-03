import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

export default function Buttons() {
   return (
      <Stack
         direction="row"
         spacing={2}
         sx={{ marginTop: "20px" }}
      >
         <Button
            sx={{ fontSize: 16 }}
            variant="contained"
            color="success"
         >
            Update profile
         </Button>
         <Button
            sx={{ fontSize: 16 }}
            variant="outlined"
            color="error"
         >
            Cancel
         </Button>
      </Stack>
   );
}
