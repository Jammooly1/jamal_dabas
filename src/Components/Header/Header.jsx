import React from 'react';
import { Typography, Grid, Box, Checkbox} from '@material-ui/core';
import styles from './Header.module.css';
import ProfilePic from './linkedin.jpeg';
import Contact from "./Contact/Contact";

function Header() {
    return (
        <div>
            <Grid>
                <Box boxShadow={1} className={styles.header} fontWeight="bold" display="flex">
                    <img src={ProfilePic} alt="profile" className={styles.img}/>
                    <div className={styles.notpic}>
                        <div className={styles.ty}>
                            <Typography variant="h2">Jamal Dabas</Typography>
                            <Typography color="textSecondary" variant="p">
                                A software engineer with a passion for beautiful full-stack development
                            </Typography>
                        </div>
                        <div className={styles.contact}>
                            <Contact/>
                        </div>
                    </div>
                </Box>
            </Grid>
        </div>
    );
}

export default Header;