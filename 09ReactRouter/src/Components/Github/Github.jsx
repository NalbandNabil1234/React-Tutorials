import React, { useEffect } from 'react'
import { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
export default function Github(){
    // first way to fetch api well this is also a great way but more optimized way is to use loader useLoaderData
    // const [data ,setData] = useState([])

    // useEffect(() => {
    //     fetch('https://api.github.com/users/hiteshchoudhary')
    //     .then(response => response.json())
    //     .then(response => {
    //         setData(response)
    //         console.log(response)
    //     }, [])
    // }
    // )

    // hook for using the data fetched by the loader githubinfoloader
    const data = useLoaderData()
    
    return(
        <div className='text-center bg-gray-600 text-white text-3xl p-4'>
            <div>Name: {data.name}</div>
            <div>Github Followers: {data.followers}</div>
            <img src={data.avatar_url} />
        </div>
    )
}


// second and more optimized way --
export const GithubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/hiteshchoudhary')
    return response.json()
}