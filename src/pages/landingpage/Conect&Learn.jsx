import { Button, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Select, useDisclosure, useMediaQuery } from "@chakra-ui/react";
// import { Select, Page, setOptions } from '@mobiscroll/react';
import { SlArrowDown } from "react-icons/sl"

import AppButton from "../../components/AppButton";
import img1 from "../../assets/svg/talking.svg"
import img2 from "../../assets/svg/computerGirl.svg"
import { topicOptions } from "../../Json-data/landingpage/topicOptions";
import { colors } from "../../themes/colors";
import SelectOpen from "./phone/SelectOpen";


export default function ConectLearn() {
    const [isSmallScreen] = useMediaQuery("(max-width: 900px)");
    const { isOpen, onOpen, onClose } = useDisclosure();

    // const inputProps = {
    //     inputStyle: 'box',
    //     labelStyle: 'stacked',
    //     placeholder: 'Please select...'
    // };

    // const renderCustomItem = (item) => {
    //     const data = item.data;
    //     return <div className="md-item-template">
    //         <img className="md-item-template-img" src={'https://img.mobiscroll.com/demos/' + data.img + '.png'} alt="Cover" />
    //         <div className="md-item-template-title">
    //             <span>{data.text}</span>
    //             <span className="md-item-template-year">{' (' + data.year + ')'}</span>
    //         </div>
    //         <div className="md-item-template-artist">{'by ' + data.artist}</div>
    //     </div>;
    // }

    return (
        <Flex paddingX={["1rem", "1rem", "0", "0"]} justifyContent="center" alignItems="center" paddingY={["3.5rem", "3.5rem", "3.75rem", "3.75rem"]} w="100%">
            <Flex justifyContent="center" alignItems="center" paddingX={["1rem", "1rem", "0", "0"]} w="100%" flexDir={["column", "column", "row", "row"]} paddingY={["3.5rem", "3.5rem", "7.5rem", "7.5rem"]} >
                <Flex marginRight="1rem" justifyContent="space-between" w={["21.875rem", "21.875rem", "34.75rem", "34.75rem"]} h={["26.75rem", "26.75rem", "34rem", "34rem"]} flexDir="column">
                    <Image
                        marginRight="4.5rem" w={["15rem", "15rem", "19.5rem", "19.5rem"]} h={["15rem", "15rem", "19.5rem", "19.5rem"]} alt="friends talking" src={img1}
                    />
                    <Heading
                        lineHeight="1.25" fontSize={["2rem", "2rem", "3rem", "3rem"]} fontWeight={[400, 400, 200, 200]} color={colors.primaryText} w={["20.875rem", "20.875rem", "28.5rem", "28.5rem"]}>Connect with people who can help
                    </Heading>
                    <AppButton
                        marginBottom={["0.75rem", "0.75rem", "0", "0"]} _hover={{ backgroundColor: colors.background, color: colors.primaryText }} border={`1px solid ${colors.linkText}`} backgroundColor="transparent" paddingX="1.5rem" paddingY="1rem" color="#000000BF" fontSize="1.25rem" fontWeight={600} w="15.394rem" h="3.5rem" text="Find people you know"
                    />
                </Flex>
                <Flex
                    justifyContent="space-between" w={["100%", "100%", "34.75rem", "34.75rem"]} h={["26.75rem", "26.75rem", "34rem", "34rem"]} flexDir="column"
                >
                    <Image
                        marginRight="4.5rem" w={["15rem", "15rem", "19.5rem", "19.5rem"]} h={["15rem", "15rem", "19.5rem", "19.5rem"]} alt="girl by computer" src={img2}
                    />
                    <Heading
                        lineHeight="1.25" fontSize={["2rem", "2rem", "3rem", "3rem"]} fontWeight={[400, 400, 200, 200]} color={colors.primaryText} w={["21.875rem", "21.875rem", "28.5rem", "28.5rem"]}>Learn the skills you need to succeed
                    </Heading>
                    {/* <Page>
                        <Select
                            data={topicOptions}
                            label="Albums"
                            inputProps={inputProps}
                            display="anchored"
                            itemHeight={64}
                            renderItem={renderCustomItem}
                        />
                    </Page> */}
                    <Menu w={["5.861rem", "21.875rem", "5.861rem", "5.861rem"]}>
                        <MenuButton fontSize={["1.25rem", "1.25rem", "0.75rem", "0.75rem"]}
                            h="3.688rem"
                            borderRadius="0.2rem" w={["5.861rem", "21.875rem", "15rem", "15rem"]} border={`0.5px solid ${colors.linkText}`} padding="0.5rem" fontWeight={600} _active={{ backgroundColor: "transparent" }} _hover={{ backgroundColor: "transparent", color: "#0a66c2", }}
                            onClick={isSmallScreen ? onOpen : null}
                            backgroundColor="transparent" as={Button} rightIcon={<SlArrowDown />}>
                            Choose a topic to learn about
                        </MenuButton>
                        {!isSmallScreen &&
                            <MenuList w="5.861rem" zIndex={2} position="relative">
                                {topicOptions.map((data, index) => {
                                    <MenuItem
                                        fontWeight={400} whiteSpace="normal" wordBreak="break-word" h="3.688rem" w="22.5rem">{`${data.title} \n ${data.desc}`}
                                    </MenuItem>
                                }

                                )}
                            </MenuList>
                        }
                    </Menu>
                    {/* <Select placeholder='Choose a topic to learn about' fontSize="1.25rem" fontWeight={400} whiteSpace="normal" wordBreak="break-word" h="3.688rem" w="22.5rem">
                        {topicOptions.map((data, index) =>
                            <option key={index} value={data.title}>
                                {`${data.title} \n ${data.desc}`}
                            </option>
                        )}
                    </Select> */}
                </Flex>
                <SelectOpen isOpen={isOpen}
                    onOpen={onOpen}
                    onClose={onClose} />
            </Flex>

        </Flex>
    )
}