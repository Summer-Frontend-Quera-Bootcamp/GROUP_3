import { useState, FormEvent, ChangeEvent } from "react";

const RegisterForm: React.FC = () => {
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
        ثبت‌نام در کوئرا تسک منیجر
      </h3>
      {!isFormSubmitted ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-[592] h-[200px] gap-[32px]"
          >
            <div className="w-[592px] h-[72px]  flex flex-col items-start gap-[px]">
              <label className="text-Yekan text-body-s text-balck">
                نام کامل
              </label>
              <input className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1" />
            </div>
            <div className="w-[592px] h-[72px]  flex flex-col items-start gap-[px]">
              <label className="text-Yekan text-body-s text-balck">ایمیل</label>
              <input className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1" />
            </div>
            <div className="w-[592px] h-[72px]  flex flex-col items-start gap-[px]">
              <label className="text-Yekan text-body-s text-[#1E1E1E]">
                رمز عبور
              </label>
              <input className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1" />
            </div>
            <div className="w-[592px] h-[72px]  flex  items-center gap-[5px]">
              <input
                className="w-[20px] h-[20px]"
                type="checkbox"
                id="demoCheckbox"
                name="checkbox"
                value="1"
              />
              <label className="text-[16px]" htmlFor="demoCheckbox">
                قوانین و مقررات را می‌پذیرم.
              </label>
            </div>
            <button
              type="submit"
              className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center text-white bg-brand-primary text-gray-secondary rounded cursor-pointer"
            >
              ثبت نام
            </button>
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

export default RegisterForm;
