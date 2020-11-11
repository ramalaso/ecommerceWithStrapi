import React from 'react';
import { Box, Text, Heading, Image } from 'gestalt';
import { NavLink } from 'react-router-dom';

const Navbar = () => (
    <Box
        display="flex"
        alignItems="center"
        justifyContent="around"
        height={70}
        color='midnight'
        padding={1}
        shape='roundedBottom'
    >
        <NavLink to="/signin">
            <Text size="xl" color="white">Sign in</Text>
        </NavLink>

        {/* Title and logo */}
        <NavLink to="/">
            <Box display="flex" alignItems="center">
                <Box margin={6} height={50} width={50}>
                    <Image
                        alt="Ramalaso Logo"
                        naturalHeight={1}
                        naturalWidth={1}
                        src="./icons/logo.svg"
                    />
                </Box>
                <Heading size="xs" color="orange">
                    Ramalaso Shoes
                </Heading>
            </Box>
        </NavLink>

        <NavLink to="/signup">
            <Text size="xl" color="white">Sign up</Text>
        </NavLink>
    </Box>
);

export default Navbar;