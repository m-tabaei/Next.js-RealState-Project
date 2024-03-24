import Link from "next/link";
import { CgProfile } from "react-icons/cg";
import LogoutButton from "@/module/LogoutButton";
import styles from "@/layout/DashboardSidebar.module.css";

async function DashboardSidebar({ children, email, role }) {

  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <CgProfile />
       <h3> {role === "ADMIN" ? "Admin" : null}</h3>
        <p>{email}</p>
        <span></span>
        <Link href="/dashboard">Your account</Link>
        <Link href="/dashboard/my-profiles">My Post</Link>
        <Link href="/dashboard/add">Create Post</Link>
        {role === "ADMIN" ? <Link href="/admin">Waiting</Link>:null}
        <LogoutButton/>
      </div>
      <div className={styles.main}>{children}</div>
    </div>
  );
}

export default DashboardSidebar;
