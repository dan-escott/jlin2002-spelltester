import { useContext } from 'react';
import { makeStyles, Box } from '@material-ui/core';
import TestCard from './TestCard'
import { QuizContext } from '../App.js'
const useStyles = makeStyles({
    cards: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
    },
})
const TestCards = () => {
    const { quizzes } = useContext(QuizContext);
    const styles = useStyles();
    return (
        <Box
            display='flex'
            flexWrap='wrap'
            justifyContent='center'
            className={styles.cards}
        >
            {Object.keys(quizzes).map((id) => <TestCard key={id} id={id} title={quizzes[id].title}/>)}
        </Box>
    )
}

export default TestCards
