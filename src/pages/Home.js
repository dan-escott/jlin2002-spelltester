import { makeStyles, AppBar, Toolbar, Typography, IconButton } from '@material-ui/core'
import { Link } from 'react-router-dom'
import AddIcon from '@material-ui/icons/Add'
import TestCards from '../components/TestCards'
const useStyles = makeStyles({
    topBar: {
        display: 'flex',
        justifyContent: 'space-between'
    },
    iconButton: {
        margin: '0.2rem',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.3)'
        }
    },
    icon: {
        fill: 'white'
    }
});
const Home = () => {
    const styles = useStyles();
    return (
        <>
            <AppBar position="static">
                <Toolbar className={styles.topBar}  variant="dense">
                    <Typography variant='h5'> 
                        SpellTester
                    </Typography>
                    <IconButton className={styles.iconButton} component={Link} to='/editor'>
                        <AddIcon aria-label='create new test' className={styles.icon} fontSize='large'/>
                    </IconButton>
                </Toolbar>
            </AppBar>
            <TestCards/>
        </>
    )
}

export default Home
