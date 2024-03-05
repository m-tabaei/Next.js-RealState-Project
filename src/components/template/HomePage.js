import CategoryCard from "@/module/CategoryCard";
import { FiCircle } from "react-icons/fi";
import styles from "@/template/HomePage.module.css";

function HomePage() {
  const services = ["خرید", "فروش", "رهن", "اجاره"];
  const cities = [
    "تهران",
    "سنندج",
    "کرمانشاه",
    "اهواز",
    "مشهد",
    "اصفهان",
    "شیراز",
    "خرم آباد",
  ];
  const categories = {
    apartment: "آپارتمان",
    villa: "ویلا",
    store: "مغازه",
    office: "دفتر",
  };
  
  return (
    <div className={styles.banner}>
      <div className={styles.desc}>
        <h1>سامانه خرید و اجاره ملک</h1>
        <ul>
          {services.map((i) => (
            <li key={i}>
              <FiCircle />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className={styles.categories}>
        <CategoryCard title="خانه ویلایی" name="villa" />
        <CategoryCard title="آپارتمان" name="apartment" />
        <CategoryCard title="مغازه" name="store" />
        <CategoryCard title="دفتر" name="office" />
      </div>
    </div>
  );
}

export default HomePage;
