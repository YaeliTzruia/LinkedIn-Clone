import { Flex } from "@chakra-ui/react";
import { useState } from "react";
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

import AppButton from "../../components/AppButton";
import AppSwipeCard from "../../components/AppSwipeCard";
import { sliderData } from "../../Json-data/landingpage/slideData";

export default function Slide({ slides }) {

    const [current, setCurtent] = useState(0)


    if (!Array.isArray(slides) || slides.length <= 0) {

    }

    const length = sliderData.length

    const prevSlide = () => {
        setCurtent(current === 0 ? length - 1 : current - 1)
        console.log(current)
        console.log("prev")
    }
    const nextSlide = () => {
        setCurtent(current === length - 1 ? 0 : current + 1)
        console.log(current)
        console.log("next")
    }


    return (
        <Flex w="100%" backgroundColor="#f4f3f1" h={["min-content", "43rem", "52.5rem", "52.5rem"]}>
            <Flex marginTop={["0.25rem", "0.25rem", "0", "0"]} justifyContent={["flex-start", "flex-start", "center", "center"]} w={["25.875rem", "25.875rem", "100%", "100%"]} alignItems="center" flexDir="column" >

                <Flex flexDir="column" w={["25.875rem", "25.875rem", "70.5rem", "70.5rem"]} alignItems="center" h="31.688rem">
                    <Flex justifyContent="flex-end" w={["21.875rem", "21.875rem", "65rem", "65rem"]}>
                        <Flex align="center" justifyContent="flex-end" w={["21.875rem", "21.875rem", "20rem", "20rem"]}  >

                            <Flex w={["21.875rem", "7.269rem", "20rem", "20rem"]}
                            // {/* //  w="7.269rem" */}
                            >
                                <AppButton fontSize="0.875rem" onClick={prevSlide} backgroundColor="transparent" paddingX="0.438rem" paddingY="1rem" h="2.5rem" w={["8.269rem", "8.269rem", "7.269rem", "7.269rem"]} icons={true} left={true} icon={<MdOutlineArrowBackIos />} id="swiper-back" text="Previous" />
                            </Flex>
                            <Flex w="5.584rem">
                                <AppButton fontSize="0.875rem" h="2.5rem" onClick={nextSlide} backgroundColor="transparent" paddingX="0.5rem" marginLeft="0.25rem" minW="5.584rem" right={true} icons={true} icon={<MdOutlineArrowForwardIos />} id="swiper-forward" text="Next" />
                            </Flex>
                        </Flex>
                    </Flex>
                    {/* <button onClick={() => swiper.slidePrev()}>Slide to the next slide</button> */}

                    <Flex flexDir="column">
                        {sliderData.map((card, index) => {
                            return (

                                <Flex marginTop={["0", "0", "0.5rem", "0.5rem"]} paddingLeft={["1rem", "1rem", "0", "0"]} w={["25.875rem", "25.875rem", "70rem", "70rem"]} key={index + card.src} className={index === current ? "slide-active" : "slide"}>
                                    {index === current && (
                                        <AppSwipeCard src={card.src} text={card.text} title={card.title} />
                                    )}
                                </Flex>


                            )
                        })}
                    </Flex>


                </Flex>


            </Flex>
        </Flex>
    )

}




