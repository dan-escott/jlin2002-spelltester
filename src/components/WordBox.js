import { makeStyles, Card, IconButton, Typography } from '@material-ui/core'
import VolumeUpIcon from '@material-ui/icons/VolumeUp';
const useStyles = makeStyles({
    wordCard: {
        margin: '0.5rem',
        width: '13rem',
        display: 'flex',
        padding: '0.5rem 0.4rem 0.5rem 1.2rem',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})
const WordBox = ({word}) => {
    const styles = useStyles();
    var msg = new SpeechSynthesisUtterance(word);
    msg.volume = 1; // 0 to 1
    msg.pitch = 1;
    msg.rate = 0.75; // 0.1 to 10
    msg.lang = 'en-AU';
    return (
        <Card className={styles.wordCard}>
            <Typography variant='h6'>{word}</Typography>
            <IconButton
                onClick={() => window.speechSynthesis.speak(msg)}
            >
                <VolumeUpIcon fontSize='large'/>
            </IconButton>
        </Card>
    )
}

export default WordBox
