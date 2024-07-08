import AppBreadcrumbs from "@/components/ui/breadcrumbs";
import MainHeader from "@/components/ui/header";
import Sidebar from "@/components/ui/sidebar";
import { Card } from "@nextui-org/react";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <Sidebar />
        </div>
        <div className="flex-grow">
          <MainHeader />
          <div className="p-5 min-h-[calc(100vh-100px)] space-y-7">
            <AppBreadcrumbs />
            <Card className="p-5">{children}</Card>
          </div>
        </div>
      </div>
    </main>
  );
}
