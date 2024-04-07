import React, { useEffect, useState } from "react"
import { Button } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"

export default function TodoList () {
  const router = useRouter()

  const [ data, setData ] = useState([])
  const [ isLoading, setLoading ] = useState(true)

  useEffect(() => {
    fetch('http://localhost:8400/todo/list')
      .then(res => res.json())
      .then(data => {
        setData(data.data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <p>Loading...</p>
  if (!data.length) return <p>No profile data</p>
  
  return (
    <>
      <ul>
        {
          data.map((todo: any) => 
            <li key={todo.id}>
              <Link href={ `/todo/${ todo.id }` }>{ todo.content }</Link>
            </li>  
          )
        }
      </ul>
    </>
  )
}