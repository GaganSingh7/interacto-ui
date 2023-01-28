import Footer from './Footer';
import styles from './Meet.module.css';
import { Peer } from "peerjs";
import { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import { useParams } from 'react-router-dom';

const INTERACTO_API = 'https://interacto-api.onrender.com';
const INTERACTO_PEER_HOST = 'peerjs-xsyj.onrender.com';
const socket = io(INTERACTO_API);
const peer = new Peer(undefined, {
  path: '/interacto',
  host: INTERACTO_PEER_HOST
});

const Meet = () => {
  console.log('is connected', socket.connected);
  const videoGridRef = useRef();
  const myVideoRef = useRef();
  const peers = useRef({});
  const isMuted = useRef(true);
  const [myRoomId, setMyRoomId] = useState('');
  let { roomId } = useParams();

  useEffect(() => {
    if (!roomId) {
      fetch(`${INTERACTO_API}/new-room`)
      .then(response => response.json())
      .then(({ roomId }) => {
        console.log('roomId', roomId);
        setMyRoomId(roomId);
      });
    }
  }, [roomId]);

  useEffect(() => {
    peer.on('open', (id) => {
      if (myRoomId || roomId) {
        console.log('peer open', id);
        socket.emit('join-room', myRoomId || roomId, id);
        console.log('socket id', myRoomId || roomId);
      }
    });
  }, [myRoomId, roomId]);

  const connectToNewUser = (userId, stream) => {
    console.log('connectToNewUser');
    const call = peer.call(userId, stream);
    const video = document.createElement('video');
    call.on('stream', (remoteStream) => {
      console.log('on stream')
      addVideoStream(video, remoteStream);
    });

    call.on('close', () => {
      console.log('on close')
      video.remove();
    });

    peers.current[userId] = call;
  };
  
  useEffect(() => {
    navigator?.mediaDevices?.getUserMedia({
      video: true,
      audio: true
    }).then(stream => {
      // setMyVideoStream(stream);
      addVideoStream(myVideoRef?.current, stream);
      peer.on('call', (call) => {
          call.answer(stream);
          const video = document.createElement('video');
          call.on('stream', (remoteStream) => {
            addVideoStream(video, remoteStream);
          });
      });

      socket.on('user-connected', (userId) => {
        console.log('user-connected');
        connectToNewUser(userId, stream);
      });

      socket.on('user-disconnected', userId => {
        console.log('user-disconnected')
        if (peers.current?.[userId]) {
          peers.current?.[userId].close();
        } 
      })
    });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const addVideoStream = (video, stream) => {
    video.srcObject = stream;
    video.addEventListener('loadedmetadata', () => {
      video.play();
    });
    videoGridRef?.current?.append(video);
  }

  // const setVideoTrack = (value) => {
  //   const myVideo = videoStreams.filter(({ id }) => id === myStreamId)[0].getVideoTracks()[0];
  //   myVideo.enabled = value;
  // };

  // const stopVideo = () => {
  //   setIsVideoPaused(true);
  //   setVideoTrack(false);
  // };

  // const startVideo = () => {
    // setIsVideoPaused(false);
    // setVideoTrack(true);
  // };

  const VideoGrid = () => { 
    return (
     <main id="video-grid" className={styles.video_grid} ref={videoGridRef}>
      <video 
        ref={myVideoRef}
        muted={isMuted?.current}
        className="video-item"
      >
      </video>
     </main>
    );
 };
  
  return (
    <>
      <VideoGrid /> 
      <Footer 
      />
    </>
  );
};

export default Meet;