"use client";
import TestDummyUserCard from "@/components/TestDummyUserCard";
import { dummyApiIoApi } from "@/networks";
import { throttleByRequestAnimationFrame } from "@/utils/infiniteScroll";
import React, { useCallback, useEffect, useRef, useState } from "react";

const DummyListInfScrollClient = () => {
  const [page, setPage] = useState(0);
  const [limit, setLimit] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [total, setTotal] = useState(0);
  const [data, setData] = useState<any[]>([]);

  const handleData = useCallback(async () => {
    setIsLoading(true);
    console.log("--- infinite scroll request ---");
    console.log({ page, limit });
    dummyApiIoApi
      .getUser({
        page: String(page),
        limit: String(limit),
      })
      .then((res) => {
        setIsLoading(false);
        const { data, limit, total } = res?.data;
        if (data && data.length !== 0) {
          setPage(page + 1);
          setData((prev) => [...prev, ...data]);
        }
        if (limit) {
          setLimit(limit);
        }
        if (total) {
          setTotal(total);
        }
      })
      .catch((e) => {
        setIsLoading(false);
        console.log({ e });
      });
  }, [page, limit]);

  const handleScroll = useCallback(() => {
    console.log("handleScroll");
    const { innerHeight } = window;
    const { scrollTop, offsetHeight } = document.documentElement;
    if (innerHeight + Math.ceil(scrollTop) >= offsetHeight && !isLoading) {
      handleData();
    }
  }, [handleData, isLoading]);

  useEffect(() => {
    handleScroll();
  }, [handleScroll, data]);

  useEffect(() => {
    const rAFScroll = throttleByRequestAnimationFrame(() => handleScroll());
    window.addEventListener("scroll", rAFScroll);
    return () => window.removeEventListener("scroll", rAFScroll);
  }, [throttleByRequestAnimationFrame, handleScroll]);

  return (
    <div>
      {data
        ? data.map((item: any) => {
            return <TestDummyUserCard key={item.id} {...item} />;
          })
        : "empty"}
      {`--- end with ${page + 1} page ---`}
    </div>
  );
};

export default DummyListInfScrollClient;
