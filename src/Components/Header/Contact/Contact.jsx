import React from 'react';
import styles from "./Contact.module.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { ReactComponent as LinkedIn } from './icons/linkedin.svg';
import { ReactComponent as Mail } from './icons/gmail.svg';
import { ReactComponent as Twitter } from './icons/twitter.svg';
import { Typography, Grid, Button, Box, Divider} from '@material-ui/core';

function Contact() {
    return (
        <div>
            {/* <Grid> */}
                {/* <Box boxShadow={0} className={styles.header} textAlign="center" fontWeight="bold" display="flex"> */}
                    <div className={styles.ty}>
                        <Button target="_blank" key="Email" component="a" href="mailto:dabasjamal@gmail.com" startIcon={<Mail/>}/>
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Button target="_blank" href="https://www.linkedin.com/in/jamaldabas/" startIcon={<LinkedIn/>}/>
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Button target="_blank" href="https://github.com/Jammooly1" startIcon={<GitHubIcon/>}/>
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Button target="_blank" href="https://twitter.com/Jammooly_D" startIcon={<Twitter/>}/>
                    </div>
                {/* </Box> */}
            {/* </Grid> */}
        </div>
    );
}

export default Contact;