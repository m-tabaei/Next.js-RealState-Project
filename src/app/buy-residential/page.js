import BuyResidentialsPage from "@/template/BuyResidentialsPage"

async function BuyResidential() {
  const res =await fetch("http://localhost:3000/api/profile", {cash:"no-store"})
  const data = await res.json()
if (data.error) return <h3>مشکلی در سرور به وجود آمده است</h3>
 return (
    <div><BuyResidentialsPage data={data.data}/></div>
  )
}

export default BuyResidential