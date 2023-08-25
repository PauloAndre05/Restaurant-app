import { Banner } from "../components/Banner";
import { Header } from "../components/Header";
import { Services } from "../components/Services";
import { Foods } from "../components/Foods";
import { Newsletter } from "../components/Newsletter";

export function Home() {
    return (
        <div>
            <Header />
            <Banner />
            <Foods />
            <Services />
            <Newsletter />
        </div>
    )
}