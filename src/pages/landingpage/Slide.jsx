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
        <Flex justifyContent="center" w="100%" alignItems="center" h="52.5rem" backgroundColor="#f4f3f1" flexDir="column" >

            <Flex flexDir="column" w="100%" alignItems="center" h="31.688rem">
                <Flex justifyContent="flex-end" w="70.5rem">
                    <Flex align="center" justifyContent="flex-end" w="20rem">
                        <Flex w="7.269rem">
                            <AppButton onClick={prevSlide} backgroundColor="transparent" paddingX="1rem" h="min-content" w="7.269rem" icons={true} left={true} icon={<MdOutlineArrowBackIos />} id="swiper-back" text="Previous" />
                        </Flex>
                        <Flex w="5.584rem">
                            <AppButton onClick={nextSlide} backgroundColor="transparent" paddingX="0.5rem" marginLeft="0.25rem" w="5.584rem" right={true} icons={true} icon={<MdOutlineArrowForwardIos />} id="swiper-forward" text="Next" />
                        </Flex>
                    </Flex>
                </Flex>
                {/* <button onClick={() => swiper.slidePrev()}>Slide to the next slide</button> */}

                <Flex flexDir="column">
                    {sliderData.map((card, index) => {
                        return (

                            <Flex w="70rem" key={index + card.src} className={index === current ? "slide-active" : "slide"}>
                                {index === current && (
                                    <AppSwipeCard src={card.src} text={card.text} title={card.title} />
                                )}
                            </Flex>


                        )
                    })}
                </Flex>


            </Flex>


        </Flex>
    )

}




