import { Box,Flex } from '@chakra-ui/react';
const Footer = () => {
    return (

        <Flex p='5' alignItems='center' justifyContent='center' bg='gray.50' borderTop='1px' borderColor='gray.100' >
            <Box    color='gray.500' >
            © 2014 By Natnael-opq  
            </Box>
            <Box ml='2'  color='blue.400' >
                <a  href='https://github.com/natnael-OQP/real-estate-site' >Source Code</a> 
            </Box>
        </Flex>
    )
}

export default Footer
