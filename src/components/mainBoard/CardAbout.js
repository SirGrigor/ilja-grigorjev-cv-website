import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import myPhoto from "../images/myphoto.png";
import linkedin from "../images/linkedin.svg"
import contact from "../images/contact.svg"
import github from "../images/github.svg"
const useStyles = makeStyles((theme) => ({
    root: {
        maxWidth: '900px',
        display: 'flex',
        minHeight: '250px',
        zIndex: "100!important",
        backgroundColor: 'rgba(26, 93, 112, 0.8)',
        ['@media (max-width:515px)']: {
            flexDirection: 'column',
            backgroundColor: 'rgba(26, 93, 112, 0.9)'
        }
    },
    details: {
        padding: "10px",
        color: "#e0dee3",
    },
    content: {
        flex: '1 0 auto',
    },
    cover: {
        minWidth: '200px',
        zIndex: "100!important",
        '@media (max-width:515px)': {
            height: '250px'
        }
    },
    text: {
        textAlign: 'left',
        fontWeight: '300',
        fontSize: '0.4em'
    },
    sources: {
        width: "40px",
        marginLeft: "10px"
    },
    contacts: {
        paddingTop: "20px",
        textAlign: "right"
    },
    code: {
        fontSize: "1.1em",
        color: "#5fcbe4"
    }
}));

export default function ProfileCard() {
    const classes = useStyles();
    const theme = useTheme();

    return (
        <Card className={classes.root}>
            <CardMedia
                className={classes.cover}
                image={myPhoto}
            />
            <div className={classes.details}>
                <Typography className={classes.text} component="p">
                    <p> Hey! Nice to meet You.</p>
                    <p>
                        Seems You are looking for a confident programmer with strong business skills?
                    </p>
                    <p>
                    I am purposeful Full-Stack engineer
                    fascinated with Front and Backend technologies, also I have an essential experience in business and marketing.
                    </p>
                </Typography>
                <Divider style={{margin: '10px 0'}} />
                <Typography className={classes.text} component="p">
                    Do you want to know more? Please, take a look at my Git-Repository.
                </Typography>
                <Typography className={classes.contacts} >
                    <a href="https://www.linkedin.com/in/ilja-grigorjev-75771aa2/">
                        <img className={classes.sources} src={linkedin} alt="linkedin"/>
                    </a>
                    <a href="https://github.com/SirGrigor/">
                        <img className={classes.sources} src={github} alt="github"/>
                    </a>
                    <a href="mailto:grigorjev.ilja@gmail.com">
                        <img className={classes.sources} src={contact} alt="contact"/>
                    </a>
                </Typography>
            </div>
        </Card>
    );
}
