import FormLabs from '../../../../../public/storage/images/FormLabs.svg';
import creality from '../../../../../public/storage/images/creality-seeklogo.svg';
import elegoo from '../../../../../public/storage/images/elegooLogo.svg';
import anycubic from '../../../../../public/storage/images/anycubic-logo.svg';
function OurPartners() {
    return (
        <>
            <div className="w-full">
                <div className="bg-zinc-900 h-20 content-center">
                    <div className='container mx-auto'>
                    <div className="grid grid-cols-4 gap-4">
                    <img src={elegoo} alt="elegoo" className='md:w-28 w-20 m-auto ' />
                        <img src={creality} alt="creality" className='md:w-32 w-22 m-auto' />
                        <img src={anycubic} alt="anycubic" className='md:w-36 w-24 m-auto' />
                        <img src={FormLabs} alt="FormLabs" className='md:w-36 w-24 m-auto' />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurPartners;
