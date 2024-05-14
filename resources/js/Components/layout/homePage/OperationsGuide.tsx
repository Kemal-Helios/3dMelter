import { Link } from "@inertiajs/react";
import parameters from "../../../../../public/storage/images/svgIcon/NEWsetup-parameters-01.svg";
import lists from "../../../../../public/storage/images/svgIcon/lists-01.svg";
import setupparameters from "../../../../../public/storage/images/svgIcon/setupparameters-01.svg";
import upload from "../../../../../public/storage/images/svgIcon/upload-stl.svg";
import { LuSend } from "react-icons/lu";
import ProjectsForm from "./ProjectsForm";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function OperationsGuide() {
    return (
        <>
            <div className="w-full ">
                <div className="bg-zinc-900 h-4/6 py-16">
                    <div className="container mx-auto">
                        <div className="md:w-2/1 ">
                            <h2 className="text-white text-base md:text-3xl mb-4 border-b-4 w-60  border-indigo-500">
                                Operations Guide
                            </h2>
                            <p className="text-white text-base text-balance">
                                How to order and implement at 3D Melter
                            </p>
                        </div>
                        <div className="grid md:grid-cols-4 grid-cols-2 gap-4 py-10 text-white">
                            <div>
                                <img
                                    src={upload}
                                    alt="upload"
                                    className="md:w-28 w-20 inline-block"
                                />
                                <h5 className="md:text-xl text-sm inline-block pl-4">
                                    <span className="pr-1 text-base md:text-3xl">01</span>
                                    Send Your STL Files
                                </h5>
                                <p className="pt-5 text-balance">
                                    Multiple designs for different parts can be
                                    sent at the same time to produce a single
                                    quote. In less than a day, a detailed cost
                                    estimate will be sent to you.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={setupparameters}
                                    alt="setupparameters"
                                    className="md:w-28 w-20 inline-block"
                                />
                                <h5 className="md:text-xl text-sm inline-block pl-4">
                                    <span className="pr-1 text-base md:text-3xl">02</span>
                                    Choose the process
                                </h5>
                                <p className="pt-5 text-balance">
                                    To get started, please select the
                                    manufacturing process you need. Then, you
                                    can choose the appropriate material from a
                                    wide selection, whether resin or plastic, as
                                    well as a variety of finishes and
                                    certifications.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={lists}
                                    alt="lists"
                                    className="md:w-28 w-20 inline-block"
                                />
                                <h5 className="md:text-xl text-sm inline-block pl-4 ">
                                    <span className="pr-1 text-base md:text-3xl">03</span>
                                    Your order online
                                </h5>
                                <p className="pt-5 text-balance">
                                    Once you select the required options, all
                                    you have to do is confirm the order and
                                    choose the payment method that suits you
                                    best. Your design will be analyzed by
                                    engineers.
                                </p>
                            </div>
                            <div>
                                <img
                                    src={parameters}
                                    alt="parameters"
                                    className="md:w-28 w-20 inline-block"
                                />
                                <h5 className="md:text-xl text-sm inline-block pl-4">
                                    <span className="pr-1 text-base md:text-3xl">04</span>
                                    Receive your parts
                                </h5>
                                <p className="pt-5 text-balance">
                                    Within a short amount of time, you will
                                    receive the parts you ordered directly to
                                    your shipping address. You can track your
                                    package at any time.
                                </p>
                            </div>
                        </div>
                        <div className="mx-auto text-center bg-gray-900 rounded-md ">
                            <Popup className="ss"
                                trigger={
                                    <button className="button mx-auto font-bold text-black py-3 border rounded-full bg-green-600 border-0 w-60 text-center">
                                        {" "}
                                        Check Cost{" "}
                                    </button>
                                }
                                modal
                            >
                                <ProjectsForm />
                            </Popup>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OperationsGuide;
