import { Avatar } from "@mui/material";

export default function Avatar1({ name, photoURL }) {
   return (
      <div className="profile-picture">
         <Avatar
            className="avatar-image"
            alt={name}
            src={photoURL}
            sx={{ width: 80, height: 80, marginBottom: "30px" }}
         />
      </div>
   );
}
