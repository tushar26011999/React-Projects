import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'

const Github = () => {
    const data = useLoaderData()
    //Normal method
    // const [data, setData] = useState([])

    // useEffect(() => {
    //     fetch("https://api.github.com/users/tushar26011999")
    //     .then(res => res.json())
    //     .then(data => {
    //         console.log(data, typeof data)
    //         setData(data)
    //     })
    // }, [])
  return (
    <div className="text-center bg-gray-600 text-3xl text-white p-4">Github followers: {data.followers}
    <img src={data.avatar_url} alt="Github Picture" width={300}/>
    </div>
  )
}

export default Github