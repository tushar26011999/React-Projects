import React, { useRef } from 'react'
import Card from './Card'

const Foreground = () => {
    const ref = useRef(null)
    const data = [
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.", close: true, fileSize: "0.8mb", 
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600"}
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.", close: true, fileSize: "0.8mb", 
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-blue-600"}
        },
        {
            desc: "Lorem ipsum, dolor sit amet consectetur adipisicing.", close: true, fileSize: "0.8mb", 
            tag: { isOpen: true, tagTitle: "Download Now", tagColor: "bg-green-600"}
        }
    ]
    return (
        <div ref={ref} className='fixed z-[3] top-0 left-0 w-full h-full gap-10 flex flex-wrap p-5'>
            {data.map((item, index) => (
                <Card data={item} referance={ref}/>
            ))}
        </div>
    )
}

export default Foreground