'use client'
import { faSortDown } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useEffect, useState } from 'react'
import DropDownOption from './dropdown_option'
import "/node_modules/flag-icons/css/flag-icons.min.css";
interface DropDownProps{
    placeholder: string,
    items: string[],
    handleChange : React.Dispatch<React.SetStateAction<string>>
}
const Dropdown : React.FC<DropDownProps> = ({ placeholder = "", items = [""], handleChange }) => {
    const [value, setValue] = useState(placeholder);
    useEffect(()=>{
        handleChange(value)
    },[value])
    return (
        <div className='relative group w-full'>
            <div className='flex group-hover:cursor-pointer p-5 w-full h-12 justify-between items-center bg-secondary rounded-xl text-primary border-primary border-2 group-hover:rounded-br-none group-hover:border-b-0 group-hover:rounded-bl-none'>
                <div>
                    <div>{value}</div>
                </div>
                <FontAwesomeIcon icon={faSortDown} className='w-6 h-6 mb-3 group-hover:invisible' />
            </div>
            <div className='bg-white h-48 group-hover:cursor-pointer z-10   w-full overflow-y-scroll scroll-w absolute -bottom-48 left-0 border-2 border-primary group-hover:border-t-0 group-hover:visible invisible rounded-br-xl rounded-bl-xl'>
                {...items.map((item, index) => <DropDownOption label={item} setValue={setValue} key={index} />)}
            </div>

        </div>
    )
}

export default Dropdown
