import React from 'react';
import { Timeline, TimelineItem }  from 'vertical-timeline-component-for-react';
import styles from './Experience.module.css'
import { SvgIcon, Box, Divider, Grid, Typography } from '@material-ui/core';
import cx from 'classnames';

function Experience() {
    return (
        <div>
            <Grid container className={styles.size}>
            <Box boxShadow={1} className={cx(styles.header)} fontWeight="bold" display="flex">
            <Typography variant="h5" className={cx(styles.text, styles.ty)}>Experience</Typography> 
            <Divider/>
            <div className={styles.scroll}>
                <Timeline lineColor={'#ddd'} className={styles.text}>
                    <TimelineItem
                        key="001"
                        dateText="06/2019 – 08/2019"
                        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                    }}
                    >
                        <h3 style={{ color: '#61b8ff' }}>Application Developer, Optum</h3>
                        <p>
                        • Trained in .NET Framework and .NET Core
                        </p>
                        <p>
                        • Performed code review, analysis, and documentation for existing projects
                        </p>
                        <p>
                        • Created an intranet business side web app using ASP.NET Webforms 4.5
                        </p>
                    
                    </TimelineItem>
                    <TimelineItem
                        key="002"
                        dateText="03/2017 – 05/2017"
                        dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                        bodyContainerStyle={{
                            background: '#ddd',
                            padding: '20px',
                            borderRadius: '8px',
                            boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                        }}
                    >
                        <h3 style={{ color: '#61b8ff' }}>Cyber Security Analyst, UDP Inc</h3>
                        <p>
                        • Microsoft Security Event Research
                        </p>
                        <p>
                        • Microsoft Security Analysis
                        </p>
                        <p>
                        • Microsoft Security Auditing and Log Shipping
                        </p>
                    </TimelineItem>
                    <TimelineItem
                       key="003"
                       dateText="06/2012 – 08/2014"
                       dateInnerStyle={{ background: '#61b8ff', color: '#000' }}
                       bodyContainerStyle={{
                           background: '#ddd',
                           padding: '20px',
                           borderRadius: '8px',
                           boxShadow: '0.5rem 0.5rem 2rem 0 rgba(0, 0, 0, 0.2)',
                   }}
                    >
                        <h3 style={{ color: '#61b8ff' }}>Summer Office Assistant, Dabas Cancer Institute</h3>
        
                        <p>
                        • Managed electronic medical records
                        </p>
                        <p>
                        • Performed various office duties including front desk and patient care
                        </p>
                        <p>
                        </p>
                    </TimelineItem>
                    {/* <TimelineItem
                        key="003"
                        dateComponent={(
                        <div
                            style={{
                            width:"5rem",
                            display: 'block',
                            float: 'left',
                            padding: '5px',
                            background: 'rgb(150, 150, 150)',
                            color: '#fff',
                            }}
                        >
                            11/2008 – 04/2009
                        </div>
                        )}
                    >
                        <h3>Title, Company</h3>
                        <h4>Subtitle</h4>
                        <p>
                        Est incididunt sint eu minim dolore mollit velit velit commodo ex nulla
                        exercitation. Veniam velit adipisicing anim excepteur nostrud magna
                        nostrud aliqua dolor. Sunt aute est duis ut nulla officia irure
                        reprehenderit laborum fugiat dolore in elit. Adipisicing do qui duis Lorem
                        est.
                        </p>
                    </TimelineItem> */}
                </Timeline>
            </div>
            </Box>
      </Grid>
        </div>
    );
}

export default Experience;