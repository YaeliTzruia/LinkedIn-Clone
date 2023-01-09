import { FormControl, FormLabel, InputGroup, Flex, Select } from "@chakra-ui/react";

export default function AppSelectField({ mapCountry = false, states, countries, onChange, mapData, isLogin = false, variant, labelMarginTop = "0", labelColor = "rgba(0, 0, 0, 0.6)", border, label, placeholder, isInvalid, ...props }) {


    return (
        <FormControl marginTop={labelMarginTop} variant={variant} isInvalid={isInvalid}>
            {!isLogin && <FormLabel marginBottom="0.25rem" fontSize="0.875rem" color={labelColor}>{label}</FormLabel>}


            <Flex w="100%" justifyContent="center" align="center">
                {mapCountry ?
                    <Select onChange={onChange} placeholder='Select option'>
                        {countries.map((data) =>
                            <option key={data.country_name} value={data.country_name}>{data.country_name}</option>
                        )}

                    </Select>
                    :
                    <Select onChange={onChange} placeholder='Select option'>
                        {states.map((data) =>
                            <option key={data.state_name} value={data.state_name}>{data.state_name}</option>
                        )}

                    </Select>}


                {isLogin && <FormLabel marginBottom="0.25rem" fontSize="0.875rem" color={labelColor}>{label}</FormLabel>}
            </Flex>




        </FormControl >
    )
}