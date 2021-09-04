import { useState, useEffect, useRef } from 'react';
import { makeStyles, Card, IconButton, Typography } from '@material-ui/core'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
import CircularProgress from '@material-ui/core/CircularProgress';
const useStyles = makeStyles({
    wordCard: {
        margin: '0.5rem',
        width: '13rem',
        display: 'flex',
        padding: '0.5rem 0.4rem 0.5rem 1.2rem',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    circularProgress: {
        padding: '1rem'
    }
})
const WordBox = ({word}) => {
    const audio = useRef();
    const styles = useStyles();
    const [ requestComplete, setRequestComplete ] = useState(false);
    useEffect(() => {
        fetch('/.netlify/functions/audio', {
            method: 'POST', 
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({word})
        })
        .then((res) => { 
            return res.json();
        })
        .then((res) => {
            audio.current = new Audio("data:audio/wav;base64," + res.audioContent)
        })
        .then(() => {
            setRequestComplete(true);
        })
        .catch((err) => {
            console.log(err);
        })
    }, [])
    return (
        <Card className={styles.wordCard}>
            <Typography variant='h6'>{word}</Typography>
            {requestComplete ?
                <IconButton onClick={() => audio.current.play()}>
                    <VolumeUpIcon fontSize='large'/>
                </IconButton>:
                <CircularProgress fontSize='large' />
            }
        </Card>
    )
}

export default WordBox
