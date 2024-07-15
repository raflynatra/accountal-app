"use client";

import { Tooltip, useDisclosure } from "@nextui-org/react";

import Modal from "../ui/modal";
import AccountForm from "./form";
import { editAccount } from "@/app/lib/account";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import { Account } from "@prisma/client";
import toast from "react-hot-toast";
import { useState } from "react";

type EditButtonProps = {
  record: Account;
};

const EditButton = ({ record }: EditButtonProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (data: {
    name: string;
    code: string;
    group: string;
  }) => {
    setIsLoading(true);
    try {
      const payload = { ...data, id: record.id };
      await editAccount(payload);

      onClose();
      toast.success("Account updated successfully");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Tooltip content="Edit Account">
        <span
          className="text-lg text-default-400 cursor-pointer active:opacity-50"
          role="presentation"
          onClick={onOpen}
        >
          <PencilSquareIcon className="w-5" />
        </span>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Edit Account"
        footer={false}
      >
        <AccountForm
          onClose={onClose}
          onSubmit={onSubmit}
          data={record}
          isLoading={isLoading}
        />
      </Modal>
    </>
  );
};

export default EditButton;
