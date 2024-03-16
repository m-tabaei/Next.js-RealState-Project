import styles from "@/layout/Footer.module.css";

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.desc}>
        <h3>Purchase and Rental </h3>
        <p>
       Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit distinctio exercitationem, nemo accusantium minus repellendus vitae quis error quae labore perferendis odio accusamus, natus harum vero sint. Quisquam, aliquam quo.
        </p>
      </div>
      <div>
        <ul>
          <li>Managers</li>
          <li>Gallery</li>
          <li>Contact Us</li>
  
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
