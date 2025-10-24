"use client";

import { useForm } from "react-hook-form";
import InputField from "@/components/forms/InputField";
import { Button } from "@/components/ui/button";
import FooterLink from "@/components/forms/FooterLink";

export default function SignInPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInFormData>({
    defaultValues: {
      email: "",
      password: "",
    },
    mode: "onBlur",
  });

  const onSubmit = async (data: SignInFormData) => {
    try {
      console.log(data);
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <>
      <h1 className="form-title">Log In to Your Account </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <InputField
          name="email"
          type="email"
          label="E-mail"
          placeholder="john.doe@gmail.com"
          register={register}
          error={errors.email}
          validation={{
            required: "Email is required",
            pattern: {
              value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
              message: "Enter a valid email",
            },
          }}
        />

        <InputField
          name="password"
          label="Password"
          placeholder="Enter your password"
          type="password"
          register={register}
          error={errors.password}
          validation={{
            required: "Password is required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          }}
        />

        <Button
          type="submit"
          disabled={isSubmitting}
          className="yellow-btn mt-5 w-full"
        >
          {isSubmitting ? "Logging in ..." : "Continue Your Investing Journey"}
        </Button>

        <FooterLink
          text="Don't have an account"
          linkText="Sign Up"
          href="/sign-up"
        />
      </form>
    </>
  );
}
