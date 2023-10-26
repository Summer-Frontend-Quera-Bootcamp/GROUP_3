import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ForgetPassword from "./components/Authentication/Forgot";
import ResetPassword from "./components/Authentication/Reset";
import Profile from "./pages/Profile/Profile";
import AuthenticationLayout from "./components/Authentication/Layout";
import ProfileLayout from "./components/Profile/Layout";
import ProfileForm from "./components/Profile/ProfileForm";
import AccountForm from "./components/Profile/AccountForm";
import SettingForm from "./components/Profile/SettingForm";
import FullAccess from "./components/Common/CommonDropdown/FullAccess/Index";
import IsAndIsNot from "./components/Common/CommonDropdown/IsAndIsNot";
import Select from "./components/Common/CommonDropdown/Select";
import WhichProjectAccess from "./components/Common/CommonDropdown/WhichProjectAccess";
import SearchBetween from "./components/Common/CommonDropdown/SerachBetween";

function App() {
  return (
       <div className="flex justify-between bg-gray-primary">
       <FullAccess></FullAccess>
       <SearchBetween></SearchBetween>
       <Select></Select>
       <IsAndIsNot></IsAndIsNot>
       <WhichProjectAccess projects={["پروژه اول", "پروژه دوم"]}></WhichProjectAccess>
       
       </div> 
  );
}

export default App;
