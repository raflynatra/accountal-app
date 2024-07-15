"use client";

import Table from "../ui/table";
import EditButton from "./edit-button";
import DeleteButton from "./delete-button";
import { Account } from "@prisma/client";

type AccountTableProps = {
  data: Account[];
  totalPage?: number;
  page?: number;
  pageSize?: string;
};

const AccountTable = ({
  data,
  totalPage,
  page,
  pageSize,
}: AccountTableProps) => {
  const columns = [
    {
      key: "updatedAt",
      label: "Date",
    },
    {
      key: "code",
      label: "Account Code",
    },
    {
      key: "name",
      label: "Account Name",
    },
    {
      key: "group",
      label: "Account Group",
    },
    {
      key: "actions",
      label: "Actions",
    },
  ];

  const actions = [
    {
      key: "edit",
      render: (record: Account) => <EditButton record={record} />,
    },
    {
      key: "delete",
      render: (record: Account) => <DeleteButton accountId={record.id} />,
    },
  ];

  return (
    <Table<Account>
      label="List table of all accounts"
      columns={columns}
      rows={data}
      actions={actions}
      totalPage={totalPage}
      page={page}
      pageSize={pageSize}
      withPagination={true}
    />
  );
};

export default AccountTable;
