import { prisma } from "@/prisma";

export const getUser = async (userId: string | undefined) => {
  const user = await prisma.user.findUnique({
    where: { id: userId },
    select: { name: true },
  });

  if (!user) throw new Error("유효하지 않은 접근입니다.");

  return user;
};
