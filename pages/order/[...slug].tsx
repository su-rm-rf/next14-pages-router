import { useRouter } from "next/router"

export default function OrderDetail() {
  const router = useRouter()
  const { ab, slug }  = router.query
  console.log(slug)

  return (
    <>order { ab } { slug } by pages</>
  )
}