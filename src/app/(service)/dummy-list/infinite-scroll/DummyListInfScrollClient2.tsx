"use client";
import TestDummyUserCard from "@/components/TestDummyUserCard";
import { dummyApiIoApi } from "@/networks";
import React, { useCallback, useEffect, useRef, useState } from "react";

const DummyListInfScrollClient2 = () => {
  const infScrollRef = useRef<HTMLDivElement | null>(null);
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

  const infScrollCallback = useCallback(
    (entries: IntersectionObserverEntry[], observer: IntersectionObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isLoading) handleData();
      });
    },
    [handleData, isLoading]
  );

  useEffect(() => {
    if (!infScrollRef.current) return;
    const observer = new IntersectionObserver(infScrollCallback);
    observer.observe(infScrollRef.current);
    return () => observer.disconnect();
  }, [infScrollRef, infScrollCallback]);

  return (
    <div>
      {data
        ? data.map((item: any) => {
            return <TestDummyUserCard key={item.id} {...item} />;
          })
        : "empty"}
      <div
        id="observer"
        ref={infScrollRef}
        style={{ height: 30, width: "100%", background: "#CC0000" }}
      />
      {`--- end with ${page + 1} page ---`}
    </div>
  );
};

export default DummyListInfScrollClient2;
