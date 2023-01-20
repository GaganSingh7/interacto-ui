import styles from './NotFoundErrorPage.module.css';
import GhostIcon from '../Assets/GhostIcon';

const NotFoundErrorPage = () => {
  return (
    <div className={styles.not_found_error_page}>
      <h1 className={styles.heading}>
        4
        <span className={styles.ghost}><GhostIcon fill="#528cce" /></span>
        4
      </h1>
      <h2 className={styles.sub_heading}>
        Error: 404 page not found
      </h2>
      <p>
        Sorry, the page you're looking for doesn't exist
      </p>
    </div>
  );
};

export default NotFoundErrorPage;
