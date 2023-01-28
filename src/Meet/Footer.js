import UnmuteIcon from '../Assets/UnmuteIcon';
import MuteIcon from '../Assets/MuteIcon';
import StartVideoIcon from '../Assets/StartVideoIcon';
import StopVideoIcon from '../Assets/StopVideoIcon';
import ParticipantsIcon from '../Assets/ParticipantsIcon';
import styles from './Footer.module.css';

const Footer = ({ onUnmute, onMute, onStopVideo, onStartVideo, isMuted, isVideoPaused, myVideoStream }) => {
  
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div>
          <button 
            className={styles.action_btn}
            onClick={isMuted ? onUnmute : onMute}
          >
            {
              isMuted && (
                <>
                  <UnmuteIcon />
                  <span className={styles.action_btn_label}>Unmute</span>
                </>
              )
            }
            {
              !isMuted && (
                <>
                  <MuteIcon />
                  <span className={styles.action_btn_label}>Mute</span>
                </>
              )
            }
          </button>
          <button 
            className={styles.action_btn}
            onClick={isVideoPaused ? onStartVideo : onStopVideo}
          >
            {
              isVideoPaused && (
                <>
                  <StartVideoIcon />
                  <span className={styles.action_btn_label}>Start Video</span>
                </>
              )
            }
            {
              !isVideoPaused && (
                <>
                  <StopVideoIcon />
                  <span className={styles.action_btn_label}>Stop Video</span>
                </>
              )
            }
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