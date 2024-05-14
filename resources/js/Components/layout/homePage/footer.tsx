const googleMap = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3010.6827947936267!2d28.945143577966032!3d41.01031556006013!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14cabb63254beccf%3A0x385d112ff1db0496!2s3D%20Melter!5e0!3m2!1sen!2str!4v1715365686141!5m2!1sen!2str';
const refrans = 'no-referrer-when-downgrade';
import { Link } from '@inertiajs/react';
import logo from '../../../../../public/storage/images/full_logo.svg';
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
function Footer() {

    return (
        <>
            <footer className="footer p-10 w-full bg-neutral text-neutral-content">
                <div className="container mx-auto py-10">
                    <div className="md:grid-cols-2  w-full ">
                        <div className="">
                            <aside>
                                <iframe
                                    src={googleMap}
                                    className="md:basis-2/4 w-full h-96"
                                    loading="lazy"
                                    referrerPolicy={refrans}
                                >
                                </iframe>

                            </aside>
                        </div>
                        <div className="basis-2/4 m-auto">
                            <nav className="grid grid-flow-col gap-4 justify-center my-10">
                            <Link href={route('home')} >Home</Link>
                            <Link href={route('contact')} >Contact</Link>
                            <Link href={route('about')} >About</Link>
                            <Link href={route('product')} >Product</Link>

                            </nav>
                            <div>
                            <img src={logo} alt="logo" className='w-60 m-auto' />
                            </div>
                            <nav>
                                <div className="grid grid-flow-col gap-4 justify-center my-10">
                                    <a href='#' className="mx-8"><FaFacebookF size={'2em'} /></a>
                                    <a href='https://www.instagram.com/3d.melter/' className="mx-10"><FaInstagram size={'2em'} /></a>
                                    <a  href='https://wa.me/905510711558' className="mx-8"><FaWhatsapp size={'2em'} /></a>
                                </div>
                            </nav>
                        </div>
                    </div>
                </div>
            </footer>

            <div className="footer footer-center p-4 bg-base-300 text-base-content">
                <aside >
                    <p>Copyright © 2024 - All right reserved by 3D MELTER DIŞ TİCARET LİMİTED ŞİRKETİ.</p>
                </aside>
            </div>
        </>
    );
}

export default Footer;
