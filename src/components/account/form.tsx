"use client";

import { Button } from "@nextui-org/react";
import { Controller, useForm } from "react-hook-form";
import Input from "../ui/input";

interface AccountFormProps {
  onClose: () => void;
  onSubmit: (data: any) => Promise<void>;
  data?: { code: string; name: string; group: string };
  isLoading?: boolean;
}

const AccountForm: React.FC<AccountFormProps> = ({
  onSubmit,
  onClose,
  data,
  isLoading,
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: data || {},
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-y-3">
      <Controller
        name="code"
        control={control}
        rules={{
          required: "Account code is required",
        }}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Input account code"
            label="Account Code"
            errorMessage={errors["code"]?.message?.toString()}
          />
        )}
      />

      <Controller
        name="name"
        control={control}
        rules={{
          required: "Account name is required",
        }}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Input account name"
            label="Account Name"
            errorMessage={errors["name"]?.message?.toString()}
          />
        )}
      />

      <Controller
        name="group"
        control={control}
        rules={{
          required: "Account group is required",
        }}
        render={({ field }) => (
          <Input
            {...field}
            placeholder="Input account group"
            label="Account Group"
            errorMessage={errors["group"]?.message?.toString()}
          />
        )}
      />

      <div className="flex justify-center items-center gap-x-3 py-2">
        <Button type="button" onPress={onClose} variant="flat">
          Cancel
        </Button>
        <Button type="submit" color="primary" isLoading={isLoading}>
          Submit
        </Button>
      </div>
    </form>
  );
};

export default AccountForm;
