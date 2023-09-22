import { useState, FormEvent, ChangeEvent } from "react";

const LoginForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
    setIsFormSubmitted(true);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px] bg-white shadow-2xl rounded-b-2xl">
      <h3 className="w-[237px] h-[55px] text-[32px] font-black text-center">
        به کوئرا تسک منیجر خوش برگشتی :)
      </h3>
      {!isFormSubmitted ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-[592] h-[200px] gap-[32px]"
          >
            <div className="w-[592px] h-[72px]  flex flex-col items-start gap-[px]">
              <label className="text-Yekan text-body-s text-balck">ایمیل</label>
              <input className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1" />
            </div>
            <div className="w-[592px] h-[72px]  flex flex-col items-start gap-[px]">
              <label className="text-Yekan text-body-s text-balck">
                رمز عبور
              </label>
              <input className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1" />
            </div>
            <div className="w-[592px] h-[72px]  flex flex-col items-start gap-[px] text-brand-primary">
              <p>رمز عبور را فراموش کرده‌ای؟</p>
            </div>
            <button
              type="submit"
              className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center text-white bg-brand-primary text-gray-secondary rounded cursor-pointer"
            >
              ورود
            </button>
            <div className="w-[592px] h-[72px]  flex items-start gap-[5px]">
              <p>ثبت نام نکرده ای؟</p>
              <p className="text-brand-primary">ثبت نام</p>
            </div>
          </form>
        </>
      ) : (
        <p className="font-iran-yekan w-148 h-6 gap-5 text-lg  text-center">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
        </p>
      )}
    </div>
  );
};

export default LoginForm;
