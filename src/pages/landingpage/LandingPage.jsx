import { Flex, Image, useMediaQuery } from "@chakra-ui/react";
import { sliderData } from "../../Json-data/landingpage/slideData";
import CopyRight from "../../misc/footer/CopyRight";
import FooterLanding from "../../misc/footer/FooterLanding";
import Navbar from "../../misc/Navbar";
import ConectLearn from "./Conect&Learn";
import Explore from "./Explore";
import Find from "./Find";
import Join from "./Join";
import Post from "./Post";
import Slide from "./Slide";
import Swipe from "./swiper";
import Welcome from "./Welcome";


export default function LandingPage() {
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");

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

