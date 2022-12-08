import { Flex } from "@chakra-ui/react"
import { useState } from "react"
import AppButton from "../../components/AppButton"
import AppSwipeCard from "../../components/AppSwipeCard"
import { sliderData } from "../../Json-data/landingpage/slideData"
import Swiper, { Navigation, Pagination } from 'swiper';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { MdOutlineArrowForwardIos, MdOutlineArrowBackIos } from "react-icons/md";

export default function Swipe({ slides }) {
    const [current, setCurtent] = useState(0)



    if (!Array.isArray(slides) || slides.length <= 0) {

    }

    const swiper = new Swiper('.swiper', {
        // Optional parameters
        direction: 'vertical',
        loop: true,

        // If we need pagination
        pagination: {
            el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },

        // And if we need scrollbar
        scrollbar: {
            el: '.swiper-scrollbar',
        },
    });

    return (
        <div className="swiper">
            <div className="swiper-wrapper">
                <div className="swiper-slide">Slide 1</div>
                <div className="swiper-slide">Slide 2</div>
                <div className="swiper-slide">Slide 3</div>
                ...
            </div>
            <div className="swiper-pagination"></div>

            <div className="swiper-button-prev"></div>
            <div className="swiper-button-next"></div>

            <div className="swiper-scrollbar"></div>
        </div>
    )

}