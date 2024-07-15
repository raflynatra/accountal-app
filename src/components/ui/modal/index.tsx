"use client";

import React from "react";
import {
  Modal as NextModal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
} from "@nextui-org/react";

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  title: string;
  okText?: string;
  cancelText?: string;
  customFooter?: React.ReactNode;
  footer?: boolean;
  onCancel?: () => void;
  onOk?: () => void;
  onOpenChange?: (isOpen: boolean) => void;
}

const Modal: React.FC<ModalProps> = ({
  children,
  title,
  okText = "OK",
  cancelText = "Cancel",
  isOpen,
  customFooter,
  footer = true,
  onCancel,
  onOk,
  onOpenChange,
}) => {
  const handleOk = (onClose: () => void) => {
    if (onOk) onOk;
    onClose();
  };

  const handleCancel = (onClose: () => void) => {
    if (onCancel) onCancel();
    onClose();
  };

  return (
    <NextModal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      placement="top-center"
      backdrop="opaque"
      classNames={{
        backdrop: "bg-zinc-950/85 backdrop-opacity-20",
      }}
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="flex flex-col gap-1">{title}</ModalHeader>
            <ModalBody>{children}</ModalBody>
            {footer && (
              <ModalFooter className="justify-center">
                {customFooter ? (
                  customFooter
                ) : (
                  <>
                    <Button
                      variant="flat"
                      onPress={() => handleCancel(onClose)}
                    >
                      {cancelText}
                    </Button>
                    <Button color="primary" onPress={() => handleOk(onClose)}>
                      {okText}
                    </Button>
                  </>
                )}
              </ModalFooter>
            )}
          </>
        )}
      </ModalContent>
    </NextModal>
  );
};

export default Modal;
