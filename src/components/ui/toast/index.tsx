import React from "react";
import { Toaster } from "react-hot-toast";

const Toast = () => {
  return (
    <Toaster
      toastOptions={{
        style: {
          background: "#18181b",
          color: "#ECEDEE",
        },
        error: {
          style: {
            minWidth: "fit-content",
          },
        },
      }}
    />
  );
};

export default Toast;
