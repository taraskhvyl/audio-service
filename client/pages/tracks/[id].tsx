import React from 'react';
import { ITrack } from '../../types/tracks';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';

const TrackPage = () => {
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
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{fontSize: 32}}
        onClick={() => router.push('/tracks/')}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={track.picture} alt={track.name} width={200} height={200} />
        <div>
          <h1>Название трека - {track.name}</h1>
          <h1>Исполнителль - {track.artist}</h1>
          <h1>Прослушиваний - {track.listens}</h1>
        </div>
      </Grid>
      <h1>Слова к треку</h1>
      <p>{track.text}</p>
      <h1>Комментарии</h1>
      <Grid container>
        <TextField label="Ваше имя" fullWidth />
        <TextField label="Комментарий" fullWidth multiline rows={4} />
        <Button>Отправить</Button>
      </Grid>
      <div>
        {track.comments.map(comment =>
          <div>
            <div>Автор - {comment.username}</div>
            <div>Комментарий - {comment.text}</div>
          </div>
        )}
      </div>
    </MainLayout>
  );
};

export default TrackPage;