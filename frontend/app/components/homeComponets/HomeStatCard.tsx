
import React from 'react'



interface Props{
  icon:React.ReactNode
  count: number
  title:string
}

export default function HomeStatCard({icon,count, title}: Props) {
  return (
    <div className="bg-white text-center p-10 rounded-lg shadow-sm hover:scale-105 duration-200">
        {icon}
        <h3 className="text-4xl mt-2"> {count} </h3>
        <h4 className="mt-2"> {title} </h4>
    </div>
  )
}
