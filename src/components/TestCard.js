import { useContext } from 'react'
import { makeStyles, Card, CardContent, CardActions, CardActionArea, CardHeader, IconButton } from '@material-ui/core'
import EditIcon from '@material-ui/icons/Edit'
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from 'react-router-dom';
import { QuizContext } from '../App.js'
const useStyles = makeStyles({
    card: {
        margin: '2rem 3rem',
        height: '13rem',
        width: '13rem',
        position: 'relative',
        borderRadius: '1rem',
        textDecoration: 'none'
    },
    icons: {
        display: 'flex',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: '0',
        backgroundColor: '#757de8',
        padding: '0.5rem',
        left: '50%',
        width: '100%',
        transform: 'translateX(-50%)',
    },
    iconButton: {
        color: 'white',
        '&:hover': {
            backgroundColor: 'rgba(255,255,255,0.3)'
        }
    },
    title: {
        padding: '1rem',
        textAlign: 'center',
    },
    titleWrapper: {
        height: '100%'
    }
})
const TestCard = ({title, id}) => {
    const { setQuizzes } = useContext(QuizContext);
    const handleDelete = () => {
        setQuizzes((prevQuizzes) => {
            const newQuizzes = {};
            Object.keys(prevQuizzes).forEach((key) => {
                if (parseInt(key) !== parseInt(id)) newQuizzes[key] = prevQuizzes[key];
            })
            return newQuizzes;
        });
    };
    const styles = useStyles();
    return (
        <Card className={styles.card}>
            <CardActionArea className={styles.titleWrapper} component={Link} to={`/test/${id}`}>
                <CardContent>
                    <CardHeader titleTypographyProps={{ variant: 'h5'}} title={title}/>
                </CardContent>
            </CardActionArea>
            <CardActions className={styles.icons}>
                <IconButton
                    aria-label='edit'
                    component={Link}
                    to={`/editor/${id}`}
                    className={styles.iconButton} 
                >
                    <EditIcon fontSize='large'/>
                </IconButton>
                <IconButton className={styles.iconButton} aria-label='delete' onClick={handleDelete}>
                    <DeleteIcon fontSize='large'/>
                </IconButton>
            </CardActions>
        </Card>
    )
}

export default TestCard
