"use client";
import TestDummyUserCard from "@/components/TestDummyUserCard";
import { dummyApiIoApi } from "@/networks";
import React, { useCallback, useEffect, useState } from "react";
import ReactPagination from "react-paginate";
import "./pagination.css";

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
        activeClassName="acitve"
        pageClassName="page-item"
        pageLinkClassName="page-link"
        previousClassName="page-item"
        previousLinkClassName="page-link"
        nextClassName="page-item"
        nextLinkClassName="page-link"
        containerClassName="pagination"
        breakClassName="page-item"
        breakLinkClassName="page-link"
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
