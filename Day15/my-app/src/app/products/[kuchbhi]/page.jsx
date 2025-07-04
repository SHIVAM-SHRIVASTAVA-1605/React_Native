"use client"
import React from 'react'
import { useParams } from 'next/navigation'

function page() {
    const params = useParams()
    console.log(params);
  return (
    <div>
        <h1> Prddoct  detail page</h1>
    </div>
  )
}

export default page