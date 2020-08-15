import React from 'react';

import Projects from './Projects/Projects';
import { Box, Grid } from '@material-ui/core';

function Footer() {
    return (
        <div>
            <Grid>
                <Box borderRadius="1%"
                    // justifyContent="center"
                    // display="flex"
                    boxShadow={0}
                    bgcolor="color.paper"
                    // m={6}
                    // p={2}
                    style={{ width: '64rem'}}
                    >
                {/* <Experience/> */}
                <Projects/>
                </Box>
            </Grid>
        </div>
    );
}

export default Footer;