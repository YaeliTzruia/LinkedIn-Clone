import { Button, Flex, Heading, Image, Menu, MenuButton, MenuItem, MenuList, Select } from "@chakra-ui/react";
// import { Select, Page, setOptions } from '@mobiscroll/react';
import { SlArrowDown } from "react-icons/sl"

import AppButton from "../../components/AppButton";
import img1 from "../../assets/svg/talking.svg"
import img2 from "../../assets/svg/computerGirl.svg"
import { topicOptions } from "../../Json-data/landingpage/topicOptions";
import { colors } from "../../themes/colors";


export default function ConectLearn() {

    const inputProps = {
        inputStyle: 'box',
        labelStyle: 'stacked',
        placeholder: 'Please select...'
    };

    const renderCustomItem = (item) => {
        const data = item.data;
        return <div className="md-item-template">
            <img className="md-item-template-img" src={'https://img.mobiscroll.com/demos/' + data.img + '.png'} alt="Cover" />
            <div className="md-item-template-title">
                <span>{data.text}</span>
                <span className="md-item-template-year">{' (' + data.year + ')'}</span>
            </div>
            <div className="md-item-template-artist">{'by ' + data.artist}</div>
        </div>;
    }

    return (
        <Flex justifyContent="center" alignItems="center" paddingY="3.75rem" w="100%">
            <Flex paddingY="7.5rem">
                <Flex marginRight="1rem" justifyContent="space-between" w="34.75rem" h="34rem" flexDir="column">
                    <Image marginRight="4.5rem" w="19.5rem" h="19.5rem" alt="friends talking" src={img1} />
                    <Heading fontSize="3rem" fontWeight={200} color={colors.primaryText} w="28.5rem">Connect with people who can help</Heading>
                    <AppButton _hover={{ backgroundColor: colors.background, color: colors.primaryText }} border={`1px solid ${colors.linkText}`} backgroundColor="transparent" paddingX="1.5rem" paddingY="1rem" color="#000000BF" fontSize="1.25rem" fontWeight={600} w="15.394rem" h="3.5rem" text="Find people you know" />
                </Flex>
                <Flex justifyContent="space-between" w="34.75rem" h="34rem" flexDir="column">
                    <Image marginRight="4.5rem" w="19.5rem" h="19.5rem" alt="girl by computer" src={img2} />
                    <Heading fontSize="3rem" fontWeight={200} color={colors.primaryText} w="28.5rem">Learn the skills you need to succeed</Heading>
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
                    <Menu w="5.861rem">
                        <MenuButton borderRadius="0.2rem" w="15rem" border={`0.5px solid ${colors.linkText}`} padding="0.5rem" fontSize="0.75rem" fontWeight={600} _active={{ backgroundColor: "transparent" }} _hover={{ backgroundColor: "transparent", color: "#0a66c2", }} backgroundColor="transparent" as={Button} rightIcon={<SlArrowDown />}>
                            Choose a topic to learn about
                        </MenuButton>
                        <MenuList w="5.861rem" zIndex={2} position="relative">
                            {topicOptions.map((data, index) =>
                                <MenuItem fontSize="1.25rem" fontWeight={400} whiteSpace="normal" wordBreak="break-word" h="3.688rem" w="22.5rem">{`${data.title} \n ${data.desc}`}</MenuItem>
                            )}
                        </MenuList>
                    </Menu>
                    {/* <Select placeholder='Choose a topic to learn about' fontSize="1.25rem" fontWeight={400} whiteSpace="normal" wordBreak="break-word" h="3.688rem" w="22.5rem">
                        {topicOptions.map((data, index) =>
                            <option key={index} value={data.title}>
                                {`${data.title} \n ${data.desc}`}
                            </option>
                        )}
                    </Select> */}
                </Flex>
            </Flex>
        </Flex>
    )
}