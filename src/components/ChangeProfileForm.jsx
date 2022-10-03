import AttributeField from "./AtrributeFIeld";
import Avatar from "./Avatar";
import Buttons from "./Buttons";
import PasswordInput from "./PasswordInput";
import ThemeSelector from "./ThemeSelector";

export default function ChangeProfileForm({
   name,
   email,
   password,
   pootoURL,
   welcomeMessage,
   theme,
}) {
   return (
      <div className="form">
         <Avatar
            name="Bozidar"
            photoURL="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg?w=2000"
         />
         <h1>Change your profile</h1>
         <AttributeField
            componentName="Name"
            attributeData="Bozidar Vujasinovic"
         />
         <AttributeField
            componentName="Email"
            attributeData="vujasinovicb2019@gmail.com"
         />

         <AttributeField
            componentName="Welcome Message"
            attributeData="Hello, my name is Bozidar"
         />

         <ThemeSelector />

         <PasswordInput />

         <Buttons />
      </div>
   );
}
