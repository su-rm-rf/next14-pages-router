import React from "react"
import { Button } from "antd"
import Link from "next/link"
import { useRouter } from "next/router"

export default function OrderList () {
  const router = useRouter()
  function handleClick() {
    router.push('/order/123?t=3210')
  }
  return (
    <>
      order list by pages
      <Button type="primary" onClick={ handleClick }>按钮</Button>
      <Link href="/order/123?t=321">订单123</Link>
    </>
  )
}