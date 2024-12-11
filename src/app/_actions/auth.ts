"use server";

import { revalidatePath } from "next/cache";
// import { AuthError } from "next-auth";

import { signIn, signOut } from "@/auth";
import { prisma } from "@/prisma";

export const logIn = async (provider: string) => {
  await signIn(provider, { redirectTo: "/" });
  revalidatePath("/");
};

export const logOut = async () => {
  await signOut({ redirectTo: "/" });
  revalidatePath("/");
};

export const loginWithCreds = async (formData: FormData) => {
  const rawFormData = {
    loginId: formData.get("loginId"),
    password: formData.get("password"),
    redirectTo: "/",
  };

  await signIn("credentials", rawFormData);

  //   if (error instanceof AuthError) {
  // switch (error.type) {
  //   case "CredentialsSignin": {
  //     return { error: "Invalid credentials!" };
  //   }
  //   default: {
  //     return { error: "Internal Server Error!" };
  //   }
  // }
  // }
  // }
  // return { error: "Unexpected error occurred!" };
};

export const checkIdDuplicated = async (id: string) => {
  const existingUser = await prisma.user.findUnique({
    where: { loginId: id },
  });

  if (existingUser) {
    return true;
  }

  return false;
};
