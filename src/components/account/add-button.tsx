"use client";

import { Button, useDisclosure } from "@nextui-org/react";
import Modal from "../ui/modal";
import AccountForm from "./form";
import { addAccount } from "@/app/lib/account";
import toast from "react-hot-toast";
import { useState } from "react";

const AddButton = () => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    try {
      await addAccount(data);
      onClose();

      toast.success("Account added successfully");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Button color="primary" onPress={onOpen}>
        Add Account
      </Button>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Add Account"
        footer={false}
      >
        <AccountForm
          onClose={onClose}
          onSubmit={onSubmit}
          isLoading={isLoading}
        />
      </Modal>
    </>
  );
};

export default AddButton;
