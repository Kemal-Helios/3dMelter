import Experience from "../Components/layout/Experience";
import Header from "../Components/layout/header";
import NavHead from '../Components/layout/nav/navBar';
import OurPartners from "../Components/layout/homePage/OurPartners";
import OurServices from "@/Components/layout/homePage/OurServices";
import OperationsGuide from "@/Components/layout/homePage/OperationsGuide";
import Solutions from "@/Components/layout/homePage/Solutions";
import Footer from "@/Components/layout/homePage/footer";

function Home() {


    return (
        <>
            <main className="h-full">
                <div className="relative w-full overflow-hidden">
                    <NavHead />
                    <Header />
                    <Experience />
                </div>

                <div >
                    <OurPartners  />
                </div>
                <section >
                    <OurServices />
                </section>
                <section >
                    <Solutions />
                </section>
                <section >
                    <OperationsGuide />
                </section>
                <Footer />
            </main>
        </>
    );
}

export default Home;
