import React from 'react';
import Edu from './Edu/Edu';
import Skills from './Skills/Skills';
import { Box, Grid } from '@material-ui/core';


function LeftSide() {
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
                    style={{ width: '20rem'}}
                    >
                    <Edu/>
                    <br/>
                    <Skills/>
                </Box>
            </Grid>
        </div>
    );
}

export default LeftSide;