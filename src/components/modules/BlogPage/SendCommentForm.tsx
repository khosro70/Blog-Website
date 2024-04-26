"use client";
import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Button, TextField, Typography } from "@mui/material";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  CommentFormInputs,
  SendCommentFormPropsInterface,
} from "@/contracts/interfaces";
import { commentFormSchema } from "@/helpers/formSchema";
import { useMutation } from "@apollo/client";
import { SEND_COMMENT } from "@/graphQl/mutations";
import { errorNotify, successNotify } from "@/helpers/notify";
import { Oval } from "react-loader-spinner";

const SendCommentForm: React.FC<SendCommentFormPropsInterface> = ({ slug }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<CommentFormInputs>({
    resolver: yupResolver(commentFormSchema),
  });

  const [sendComment, { loading, data: Data, error }] =
    useMutation(SEND_COMMENT);

  const onSubmit: SubmitHandler<CommentFormInputs> = async (data) => {
    try {
      const response = await sendComment({
        variables: { ...data, slug },
      });
      if (response.data) {
        successNotify("کامنت با موفقیت ارسال شد و منتظر تایید می باشد");
        reset();
      }
    } catch (error) {
      errorNotify("مشکلی پیش آمده دوباره تلاش کنید");
    }
  };
  return (
    <>
      <Typography component="p" variant="h5" color="blue">
        ارسال کامنت
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <TextField
          {...register("name")}
          sx={{
            marginTop: "20px",
            "& .MuiFormLabel-root": {
              top: "-8px",
              transformOrigin: "right",
              left: "unset",
              right: "1.75rem",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              textAlign: "right",
              color: "#D1D5DB",
            },
          }}
          label="نام کاربری"
          variant="outlined"
          fullWidth
          error={!!errors.name}
          helperText={errors.name?.message}
        />
        <TextField
          sx={{
            marginTop: "20px",
            "& .MuiFormLabel-root": {
              top: "-8px",
              transformOrigin: "right",
              left: "unset",
              right: "1.75rem",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              textAlign: "right",
              color: "#D1D5DB",
            },
          }}
          {...register("email")}
          label="ایمیل"
          variant="outlined"
          fullWidth
          error={!!errors.email}
          helperText={errors.email?.message}
        />
        <TextField
          {...register("text")}
          sx={{
            marginTop: "20px",
            "& .MuiFormLabel-root": {
              top: "-8px",
              transformOrigin: "right",
              left: "unset",
              right: "1.75rem",
            },
            "& .MuiOutlinedInput-notchedOutline": {
              textAlign: "right",
              color: "#D1D5DB",
            },
          }}
          label="متن پیام"
          variant="outlined"
          fullWidth
          multiline
          rows={2}
          error={!!errors.text}
          helperText={errors.text?.message}
        />
        {loading ? (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled
            sx={{ margin: "20px 0" }}
          >
            <Oval
              visible={true}
              height="22"
              width="22"
              color="#fff"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          </Button>
        ) : (
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ margin: "20px 0" }}
          >
            ارسال
          </Button>
        )}
        <ToastContainer />
      </form>
    </>
  );
};

export default SendCommentForm;
