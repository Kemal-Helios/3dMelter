import { useState } from "react";
import Maintenance from "../Components/Maintenance";
function Product() {
    const [mouseEnteM, setMouseEnteM] = useState(false);
    function MouseM() {
        setMouseEnteM(!mouseEnteM);
    }
    return (
        <>
             <div className="flex justify-center">
                <div className="relative" onMouseEnter={MouseM}>
                    <Maintenance />
                    <div className={` ${mouseEnteM ? "visible" : "invisible"}`}>
                        <div className="absolute top-1/2 mt-32 ml-24">
                            <div className="w-1/3 m-auto">
                                <p className="text-white text-center text-balance">We apologize, the site is still under development to improve your experience. We are working hard to complete improvements and add more features to make the site even better for you. We thank you for your patience and understanding.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Product;
