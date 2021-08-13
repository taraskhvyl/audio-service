import React from 'react';
import { Pause, PlayArrow, VolumeUp } from '@material-ui/icons';
import { Grid, IconButton } from '@material-ui/core';
import styles from '../styles/Player.module.scss'
import { ITrack } from '../types/tracks';
import TrackProgress from './TrackProgress';

const Player = () => {
  const track: ITrack = {
    _id: '44',
    name: "Трек 1",
    artist: "fdgdfd",
    text: "dfbcvbc rdgd",
    listens: 44,
    picture: "dfgfdgd",
    audio: "fgddfd",
    comments: [
      {
        _id: "fgfdgdf",
        username: "dfgdfg4546",
        text: "dfgdgfddf",
      },
    ],
  }
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={e => e.stopPropagation()}>{!active ? <PlayArrow /> : <Pause />}</IconButton>
      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>
      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{marginLeft: 'auto'}} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};

export default Player;