"use client";

import {
  Table as NextTable,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import { Key, useMemo, useCallback, Fragment } from "react";
import Pagination from "../pagination";
import moment from "moment";

type TableProps<T extends Record<string, any>> = {
  columns: any[];
  actions: {
    key: string;
    render: (record: T) => React.JSX.Element;
  }[];
  rows: T[];
  withPagination?: boolean;
  page?: number;
  totalPage?: number;
  pageSize?: string;
  label?: string;
};

const Table = <T extends Record<string, any>>({
  label = "List table of all data",
  columns,
  rows,
  actions,
  withPagination,
  page,
  totalPage,
  pageSize,
}: TableProps<T>) => {
  const bottomContent = useMemo(() => {
    if (!withPagination) return null;

    return <Pagination page={page} totalPage={totalPage} pageSize={pageSize} />;
  }, [page, totalPage, withPagination, pageSize]);

  const renderCell = useCallback(
    (item: T, columnKey: Key) => {
      const cellValue = item[columnKey as string];

      switch (columnKey) {
        case "updatedAt":
          return moment(cellValue).format("DD MMMM YYYY");

        case "actions":
          return (
            <div className="relative flex items-center gap-2">
              {actions.map((action) => (
                <Fragment key={action.key}>{action.render(item)}</Fragment>
              ))}
            </div>
          );
        default:
          return cellValue;
      }
    },
    [actions]
  );

  return (
    <NextTable
      aria-label={label}
      isHeaderSticky
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      classNames={{
        wrapper: "max-h-[34rem] p-0 shadow-none",
      }}
    >
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows} emptyContent={"No data to display."}>
        {(item) => (
          <TableRow key={item.key}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </NextTable>
  );
};

export default Table;
