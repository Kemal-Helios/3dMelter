
import { Link } from "@inertiajs/react";


function Header() {

    return (
        <div  className="container mx-auto ">

            <header className="absolute head inset-x-0 md:top-72 top-20 z-10">
                <div className="h-5/6 grid container mx-auto content-center">
                    <div className="flex flex-row">
                        <div className="basis-6/12 mt-20">
                            <h1 className="md:text-6xl text-xl text-white font-bold">
                                <span className="text-orange-700">3D</span> PRINTING</h1>
                            <p className=" md:text-2xl text-base text-white">embodies creativity and innovation</p>
                        </div>
                        <div className="basis-4/6"></div>
                        <div className="basis-6/12 mt-20">
                            <h2 className="text-wrap text-xs text-left mb-10 md:text-base text-white">We believe in creativity as a core value for clients seeking 3D design and printing services. We strive to achieve our clients' visions in the most accurate ways and the latest technologies.</h2>
                            <Link href={route('about')}
                               className=" rounded-md border-2  border-orange-700 px-3 py-2  text-white"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                </div>

            </header>

        </div>
    );

}
export default Header;
