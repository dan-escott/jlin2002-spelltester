import { IconButton, makeStyles } from '@material-ui/core';
import { Link } from 'react-router-dom';
import HomeIcon from '@material-ui/icons/Home';
const useStyles = makeStyles({
    homeButton: {
        position: 'absolute',
        left: 0,
        top: 0
    }
})
const HomeButton = () => {
    const styles = useStyles();
    return (
        <IconButton className={styles.homeButton} aria-label='go home' component={Link} to='/'><HomeIcon fontSize='large'/></IconButton>
    )
}

export default HomeButton 
