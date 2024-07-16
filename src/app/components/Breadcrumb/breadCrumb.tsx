"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useMemo } from "react";

const Breadcrumb = () => {
  const pathname = usePathname();

  const breadcrumbs = useMemo(() => {
    const pathArray = pathname.split("/").filter((path) => path);

    const breadcrumbArray = pathArray.map((path, index) => {
      const href = "/" + pathArray.slice(0, index + 1).join("/");
      return {
        href,
        label: path,
        isLast: index === pathArray.length - 1,
      };
    });

    return breadcrumbArray;
  }, [pathname]);

  return (
    <nav aria-label="breadcrumb">
      <ol className="flex space-x-1">
        <li>
          <Link href="/" className="text-gray-400 ">
            Home
          </Link>
        </li>
        {breadcrumbs.map((breadcrumb, index) => (
          <li key={index} className="flex  items-center">
            <span className="mx-2">/</span>
            {breadcrumb.isLast ? (
              <span className="text-blue-700 underline">
                {breadcrumb.label}
              </span>
            ) : (
              <Link
                href={breadcrumb.href}
                className="text-gray-400 hover:underline"
              >
                {breadcrumb.label}
              </Link>
            )}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
