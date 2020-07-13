import React from 'react';
import styles from "./Contact.module.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import { Typography, Grid, Button, Box, Divider} from '@material-ui/core';

function Contact() {
    return (
        <div>
            {/* <Grid> */}
                {/* <Box boxShadow={0} className={styles.header} textAlign="center" fontWeight="bold" display="flex"> */}
                    <div className={styles.ty}>
                        <Button target="_blank" key="Email" component="a" href="mailto:dabasjamal@gmail.com" startIcon={<MailIcon/>}/>
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Button target="_blank" href="https://www.linkedin.com/in/jamaldabas/" startIcon={<LinkedInIcon/>}/>
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Button target="_blank" href="https://github.com/Jammooly1" startIcon={<GitHubIcon/>}/>
                        {/* <Divider orientation="vertical" flexItem /> */}
                        <Button target="_blank" href="https://twitter.com/Jammooly_D" startIcon={<TwitterIcon/>}/>
                    </div>
                {/* </Box> */}
            {/* </Grid> */}
        </div>
    );
}

export default Contact;