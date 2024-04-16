import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';


const baseStyle = 'group flex p-2 w-full justify-between hover:bg-secondary items-center ';

interface VerticalNavBarProps {
  label: string,
  icon: IconProp,
  selectedIndex: String,
  url : string,
  setSelectedIndex: React.Dispatch<React.SetStateAction<string>>;
}

const VerticalNavBarItems: React.FC<VerticalNavBarProps> = ({ label ="" , icon  = faHome  , url = "", selectedIndex ="Dashboard", setSelectedIndex}) => {
 
  return (
    <Link href={url} onClick={()=>setSelectedIndex(label)}>
      <div className={selectedIndex == label ? baseStyle + 'border-l-4 border-secondary' : baseStyle + 'rounded-md'} >
        <div className='text-secondary group-hover:text-primary'>{label}</div>
        <FontAwesomeIcon icon={icon} className='text-secondary group-hover:text-primary' />
      </div>
    </Link>

  )
}



export default VerticalNavBarItems
