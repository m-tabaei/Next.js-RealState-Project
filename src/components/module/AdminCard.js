"use client";

import { useRouter } from "next/navigation";
import { Toaster, toast } from "react-hot-toast";
import { sp } from "@/utils/replaceNumber";
import styles from "@/module/AdminCard.module.css";

function AdminCard({ data: { _id, title, description, location, price } }) {
  const router = useRouter();

  const publishHandler = async () => {
    const res = await fetch(`/api/profile/publish/${_id}`, { method: "PATCH" });
    const result = await res.json();
    if (result.message) {
      toast.success(result.message);
      router.refresh();
    }
  };

  const deleteHandler= async()=>{
    const res = await fetch(`/api/profile/publish/${_id}`, {
      method: "DELETE",
    })
    const result = await res.json();
    if (result.message) {
      toast.error(result.message);
      router.refresh();
    }
  }

  return (
    <div className={styles.container}>
      <span>موضوع آگهی :</span>
      <h3> {title} </h3>
      <p>{description}</p>
      <div className={styles.properties}>
        <span>{location}</span>
        <span>{sp(price)}</span>
      </div>
      <button onClick={publishHandler}>انتشار</button>
      <div className={styles.delete}>

      <button onClick={deleteHandler}>حذف آگهی </button>
      </div>
      <Toaster />
    </div>
  );
}

export default AdminCard;
