import { Link } from 'react-router-dom'
import { IconButton, makeStyles } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
const useStyles = makeStyles({
    editButton: {
        position: 'absolute',
        right: 0,
        top: 0
    }
})
const EditButton = ({id}) => {
    const styles = useStyles();
    return (
        <IconButton className={styles.editButton} aria-label='go back' component={Link} to={`/editor/${id}`}><EditIcon fontSize='large'/></IconButton>
    )
}

export default EditButton;
