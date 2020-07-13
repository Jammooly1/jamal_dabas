import React from 'react';
import styles from "./Edu.module.css";
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Card, CardActionArea, CardContent, CardMedia, Divider} from '@material-ui/core';
import utsa from './utsa.png';
import cx from 'classnames';


// const useStyles = makeStyles({
//     root: {
//       maxWidth: 345
//     },
//   });
  

function Edu() {
    return (
        <div>
            <Card className={styles.header}>
                <Typography variant="h5" className={cx(styles.text, styles.ty)}>Education</Typography> 
                <Divider />
                <CardActionArea href="https://www.utsa.edu/">
                    <CardMedia
                    component="img"
                    alt="UTSA"
                    height="100"
                    image={utsa}
                    title="UTSA"
                    className={styles.img}
                    />
                    <CardContent>
                        <div className={styles.desc}>
                        <Typography component="h4" className={styles.date}>
                            August 2017 - May 2020
                        </Typography>
                        <Typography gutterBottom component="h4" className={styles.subs}>
                            Bachelor's of Computer Science
                        </Typography>
                        <Typography variant="body1"  component="p">
                            - Summa Cum Laude
                        </Typography>
                        </div>
                    </CardContent>
                </CardActionArea>
            </Card>
        </div>
    );
}

export default Edu;