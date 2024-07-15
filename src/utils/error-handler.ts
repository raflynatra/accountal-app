import { Prisma } from "@prisma/client";

const errorHandler = (err: unknown) => {
  if (err instanceof Prisma.PrismaClientKnownRequestError) {
    switch (err.code) {
      case "P2002":
        return { status: 400, message: "Duplicate entry detected" };
      case "P2025":
        return { status: 404, message: "Record not found" };
      default:
        return { status: 500, message: "Database error" };
    }
  } else if (err instanceof Prisma.PrismaClientInitializationError) {
    return { status: 500, message: "Database initialization error" };
  } else if (err instanceof Prisma.PrismaClientValidationError) {
    return { status: 400, message: "Validation error" };
  }
  return { status: 500, message: "An unexpected error occurred" };
};

export default errorHandler;
