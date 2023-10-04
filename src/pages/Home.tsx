import { Banner } from "../components/Banner";
import { Services } from "../components/Services";
import { Foods } from "../components/Foods";
import { Newsletter } from "../components/Newsletter";
import { Equipe } from "../components/Equipe";
import { About } from "../components/About";
import { Menu } from "../components/Menu";
import { Team } from "../components/Team";

export function Home() {
    return (
        <div>
            <Banner />
            <About />
            <Foods />
            <Menu />
            <Team />
            <Services />
            <Equipe />
            <Newsletter />
        </div>
    )
}