import { useFormik } from "formik";
import { HttpStatusCode, isAxiosError } from "axios";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Form from "../../../components/Common/Form";
import Header from "../../../components/Authentication/Header";
import { forgotSchema } from "../../../schemas/forgot.schema";
import apiClients from "../../../services/api-clients";
import { useNavigate } from "react-router-dom";

const ForgotForm = () => {
  let navigate = useNavigate();
  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    setErrors,
  } = useFormik({
    initialValues: {
      email: "",
    },
    validationSchema: forgotSchema,
    onSubmit: async (values, actions) => {
      // try {
      //   const response = await apiClients.post<UserForgotPasswordResponse>(
      //     "/accounts/reset-password/",
      //     values
      //   );
      //   actions.resetForm();
      //   navigate("/forgot/email-received");
      // } catch (error) {
      //   if (isAxiosError<UserForgotPasswordErrorResponse>(error)) {
      //     if (error.response?.status === HttpStatusCode.BadRequest) {
      //       const { email } = error.response.data;
      //       setErrors({
      //         email: email?.length ? email[0] : "",
      //       });
      //     }
      //   }
      // }
    },
  });

  return (
    <div className="h-full flex items-center justify-center">
      <div className="flex flex-col items-center justify-center w-[700px] gap-[32px] p-[24px]  [background-color:#ffff] shadow-2xl rounded-b-2xl">
        <h3 className=" w-[237px] h-[55px] text-[32px] font-black text-center">
          فراموشی رمز عبور
        </h3>
        <Form onSubmit={handleSubmit}>
          <Input
            type="email"
            id="email"
            label={{ text: "ایمیل خود را وارد کنید", for: "email" }}
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`ring-2 ring-gray-primary w-[592px] ${
              errors.email && touched.email ? "ring-red-primary" : ""
            }`}
          />
          {errors.email && touched.email && (
            <p className="text-red-primary text-xs italic self-start -mt-s">
              {errors.email}
            </p>
          )}
          <Button
            type="submit"
            disabled={isSubmitting}
            className=" w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer justify-center"
            title="دریافت ایمیل بازیابی رمز عبور"
          />
        </Form>
      </div>
    </div>
  );
};

export default ForgotForm;
