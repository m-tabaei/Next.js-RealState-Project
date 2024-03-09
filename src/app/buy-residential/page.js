import BuyResidentialsPage from "@/template/BuyResidentialsPage";

async function BuyResidential({ searchParams }) {
  const res = await fetch("http://localhost:3000/api/profile", {
    cash: "no-store",
  });
  const data = await res.json();
  if (data.error) return <h3>مشکلی در سرور به وجود آمده است</h3>;

  let finalData = data.data;
  if (searchParams.category) {
    finalData = finalData.filter((i) => i.category === searchParams.category);
  }
  return (
    <div>
      <BuyResidentialsPage data={finalData} />
    </div>
  );
}

export default BuyResidential;
