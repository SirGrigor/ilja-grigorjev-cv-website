import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import DonutSmallIcon from '@material-ui/icons/DonutSmall';
import { Avatar } from '@material-ui/core';
import {experience} from './data/experience';
import {skills} from './data/skills';
import './style.css';
import LinkIcon from '@material-ui/icons/Link';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={2}>{children}</Box>}
        </Typography>
    );
}

var Skills = () => {
    const classes = useStyles();
    const skillsList = skills
    const namesList = skillsList.map((skill) => {
        const logoSrc = `/${skill.logo}`
        return  (
            <div>
                <Typography className={classes.text} component="div">
                    {skill.logo === undefined ?
                        <DonutSmallIcon className={classes.tabText} color="action" fontSize="large" />
                        : <Avatar variant="square" src={process.env.PUBLIC_URL + logoSrc} className={classes.small} />}
                    <p className={classes.paraText} >{skill.mainTitle}</p>
                    {skill.link != undefined ?
                        <a href={skill.link}><LinkIcon className="link-icon" color="action" fontSize="small" /></a>
                        : null}
                </Typography>
                {skill.description != undefined ?
                    <Typography className="position" component="div">
                        <p className="position-par" >{skill.description}</p>
                    </Typography>
                    : null}
            </div>
        );
    })

    return  namesList;
};

var Experience = () => {
    const classes = useStyles();
    const jobList = experience
    const namesList = jobList.map((job) => {
        const logoSrc = `/${job.logo}`
        return  (
            <div>
                <Typography className={classes.text} component="div">
                    {job.logo === undefined ?
                        <DonutSmallIcon className={classes.tabText} color="action" fontSize="large" />
                        : <Avatar variant="square" src={process.env.PUBLIC_URL + logoSrc} className={classes.small} />}
                    <p className={classes.paraText} >{job.name}
                        <span class="date-time">({job.startDate} - {job.endDate !== 0 ? job.endDate : "... "})</span>
                        {job.corpLink != undefined ?
                            <a href={job.corpLink}><LinkIcon className="link-icon" color="action" fontSize="small" /></a>
                            : null}
                    </p>
                </Typography>
                <Typography className="position" component="div">
                    <p className="position-par" >{job.position}</p>
                </Typography>
                {job.skills != undefined ?
                    <Typography className="skills" component="div">
                        <p className="skills-par" >{job.skills}</p>
                    </Typography>
                    : null}
            </div>
        );
    })

    return  namesList;
};

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        maxWidth: "700px",
        height: 550,
        margin: "auto",
        zIndex: "50!important"
    },
    tabText: {
        marginLeft: "15px"
    },
    paraText: {
        alignSelf: "center",
        marginLeft: "20px",
        fontSize: "1.1rem",
        color: "#282828"
    },
    text: {
        display: "flex",
        marginTop: "5px"
    },
    firstText: {
        display: "flex",
    }
}));

export default function FullWidthTabs() {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Skills" {...a11yProps(0)} />
                    <Tab label="experience" {...a11yProps(1)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction}>
                    <Skills />
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Experience />
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
