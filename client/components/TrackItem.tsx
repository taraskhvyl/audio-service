import { Card, IconButton } from "@material-ui/core";
import React from "react";
import { ITrack } from "../types/tracks";
import styles from "../styles/TrackItem.module.scss";
import { Pause, PlayArrow } from "@material-ui/icons";

interface TrackItemProps {
  track: ITrack;
  active?: boolean;
}

const TrackItem: React.FC<TrackItemProps> = ({ track, active = false }) => {
  return (
    <Card className={styles.track}>
      <IconButton>{active ? <PlayArrow /> : <Pause />}</IconButton>
      <img width={70} height={70} src={track.picture} />
    </Card>
  );
};

export default TrackItem;
