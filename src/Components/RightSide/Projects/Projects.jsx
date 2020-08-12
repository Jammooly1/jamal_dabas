import React from 'react';
import Carousel from 'react-material-ui-carousel'
import {Paper, Button} from '@material-ui/core'
import { SvgIcon, Box, Divider, Grid, Typography } from '@material-ui/core';
import cx from 'classnames';
import styles from './Projects.module.css'
 
function Projects()
{
    let flag = false;
    var items = [
        {
            name: "Covid19 Tracker",
            description: "Shows the number of confirmed cases, recoveries, and deaths globally and per country. Technologies used involve ReactJS as the frontend, Firebase as the backend, and involves using an API.",
            tech: "Firebase, ReactJS, MaterialUI",
            link: "https://covid-19-tracker-6f718.web.app/"
        },
        {
            name: "Refinder",
            description: "An online market place for people and organizations to buy and trade building materials.",
            tech: "Firebase, ReactJS, MaterialUI",
            link: "https://refinder.app/"
        },
        {
            name: "Sneaker Bot",
            description: "A browser automation bot that is able to go to a website I specify and fully select and buy a specific product.",
            tech: "C#, Selenium",
            link: "https://github.com/Jammooly1/SneakerBot"
        },
        {
            name: "Environment Manager Web App",
            description: "A business side web app with admin controls that displays current WellMed intranet websites information and details. Data is dynamically loaded from APIs and other data sources and it can be modified manually.",
            tech: ".NET, C#, HTML/CSS, Javascript",
            link: "https://www.linkedin.com/in/jdabas/"
        },
        {
            name: "Memory Vision",
            description: "C memory generator: Visual educational tool that displays how the C programming language works in memory.",
            tech: "Java, JavaFX",
            link: "https://www.linkedin.com/in/jdabas/"
        }
    ]
 
    return (
        <Grid container className={styles.size}>
        <Box boxShadow={1} className={cx(styles.header)} fontWeight="bold" display="flex">
        <Typography variant="h5" className={cx(styles.text, styles.ty)}>Projects</Typography> 
        <Divider/>
            <Carousel>
                {
                    items.map( (item, i) => <Item key={i} item={item} /> )
                }
            </Carousel>
        </Box>
        </Grid>
    )
}
 
function Item(props)
{
    return (
        
            <Box className={styles.paper}>
                
                    <Typography variant="h4" className={cx(styles.text, styles.ty)}>{props.item.name}</Typography>
                    <Typography variant="h6" className={cx(styles.text, styles.ty)}>Technologies involved: {props.item.tech}</Typography>
                    <br/>
                    <Typography variant="p" className={cx(styles.text, styles.ty)}>{props.item.description}</Typography>
                    <br/>
                    <Button className={styles.button} target="_blank" href={props.item.link} variant="contained" color="primary">
                        Check it out
                    </Button>
            </Box>
        
    )
}

export default Projects;