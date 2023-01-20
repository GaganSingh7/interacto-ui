import UnmuteIcon from '../Assets/UnmuteIcon';
import StartVideoIcon from '../Assets/StartVideoIcon';
import ParticipantsIcon from '../Assets/ParticipantsIcon';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div>
          <button className={styles.action_btn}>
            <UnmuteIcon />
            <span className={styles.action_btn_label}>Unmute</span>
          </button>
          <button className={styles.action_btn}>
            <StartVideoIcon />
            <span className={styles.action_btn_label}>Start Video</span>
          </button>
        </div>
        <div className={styles.information}>
          <button className={styles.action_btn}>
            <ParticipantsIcon />
            <span className={styles.action_btn_label}>Participants</span>
          </button>
        </div>
        <div className={styles.leave_btn_container}>
          <button className={styles.leave_btn}> End </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;