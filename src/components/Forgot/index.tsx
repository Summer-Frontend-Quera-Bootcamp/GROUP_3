import { useState, FormEvent, ChangeEvent } from "react";

const ForgetPassword: React.FC = () => {
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
      <h3 className="font-iran-yekan w-[237px] h-[55px] text-[32px] font-black text-center">
        فراموشی رمز عبور
      </h3>
      {!isFormSubmitted ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-[592] h-[140px] gap-[32px]"
          >
            <div className="w-[592px] h-[72px]  flex flex-col items-end gap-[px]">
              <label className="self-end text-Yekan text-body-s text-balck">
                ایمیل خود را وارد کنید
              </label>
              <input className="w-[592px] h-[40px] rounded-md border border-input-gray bg-input-white px-1" />
            </div>
            <button
              type="submit"
              className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center text-white bg-brand-primary text-gray-secondary rounded cursor-pointer"
            >
              دریافت ایمیل بازیابی رمز عبور
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

export default ForgetPassword;
