import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const baseStyle = 'group flex p-2 w-full justify-between hover:bg-secondary items-center ';

interface VerticalNavBarProps {
  label: string,
  icon: IconProp,
  selectedIndex: number,
  url : string,
  setSelectedIndex: React.Dispatch<React.SetStateAction<number>>;
  index: number
}

const VerticalNavBarItems: React.FC<VerticalNavBarProps> = ({ label ="" , icon  = faHome  , url = "", selectedIndex =0, setSelectedIndex, index}) => {
 
  return (
    <Link href={url} onClick={()=>setSelectedIndex(index)}>
      <div className={selectedIndex == index && label != "Log out" && label != "Register" ? baseStyle + 'border-l-4 border-secondary' : baseStyle + 'rounded-md'} >
        <div className='text-secondary group-hover:text-primary'>{label}</div>
        <FontAwesomeIcon icon={icon} className='text-secondary group-hover:text-primary' />
      </div>
    </Link>

  )
}



export default VerticalNavBarItems
