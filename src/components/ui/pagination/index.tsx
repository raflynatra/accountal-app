"use client";

import {
  Select,
  SelectItem,
  Pagination as NextPagination,
  Button,
} from "@nextui-org/react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";
import { PAGE_SIZE } from "./constants";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";

type PaginationProps = {
  totalPage?: number;
  page?: number;
  pageSize?: string;
};

const Pagination = ({
  totalPage = 1,
  page = 1,
  pageSize = "10",
}: PaginationProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);
  const pathname = usePathname();
  const { push } = useRouter();

  const handlePageSizeChange = (value: string) => {
    params.set("page", "1");

    if (value) {
      params.set("size", value);
    } else {
      params.delete("size");
    }

    push(`${pathname}?${params.toString()}`);
  };

  const handlePageChange = (page: number) => {
    params.set("page", String(page));
    push(`${pathname}?${params.toString()}`);
  };

  return (
    <div className="py-2 px-2 flex justify-between items-center">
      <div className="flex items-center text-default-400 text-small w-1/3 space-x-2">
        <label>Rows per page:</label>
        <Select
          aria-label="Select number of items to display"
          className="max-w-[5rem]"
          onChange={(e) => handlePageSizeChange(e.target.value)}
          size="sm"
          variant="bordered"
          selectedKeys={[pageSize]}
          defaultSelectedKeys={[pageSize]}
        >
          {PAGE_SIZE.map((row) => (
            <SelectItem key={row}>{row}</SelectItem>
          ))}
        </Select>
      </div>

      <div className="flex items-center gap-1">
        <Button
          isIconOnly
          className="min-w-9 h-9"
          variant="light"
          isDisabled={page <= 1}
          onClick={() => handlePageChange(page - 1)}
        >
          <ChevronLeftIcon className="w-3" />
        </Button>

        <NextPagination
          color="primary"
          variant="light"
          page={page}
          total={totalPage}
          onChange={handlePageChange}
        />

        <Button
          isIconOnly
          className="min-w-9 h-9"
          variant="light"
          isDisabled={page >= totalPage}
          onClick={() => handlePageChange(page + 1)}
        >
          <ChevronRightIcon className="w-3" />
        </Button>
      </div>
    </div>
  );
};

export default Pagination;
