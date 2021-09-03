import { useContext } from 'react'
import { useParams } from 'react-router';
import { makeStyles, Typography, Box } from '@material-ui/core';
import EditIcon from '../components/EditButton';
import HomeButton from '../components/HomeButton';
import WordBox from '../components/WordBox'
import { QuizContext } from '../App.js';
const useStyles = makeStyles({
    test: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        padding: '2rem'
    },
    backButton: {
        position: 'absolute'
    }
});
const Tester = () => {
    const { quizzes } = useContext(QuizContext);
    const styles = useStyles();
    const { id } = useParams();
    return (
        <>
            <div className={styles.test}>
                <HomeButton/>
                <EditIcon id={id}/>
                <Typography className={styles.heading} variant='h5'>{quizzes[id].title}</Typography>
                <Box
                    display='flex'
                    flexDirection='column'
                >
                    {quizzes[id].words.map((word, i) => <WordBox key={i} word={word}/>)}
                </Box>
            </div>
        </>
    )
}

export default Tester
