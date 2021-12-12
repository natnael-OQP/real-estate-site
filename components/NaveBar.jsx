import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';


const NaveBar = () => {
    return (
        <Flex p='2' boxShadow='sm' >
            <Box fontSize='20px' color='blue.400' fontWeight='bold'>
                <Link href='/' paddingLeft='2'>
                    <a>ኢትዮ-Real-Estate</a>
                </Link>
            </Box>
            <Spacer />
            <Menu>
                <MenuButton p='1' boxShadow='md' bg='gray.50' as={IconButton} aria-label='Options' icon={<FcMenu />} variant='outline' />
                <MenuList>
                    <Link href='/' passHref >
                        <MenuItem icon={<FcHome />} >Home</MenuItem>
                    </Link>
                    <Link href='/Search' passHref >
                        <MenuItem icon={<BsSearch />} >Search</MenuItem>
                    </Link>
                    <Link href='/Search?purpose=for-sale' passHref >
                        <MenuItem icon={<FcAbout />} >Buy Property</MenuItem>
                    </Link>
                    <Link href='/Search?purpose=for-rent' passHref >
                        <MenuItem icon={<FiKey />} >Rent Property</MenuItem>
                    </Link>
                </MenuList>
            </Menu>
        </Flex>
    )
}

export default NaveBar
