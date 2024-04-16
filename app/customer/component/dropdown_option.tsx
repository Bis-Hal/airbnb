
import React, { useState } from 'react'

interface DropDownProps{
    label: string,
    setValue: React.Dispatch<React.SetStateAction<string>>
}
const DropDownOption: React.FC<DropDownProps> = ({label = "", setValue}) => {
    
    return (
        <div onClick={()=>setValue(label)} className='flex p-5 w-full h-12 justify-between items-center text-primary hover:text-secondary hover:bg-zinc-800'>
            {label}
        </div>

    )
}

export default DropDownOption
