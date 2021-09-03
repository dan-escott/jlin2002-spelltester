import { useContext, useState } from 'react'
import { makeStyles, InputBase, TextField, Button, Typography } from '@material-ui/core'
import { useParams, Redirect } from 'react-router-dom';
import HomeButton from '../components/HomeButton';
import { QuizContext } from '../App.js'
const useStyles = makeStyles({
    editor: {
        height: '100%',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    heading: {
        margin: '2rem'
    },
    submitButton: {
        margin: '2rem'
    },
    backButton: {
        position: 'absolute',
    }
})
const Editor = () => {
    const { quizzes, setQuizzes } = useContext(QuizContext);
    const [ id, setID ] = useState(useParams().id);
    if (id === undefined) {
        // generate unique ID for new test
        setID(
            Object.keys(quizzes).length > 0?
            Object.keys(quizzes).reduce((acc, curr) => {
                return parseInt(curr) > parseInt(acc)? parseInt(curr): parseInt(acc);
            }, 0) + 1:
            0
        );
    }
    const [ rawText, setRawText ] = useState(id in quizzes? quizzes[id].words.join('\n'): '');
    const [ title, setTitle ] = useState(id in quizzes? quizzes[id].title: 'Untitled');
    const [ formCompleted, setFormCompleted ] = useState(false);
    const styles = useStyles();
    const handleSubmit = (e) => {
        e.preventDefault();
        const words = rawText.split('\n').filter((word) => word !== '').map((word) => word.replaceAll(/^\s*|\s*$/g, ''));
        setQuizzes((prevQuizzes) => {
            return {
                ...prevQuizzes,
                [id]: {
                    words,
                    title
                }
            }
        })
        setFormCompleted(true);
    }
    const updateRawText = (e) => {
        setRawText(e.target.value.replace(/^\s*/, '').replace(/\n\s*/g, '\n'));
    }
    const updateTitle = (e) => {
        setTitle(e.target.value)
    }
    return (
        <>
            <HomeButton/>
            <form className={styles.editor} onSubmit={handleSubmit}>
                {formCompleted && <Redirect to={`/test/${id}`}/>}
                {id in Object.keys(quizzes) || <Redirect to='/editor'/>}
                <InputBase
                    aria-label='heading'
                    placeholder='Enter Title'
                    onFocus={(e) => {e.target.placeholder=''}}
                    onBlur={(e) => e.target.placeholder = 'Enter Title'}
                    onChange = {updateTitle}
                    value={title}
                    className={styles.heading}
                    inputProps={{style: {fontSize: '1.5rem', width: 'fit-content', textAlign: 'center'}, maxLength: 25}}
                    required
                />
                <TextField
                    variant='outlined'
                    label='Spelling List'
                    multiline={true}
                    minRows={5}
                    maxRows={28}
                    value={rawText}
                    onChange={updateRawText}
                />
                <Button
                    variant='contained'
                    color='primary'
                    className={styles.submitButton}
                    type='submit'
                >
                    <Typography variant='button'>Save</Typography>
                </Button> 
            </form>
        </>
    )
}

export default Editor
