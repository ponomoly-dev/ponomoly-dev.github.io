"use client";
import TestDummyUserCard from "@/components/TestDummyUserCard";
import { dummyApiIoApi } from "@/networks";
import React, { useCallback, useEffect, useState } from "react";
import ReactPagination from "react-paginate";

const DummyListPaginationClient = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<any[]>([]);

  const pageCount = Math.ceil(total / limit) || 0;

  const handleData = useCallback(() => {
    console.log("--- pagination request ---");
    console.log({ page, limit });
    dummyApiIoApi
      .getUser({
        page: String(page),
        limit: String(limit),
      })
      .then((res) => {
        const { data, limit, page, total } = res?.data;
        if (data) {
          setData(data);
        }
        if (limit) {
          setLimit(limit);
        }
        if (page) {
          setPage(page);
        }
        if (total) {
          setTotal(total);
        }
      })
      .catch((e) => {
        console.log({ e });
      });
  }, [page, limit]);

  useEffect(() => {
    handleData();
  }, [page, limit]);

  return (
    <div>
      <ReactPagination
        pageCount={pageCount}
        initialPage={0}
        onPageChange={({ selected }) => {
          setPage(selected);
        }}
        containerClassName="isolate inline-flex -space-x-px rounded-md shadow-sm"
        previousClassName="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        previousLinkClassName="previousLinkClassName"
        pageClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        pageLinkClassName="pageLinkClassName"
        breakClassName="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-700 ring-1 ring-inset ring-gray-300 focus:outline-offset-0"
        breakLinkClassName="breakLinkClassName"
        nextClassName="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0"
        nextLinkClassName="nextLinkClassName"
        activeClassName="z-10 bg-indigo-600 text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
      />
      {data
        ? data.map((item: any) => {
            return <TestDummyUserCard key={item.id} {...item} />;
          })
        : "empty"}
    </div>
  );
};

export default DummyListPaginationClient;
