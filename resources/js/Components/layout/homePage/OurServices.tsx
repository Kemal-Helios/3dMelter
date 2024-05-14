import { MdDesignServices } from "react-icons/md";
import printer from "../../../../../public/storage/images/svgIcon/3d-printer.svg";
import printing from "../../../../../public/storage/images/svgIcon/3d-printing.svg";
import extra from "../../../../../public/storage/images/svgIcon/extra.svg";
import development from "../../../../../public/storage/images/svgIcon/research-and-development.svg";
import robotic from "../../../../../public/storage/images/svgIcon/robotic-arm.svg";
import support from "../../../../../public/storage/images/svgIcon/technological-support.svg";
import ai from "../../../../../public/storage/images/svgIcon/ai.svg";
import caduceus from "../../../../../public/storage/images/svgIcon/caduceus.svg";
import engine from "../../../../../public/storage/images/svgIcon/car-engine.svg";
import diamond from "../../../../../public/storage/images/svgIcon/diamond.svg";
import product from "../../../../../public/storage/images/svgIcon/product-development.svg";

function OurServices() {
    return (
        <>
            <div className="text-white ">
                <div className="bg-custom h-4/6 py-16">
                    <div className="container mx-auto">
                        <div className="md:w-1/2 ">
                            <h2 className="text-white text-3xl mb-4 border-b-4 w-48  border-indigo-500">
                                Our Services
                            </h2>
                            <p className="text-white text-base text-balance">
                                We always strive to fulfill our clients' visions
                                by providing unique and innovative solutions
                                that embody excellence and innovation. Discover
                                how we can assist you in achieving your goals
                                and turning your ideas into reality.
                            </p>
                        </div>
                        <div className="pt-20 ">
                            <div className="grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-2 mx-auto">
                                <div className="py-4">
                                    <img
                                        src={printing}
                                        alt="anycubic"
                                        className="md:w-20 w-12 inline-block "
                                    />
                                    <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                        3D modeling
                                    </h3>
                                </div>
                                
                                <div className="py-4">
                                        <img
                                            src={ai}
                                            alt="Robotics & Automation"
                                            className="md:w-20 w-12 inline-block "
                                        />
                                        <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                            Robotics & Automation
                                        </h3>
                                    </div>
                                <div className="py-4">
                                    <img
                                        src={diamond}
                                        alt="jewelry"
                                        className="md:w-20 w-12 inline-block"
                                    />
                                    <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                        jewelry
                                    </h3>
                                </div>
                                <div className="py-4">
                                    <img
                                        src={robotic}
                                        alt="anycubic"
                                        className="md:w-20 w-12 inline-block"
                                    />
                                    <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                        Machine Building
                                    </h3>
                                </div>
                            </div>
                            <div className="pt-5">
                                <div className="grid md:grid-cols-4 md:gap-4 grid-cols-2 gap-2 ">
                                    <div className="py-4">
                                        <img
                                            src={product}
                                            alt="anycubic"
                                            className="md:w-20 w-12 inline-block"
                                        />
                                        <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                            Technical Consulting
                                        </h3>
                                    </div>
                                    
                                    <div className="py-4">
                                        <img
                                            src={caduceus}
                                            alt="Medical"
                                            className="md:w-20 w-12 inline-block "
                                        />
                                        <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                            Medical
                                        </h3>
                                    </div>
                                    <div className="py-4">
                                    <img
                                        src={engine}
                                        alt="Engineering"
                                        className="md:w-20 w-12 inline-block"
                                    />
                                    <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                        Engineering
                                    </h3>
                                </div>
                                    <div className="py-4">
                                        <img
                                            src={extra}
                                            alt="Extra Services"
                                            className="md:w-20 w-12 inline-block "
                                        />
                                        <h3 className="pl-5 md:text-xl capitalize  inline-block">
                                            Extra Services
                                        </h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurServices;
