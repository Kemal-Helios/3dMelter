import { useState } from 'react';
import logo from '../../../../../public/storage/logo_icon.svg';
import Menu from "./menu";
import SubMenu from "./subMenu";
import { RiMenu4Fill } from "react-icons/ri";
import { Link } from '@inertiajs/react';
const NavHead = () => {
    const [menuOpne, setMenuOpne] = useState(false);
    function handleMenuClicked() {
        setMenuOpne(!menuOpne);
    }
    return (
        <div className=" overflow-hidden ">
            <div className="absolute head inset-x-0 top-10 z-10">
                <div className="grid container mx-auto ">
                    <div className="flex flex-row">
                        <div className="basis-1/12 flex justify-start">
                            <Link href={route('home')} >
                                <img src={logo} alt="logo" className='w-10' />
                            </Link>
                        </div>
                        <div className="basis-4/6"></div>
                        <div className="basis-1/4 ">
                            <div className='flex justify-end'>
                                <button className='text-white cursor-pointer' onClick={handleMenuClicked}>
                                    <RiMenu4Fill size={'2em'} />
                                </button>
                                <Menu toggle={menuOpne} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

}
export default NavHead;
