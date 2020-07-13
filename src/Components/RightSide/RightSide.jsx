import React from 'react';
import Experience from './Experience/Experience';
import { Box, Grid } from '@material-ui/core';

function RightSide(props) {
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
                    style={{ width: '42.5rem'}}
                    >
                <Experience/>
                </Box>
            </Grid>
        </div>
    );
}

export default RightSide;