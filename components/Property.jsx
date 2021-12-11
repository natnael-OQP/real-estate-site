
import Link from 'next/link';
import Image from 'next/image';
import { Box,  Flex, Badge, Text, Avatar } from "@chakra-ui/react";
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';

const Property = ( { property:{ coverPhoto,coverVideo, price, rentFrequency, rooms, title, baths, area, agency, isVerified, externalID  } } ) => (
        <Link href={`property/${externalID}`} passHref>
            <Flex  flexWrap='wrap' w='420px' p='5' pt='0' cursor='pointer'  >
                <Box>
                    <Image src={coverPhoto?.url} width={400} height={260} alt={title}  />
                </Box>
                <Box w='full' >
                    <Flex items='center' pt='1' justify='space-between'  >
                        <Flex items='center'>
                            <Box pr='3' color='green.400'>{isVerified && <GoVerified color='green.400' />}</Box>
                            <Text fontWeight='semibold' fontSize='sm'>birr {price}{rentFrequency && `/${rentFrequency}`}</Text>
                        </Flex>
                        <Box>
                            <Avatar size='sm' src={agency?.logo?.url}></Avatar>
                        </Box>
                    </Flex>
                    <Flex alignItems='center' p='1' justifyContent='space-between' w='250px' color='blue.400'>
                        {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
                    </Flex>
                    <Text fontSize='md'>
                        {title.length > 30 ? title.substring(0, 30) + '...' : title}
                    </Text>
                </Box>
            </Flex>
        </Link>
)

export default Property
