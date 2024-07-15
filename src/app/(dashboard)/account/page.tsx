import { getAccount } from "@/app/lib/account";
import SearchInput from "@/components/ui/search-input";
import AddButton from "@/components/account/add-button";
import AccountTable from "@/components/account/table";

type AccountPageProps = {
  searchParams?: {
    searchValue?: string;
    size?: string;
    page?: number;
  };
};

const Page = async ({ searchParams }: AccountPageProps) => {
  const accounts = await getAccount({
    size: Number(searchParams?.size) || 10,
    page: Number(searchParams?.page) || 1,
    searchValue: searchParams?.searchValue,
  });

  return (
    <div className="space-y-7">
      <div className="flex justify-between">
        <SearchInput label="Search account" placeholder="Search account name" />

        <AddButton />
      </div>

      <AccountTable
        data={accounts.data}
        totalPage={accounts.totalPage}
        page={accounts.page}
        pageSize={searchParams?.size}
      />
    </div>
  );
};

export default Page;
