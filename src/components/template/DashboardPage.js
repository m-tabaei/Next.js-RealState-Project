import styles from "@/template/DashboardPage.module.css";
function DashboardPage({ createdAt }) {
  return (
    <div className={styles.container}>
      <h3>WellCome</h3>
      <p>Register your ads to be seen by thousands of people</p>
      <div className={styles.createdAt}>
        <p>join us</p>
        <span>{new Date(createdAt).toLocaleDateString("fa-IR")}</span>
      </div>
    </div>
  );
}

export default DashboardPage;
