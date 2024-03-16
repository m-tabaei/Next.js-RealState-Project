import { FiCircle } from "react-icons/fi";
import { FaCity } from "react-icons/fa";
import CategoryCard from "@/module/CategoryCard";
import { categories, cities, services } from "@/constants/strings";
import styles from "@/template/HomePage.module.css";

function HomePage() {
  return (
    <div>
      <div className={styles.banner}>
        <div className={styles.desc}>
          <h1>Purchase and Rental </h1>
         
        </div>
      </div>
      <div className={styles.categories}>
        {Object.keys(categories).map((i) => (
          <CategoryCard key={i} title={categories[i]} name={i} />
        ))}
      </div>
      <div className={styles.city}>
        <h3>Locations</h3>
        <ul>
          {cities.map((i) => (
            <li key={i}>
              <FaCity />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default HomePage;
