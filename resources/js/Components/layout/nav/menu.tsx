import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { useEffect, useRef } from "react";
import SubMenus from "./subMenu";
gsap.registerPlugin(useGSAP);
const SubMenu = (props: { toggle: any; }) => {
    const  menu = useRef(null);
    const  tl = useRef<GSAPTimeline>() ;
    useGSAP({ scope: menu });
    const toggle = props.toggle;


    useEffect(() => {
        tl.current = gsap.timeline({ paused: true });
        tl.current.to( ".boo", {
            visibility:'visible',
            duration: 0.5,
            x: -150,
            y: -10,
            ease: "rough",
            opacity:1,

        });
    },[])
    useEffect(() => {
        const node = tl.current as any;
        toggle ? node.play() : node.reverse();
    },[toggle])

    return (
        <div className="flex justify-end" ref={menu}>
            <div className="text-white">
                <div className="boo invisible ">
                    <SubMenus />
                </div>
            </div>
        </div>
    );

}
export default SubMenu;
