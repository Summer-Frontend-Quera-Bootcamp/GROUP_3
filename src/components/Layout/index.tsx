import "./style.css";
import ForgetPassword from "../Forgot";
import ResetPassword from "../Reset";
import LoginForm from "../LoginForm";
import RegisterForm from "../RegisterForm";
const Layout: React.FC = () => {
  return (
    <div className="w-full h-screen fixed m-auto ">
      <header className="w-[1700px] h-[51px] fixed top-[80px] left-[80px] flex justify-between">
        <h1 className="w-[500px] h-[51px] font-iran-yekan font-bold text-[32px] leading-[37.5px] m-0 text-right bg-gradient-to-r from-[#118c80] to-[#4ab7d8]  bg-clip-text [-webkit-text-fill-color:transparent] justify-center items-center">
          کوئرا تسک منیجر
        </h1>
        <div className="w-[227px] h-   gap-[7px] flex justify-center items-center">
          <div className="w-[150px] h-[24px] flex font-iran-yekan  text-[16px] leading-[19px] tracking-normal text-rightbg-black bg-clip-text text-transparent [-webkit-text-fill]">
            قبلا ثبت‌نام کرده‌ای؟
          </div>
          <button className=" bg-brand-primary cursor-pointer w-[95px] h-[40px] p-[6px] rounded-[10px] border-none gap-[10px] text-gray-secondary font-iran-yekan  ">
            ثبت‌نام{" "}
          </button>
        </div>
      </header>
      <div className='flex justify-center "'>
        <div className="form">
          {/* <ResetPassword /> */}
          {/* <ForgetPassword /> */}
          {/* <LoginForm /> */}
          <RegisterForm />
        </div>
      </div>
      <div className="linear__gradient"></div>
    </div>
  );
};

export default Layout;
