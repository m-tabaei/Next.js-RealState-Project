import styles from "@/module/ItemList.module.css";

function ItemList({ data }) {
  return (
    <div className={styles.container}>
      {data.length ? (
        <ul>
          {data.map((amenity, index) => (
            <li key={index}>{amenity}</li>
          ))}
        </ul>
      ) : (
        <p>Can not found Data</p>
      )}
    </div>
  );
}

export default ItemList;
