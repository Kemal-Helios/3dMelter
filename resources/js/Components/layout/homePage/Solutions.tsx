import Blog from '../../../../../public/storage/images/OnDemand.jpg';
import Manufacturing from '../../../../../public/storage/images/Contract-Manufacturing.jpg';
import prototyping from '../../../../../public/storage/images/prototyping-service.jpg';
function Solutions() {
    return (
        <>

            <div className="container mx-auto py-10 ">
                <div className="grid md:grid-cols-3 md:gap-3">
                    <div className="basis-1/4 mx-auto">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={prototyping} alt="Rapid Prototyping" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Rapid Prototyping</h2>
                                <p className='text-pretty'>3D Printing is the shortest path between your ideas and a functional prototype in your hands. 3D printing can be a strong ally at the early stages of your product development.</p>
                            </div>
                        </div>
                    </div>

                    <div className="basis-1/4 mx-auto">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={Manufacturing} alt="Contract Manufacturing" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Contract Manufacturing</h2>
                                <p className='text-pretty'>From 1 to 10,000 units, this digital manufacturing technology can help you rethink your production by adding more freedom and flexibility without sacrificing quality.</p>
                            </div>
                        </div>
                    </div>
                    <div className="basis-1/4 mx-auto">
                        <div className="card card-compact w-96 bg-base-100 shadow-xl">
                            <figure><img src={Blog} alt="Custom manufacturing" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">Custom Manufacturing</h2>
                                <p className='text-pretty'>adapting your production to demand. With additive manufacturing you avoid minimum order quantities, ideal for limited editions or series production.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Solutions;
