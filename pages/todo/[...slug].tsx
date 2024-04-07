import { useRouter } from "next/router"
import { useEffect, useState } from "react"

export default function TodoDetail() {
  const router = useRouter()
  const { ab, slug }  = router.query
  // console.log(slug)

  const [ data, setData ]: any = useState(null)
  const [ isLoading, setLoading ] = useState(true)

  useEffect(() => {
    if (slug) {
      fetch(`http://localhost:8400/todo/${ slug[0] }`)
        .then(res => res.json())
        .then(data => {
          setData(data.data)
          setLoading(false)
        })
    }
  }, [slug])

  if (isLoading) return <p>Loading...</p>
  if (!data) return <p>No profile data</p>

  return (
    <>{ data.id } { ab } { slug }</>
  )
}