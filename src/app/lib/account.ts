"use server";

import { revalidatePath } from "next/cache";
import prisma from "./db";
import type { Account } from "@prisma/client";
import errorHandler from "@/utils/error-handler";

export const getAccount = async ({
  searchValue,
  size,
  page,
}: {
  searchValue?: string;
  size: number;
  page: number;
}) => {
  try {
    const accounts = await prisma.account.findMany({
      take: size,
      skip: (page - 1) * size,
      orderBy: { code: "asc" },
      where: {
        name: {
          contains: searchValue?.toLowerCase() || "",
        },
      },
    });
    const totalAccounts = await prisma.account.count();

    const totalPage = Math.ceil(Number(totalAccounts) / size);

    return { data: accounts, totalPage, page };
  } catch (error) {
    const { message } = errorHandler(error);
    throw new Error(`Failed to fetch account data: ${message}`);
  }
};

export const addAccount = async (
  data: Omit<Account, "id" | "createdAt" | "updatedAt">
) => {
  try {
    await prisma.account.create({ data });
  } catch (error) {
    const { message } = errorHandler(error);
    throw new Error(`Failed to create an account: ${message}`);
  }

  revalidatePath("/account");
};

export const editAccount = async (
  data: Omit<Account, "createdAt" | "updatedAt">
) => {
  try {
    await prisma.account.update({
      data,
      where: { id: data.id },
    });
  } catch (error) {
    const { message } = errorHandler(error);
    throw new Error(`Failed to update account: ${message}`);
  }

  revalidatePath("/account");
};

export const deleteAccount = async (id: string) => {
  try {
    await prisma.account.delete({
      where: { id },
    });
  } catch (error) {
    const { message } = errorHandler(error);
    throw new Error(`Failed to delete account: ${message}`);
  }

  revalidatePath("/account");
};
