import * as yup from "yup";
export const commentFormSchema = yup.object().shape({
  name: yup.string().required("نام کاربری الزامی است"),
  email: yup.string().email("ایمیل معتبر نیست").required("ایمیل الزامی است"),
  text: yup.string().required("متن الزامی است"),
});
