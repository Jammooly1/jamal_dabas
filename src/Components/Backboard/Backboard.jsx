import React from 'react';
import { Grid, Box} from '@material-ui/core';
import styles from './Backboard.module.css';
import Header from '../Header/Header';
import Leftside from '../LeftSide/LeftSide';
import Rightside from '../RightSide/RightSide';
function Backboard() {
    return (
        <Grid container className={styles.container}>
            <Box className={styles.box}
                borderRadius="1%"
                // justifyContent="center"
                boxShadow={3}
                bgcolor="white"
                m={0}
                p={2}
                style={{ width: '64rem', height: '80rem'}}
            >   
                <Header/>
                <Box boxShadow={0} display="flex" flexDirection="row">
                    <div>
                        <Leftside/>
                    </div>
                    <div className={styles.right}>
                        <Rightside/>
                    </div>
                    <div>
                        
                    </div>
                </Box>
            </Box>
        </Grid>
    );
}

export default Backboard;