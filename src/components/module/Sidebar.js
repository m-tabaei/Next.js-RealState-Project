import Link from "next/link";
import { HiFilter } from "react-icons/hi";
import styles from "@/module/Sidebar.module.css";
function Sidebar() {
  const queries = [
    { villa: "House" },
    { apartment: "Apartment" },
    { office: "Office" },
    { store: "Store" },
  ];
  
  return (
    <div className={styles.container}>
      <p>
        <HiFilter />
Categories      </p>
     <h1> <Link href="/buy-residential">All </Link></h1>
      {queries.map((query, index) => (
        <Link
        key={index}
          href={{
            pathname: "/buy-residential",
            query: { category: Object.keys(query) },
          }}
        >
          {Object.values(query)}
        </Link>
      ))}
    </div>
  );
}

export default Sidebar;
