"use client";

import { capitalizeText, replaceHyphens } from "@/utils/parser-utils";
import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";
import { usePathname } from "next/navigation";
import React from "react";

const AppBreadcrumbs = () => {
  const pathname = usePathname().split("/").slice(1);

  const routes = pathname.map((item) => {
    let name = "";
    if (item.includes("-")) {
      name = replaceHyphens(capitalizeText(item, "-"));
    } else if (item !== "") {
      name = item[0].toUpperCase() + item.substring(1);
    }

    return {
      path: `/${item}`,
      name: name,
    };
  });

  return (
    <Breadcrumbs>
      {routes.map((route) => (
        <BreadcrumbItem key={route.path} href={route.path}>
          {route.name}
        </BreadcrumbItem>
      ))}
    </Breadcrumbs>
  );
};

export default AppBreadcrumbs;
