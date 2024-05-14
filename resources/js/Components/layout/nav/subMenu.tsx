import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { HiOutlineHome } from "react-icons/hi2";
import { BsInfoLg } from "react-icons/bs";
import { GrContact } from "react-icons/gr";
import { AiOutlineProduct } from "react-icons/ai";
import { Link } from "@inertiajs/react";


gsap.registerPlugin(useGSAP);


const SubMenus = () => {
    const [mouseEnteH, setMouseEnteH] = useState(false);
    const [mouseEnteI, setMouseEnteI] = useState(false);
    const [mouseEnteC, setMouseEnteC] = useState(false);
    const [mouseEnteP, setMouseEnteP] = useState(false);
    function MouseH() {
        setMouseEnteH(!mouseEnteH);
    }
    function MouseI() {
        setMouseEnteI(!mouseEnteI);
    }
    function MouseC() {
        setMouseEnteC(!mouseEnteC);
    }
    function MouseP() {
        setMouseEnteP(!mouseEnteP);
    }
    return (
        <div className="" >
            <div className="text-white">
                <div className="absolute top-0 ">
                    <Link href={route('home')} onMouseEnter={MouseH} onMouseLeave={MouseH}>
                        <HiOutlineHome color="#537dbe" size={'1.5em'} />
                        <div className={` ${mouseEnteH ? "visible" : "invisible"}`}>
                            <span className="home">Home</span>
                        </div>
                    </Link>

                </div>
                <div className="absolute top-10 ml-3 my-4">
                    <Link href={route('about')} onMouseEnter={MouseI} onMouseLeave={MouseI}>
                        <BsInfoLg color="#ea403c" size={'1.5em'} />
                        <div className={` ${mouseEnteI ? "visible" : "invisible"}`}>
                            <span className="info">Info</span>
                        </div>
                    </Link>
                </div >

                <div className="absolute top-24 ml-12 my-4">
                    <Link href={route('contact')} onMouseEnter={MouseC} onMouseLeave={MouseC}>
                        <GrContact color="#fcb917" size={'1.5em'} />
                        <div className={` ${mouseEnteC ? "visible" : "invisible"}`}>
                            <span className="contact">Contact</span>
                        </div>
                    </Link>
                </div>

                <div className="absolute top-32 ml-28 my-4">
                    <Link href={route('product')} onMouseEnter={MouseP} onMouseLeave={MouseP}>
                        <AiOutlineProduct color="#2ea952" size={'1.5em'}/>
                        <div className={` ${mouseEnteP ? "visible" : "invisible"}`}>
                            <span className="product">Product</span>
                        </div>
                    </Link>
                </div>

            </div>
        </div>

    );

}
export default SubMenus;
