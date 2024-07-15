"use client";

import { Button, Tooltip, useDisclosure } from "@nextui-org/react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { deleteAccount } from "@/app/lib/account";
import Modal from "../ui/modal";
import { useState } from "react";
import toast from "react-hot-toast";

type DeleteButtonProps = {
  accountId: string;
};

const DeleteButton = ({ accountId }: DeleteButtonProps) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const [isLoading, setIsLoading] = useState(false);

  const handleDelete = async () => {
    setIsLoading(true);
    try {
      await deleteAccount(accountId);

      onClose();
      toast.success("Account deleted successfully");
    } catch (error) {
      if (error instanceof Error) toast.error(error.message);
    }

    setIsLoading(false);
  };

  return (
    <>
      <Tooltip content="Delete Account">
        <span
          className="text-lg text-danger-400 cursor-pointer active:opacity-50"
          role="presentation"
          onClick={onOpen}
        >
          <TrashIcon className="w-5" />
        </span>
      </Tooltip>

      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        title="Delete Account"
        customFooter={
          <>
            <Button variant="flat" onPress={onClose}>
              Cancel
            </Button>
            <Button color="danger" onPress={handleDelete} isLoading={isLoading}>
              Delete
            </Button>
          </>
        }
      >
        <div className="text-center">
          Are you sure you want to delete this account?
        </div>
      </Modal>
    </>
  );
};

export default DeleteButton;
