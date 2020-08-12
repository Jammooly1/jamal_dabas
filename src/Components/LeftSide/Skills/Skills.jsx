import React from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { ReactComponent as JavaIcon } from './icons/java.svg';
import { ReactComponent as PythonIcon } from './icons/python.svg';
import { ReactComponent as Csharp } from './icons/csharp.svg';
import { ReactComponent as C } from './icons/c.svg';
import { ReactComponent as Cpp } from './icons/cpp.svg';
import { ReactComponent as Reactjs } from './icons/react.svg';
import { ReactComponent as Vue } from './icons/vue.svg';
import { ReactComponent as Ij } from './icons/ij.svg';
import { ReactComponent as Pc } from './icons/pycharm.svg';
import { ReactComponent as Vs } from './icons/vs.svg';
import { ReactComponent as Vsc } from './icons/vscode.svg';
import { ReactComponent as Docker } from './icons/docker.svg';
import { ReactComponent as Firebase } from './icons/firebase.svg';
import { ReactComponent as Js } from './icons/javascript.svg';
import { ReactComponent as Ubuntu } from './icons/ubuntu.svg';
import { ReactComponent as Git } from './icons/git.svg';
import { ReactComponent as Windows } from './icons/windows.svg';
import { ReactComponent as Apple } from './icons/apple.svg';
import { ReactComponent as Terminal } from './icons/terminal.svg';
import { ReactComponent as Dotnet } from './icons/dotnet.svg';
import { ReactComponent as Maven } from './icons/maven.svg';
import { ReactComponent as Flask } from './icons/flask.svg';
import { ReactComponent as Agile } from './icons/agile.svg';
import { ReactComponent as English } from './icons/english.svg';
import { ReactComponent as Arabic } from './icons/arabic.svg';
import { SvgIcon, Box, Divider } from '@material-ui/core';
import styles from './Skills.module.css'
import cx from 'classnames';

export default function Skills() {
//   const classes = useStyles();

  return (
    <div>
      <Grid container>
        <Box boxShadow={1} className={styles.header} fontWeight="bold" display="flex">
        <Typography variant="h5" className={cx(styles.text, styles.ty)}>Skills</Typography> 
        <Divider/>
        <Grid item xs={6} md={6}>
          <div>
          <Typography className={styles.subs}>Languages</Typography> 
            <Box display="flex" flexDirection="row">
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={JavaIcon} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Java</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={PythonIcon} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Python</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Csharp} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>C#</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Cpp} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>C++</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={C} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>C</Typography> 
                    </div>
                </Box>
            </Box>
            <Box display="flex" flexDirection="row">
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Js} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Javascript</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Reactjs} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>React</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Vue} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Vue</Typography> 
                    </div>
                </Box>
            </Box>
          </div>

          <div>
          <Typography className={styles.subs}>Tools</Typography> 
            <Box display="flex" flexDirection="row">
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Ij} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>IntelliJ</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Pc} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Pycharm</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Vs} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Visual Studio</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Vsc} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>VS Code</Typography> 
                    </div>
                </Box>
            </Box>
            <Box display="flex" flexDirection="row">
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Docker} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Docker</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Firebase} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Firebase</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Git} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Git</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Terminal} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Terminal</Typography> 
                    </div>
                </Box>
            </Box>
          </div>

          <div>
          <Typography className={styles.subs}>OS</Typography> 
            <Box display="flex" flexDirection="row">
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Ubuntu} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Ubuntu</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Windows} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Windows</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Apple} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>MacOS</Typography> 
                    </div>
                </Box>
            </Box>
          </div>

          <div>
          <Typography className={styles.subs}>App Dev</Typography> 
            <Box display="flex" flexDirection="row">
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Dotnet} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>.NET</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Maven} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Maven</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Flask} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Flask</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Agile} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Agile</Typography> 
                    </div>
                </Box>
            </Box>
          </div>

          <div>
          <Typography className={styles.subs}>Other</Typography> 
            <Box display="flex" flexDirection="row">
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={English} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>English</Typography> 
                    </div>
                </Box>
                <Box p={2}>
                    <div className={styles.container}>
                        <SvgIcon component={Arabic} viewBox="0 0 48 48"/>
                        <Typography className={styles.names}>Arabic</Typography> 
                    </div>
                </Box>
            </Box>
          </div>


        </Grid>
        </Box>
      </Grid>
      
    </div>
  );
}
