import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { IoDownloadOutline } from "react-icons/io5";
import { MdClose } from "react-icons/md";
import {motion} from "framer-motion";

const Card = ({data, referance}) => {
    const {desc, fileSize, close, tag} = data;
    return (
        <motion.div drag dragConstraints={referance} whileDrag={{scale: 1.1}} dragElastic={.1} dragTransition={{bounceStiffness:100, bounceDamping: 30}} className='relative flex-shrink-0 w-60 h-72 rounded-[45px] text-white px-8 py-10 bg-zinc-900/90 overflow-hidden'>
            <FaRegFileAlt />
            <p className='text-sm mt-5 leading-tight font-semibold'>{desc}</p>
            <div className='footer absolute bottom-0 w-full left-0'>
                <div className='flex items-center justify-between px-8 py-3 mb-3'>
                    <h5>{fileSize}</h5>
                    <span className='w-7 h-7 rounded-full bg-zinc-600 flex items-center justify-center'>
                       {close ? <MdClose/> : <IoDownloadOutline color="#000" />}
                    </span>
                </div>
                {tag.isOpen && (
                <div className={`tag w-full py-4 ${tag.tagColor} flex items-center justify-center`}>
                    <h3 className='text-sm font-semibold'>{tag.tagTitle}</h3>
                </div>)}
            </div>
        </motion.div>
    )
}

export default Card