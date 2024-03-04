"use client";
import { useRouter } from "next/navigation";
import Card from "@/module/Card";
import { AiOutlineDelete } from "react-icons/ai";
import { FiEdit } from "react-icons/fi";
import styles from "@/module/DashboardCard.module.css";
import { Toaster, toast } from 'react-hot-toast';
import Loader from "@/module/Loader";
import {  useState } from "react";

function DashboardCard({ data }) {
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const editHandler =  () => {
    router.push(`/dashboard/my-profiles/${data._id}`);
    setLoading(true);

  };
  const deleteHandler = async () => {
    setLoading(true);
    const res = await fetch(`/api/profile/delete/${data._id}`, {
      method: "DELETE",
    });
    const result = await res.json();
    if (result.error) {
      toast.error(result.error);
    } else {
      toast.success(result.message);
      router.refresh()
    }
  };
  return (
    <div className={styles.container}>
      <Card data={data} />
      <div className={styles.main}>
      {loading ? (
        <Loader />
      ) :   (
        <button onClick={editHandler}>
        ویرایش
        <FiEdit />
      </button>
      )}
      
        {loading ? (
        <Loader />
      ) :   (
        <button onClick={deleteHandler}>
        حذف آگهی
        <AiOutlineDelete />
      </button>
      )}
       
      </div>
      <Toaster/>
    </div>
  );
}

export default DashboardCard;
