import Link from 'next/link';
import Image from 'next/image';
import { Box,  Flex, Badge, Text, Button } from "@chakra-ui/react";

const Banner = ({ purpose,imageUrl,title1,title2,desc1,desc2,buttonText ,linkName }) => (
    <Flex bg='red.200' justifyContent='center' alignItems='center' m='10' >
        <Image src={imageUrl} width={500} height={300} alt="banner" />
        <Box p='5' >
        <Text color='gray.500' fontSize='sm' fontWeight='medium'  >{purpose}</Text>
        <Text  fontSize='xl' fontWeight='bold' >{title1} <br/>{title2} </Text>
        <Text color='gray.700' fontSize='lg' py='3' fontWeight='medium'  >{desc1} <br/> {desc2} </Text>
        <Button fontSize='lg' bg='blue.300' color='white' >
            <Link href={linkName} >
                <a>{buttonText}</a>
            </Link>
        </Button>
        </Box>
    </Flex>
)

export default Banner;
