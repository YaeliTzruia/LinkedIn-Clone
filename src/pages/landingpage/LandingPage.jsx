import { Flex } from "@chakra-ui/react";
import { sliderData } from "../../Json-data/landingpage/slideData";
import CopyRight from "../../misc/footer/CopyRight";
import FooterLanding from "../../misc/footer/FooterLanding";
import Navbar from "../../misc/OfflineNavbar";
import ConectLearn from "./Conect&Learn";
import Explore from "./Explore";
import Find from "./Find";
import Join from "./Join";
import Post from "./Post";
import Slide from "./Slide";
import Welcome from "./Welcome";


export default function LandingPage() {

    return (
        <Flex flexDir="column">
            <Navbar />
            <Welcome />
            <Explore />
            <Find />
            <Post />
            <Slide slide={sliderData} />
            <ConectLearn />
            <Join />
            <FooterLanding />
            <CopyRight />
        </Flex>
    )
}

