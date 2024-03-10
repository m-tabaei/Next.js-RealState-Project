"use client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import BuyResidentialsPage from "@/template/BuyResidentialsPage";

function BuyResidential({ searchParams }) {
  const router = useRouter();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = () => {
      fetch("http://localhost:3000/api/profile", {
        headers: {
          "Cache-Control": "no-store",
        },
      })
        .then((res) => res.json())
        .then((result) => {
          if (result.error) {
            console.error("Server error:", result.error);
            return;
          }

          let finalData = result.data;

          if (searchParams.category) {
            finalData = finalData.filter((item) => item.category === searchParams.category);
          }

          setData(finalData);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        })
        .finally(() => {
          setLoading(false);
        });
    };

    fetchData();
  }, [searchParams.category]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      router.refresh();
    }
  }, []);

  return (
    <div>
      {loading ? (
        <h3>در حال دریافت اطلاعات...</h3>
      ) : data.length === 0 ? (
        <h3>هیچ داده‌ای یافت نشد</h3>
      ) : (
        <BuyResidentialsPage data={data} />
      )}
    </div>
  );
}

export default BuyResidential;
