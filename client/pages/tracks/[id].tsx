import React, { useState } from 'react';
import MainLayout from '../../layouts/MainLayout';
import { Button, Grid, TextField } from '@material-ui/core';
import { useRouter } from 'next/dist/client/router';
import { GetServerSideProps } from 'next';
import axios from 'axios';
import { useInput } from '../../hooks/useInput';
import { ITrack } from '../../types/tracks';

const TrackPage = ({serverTrack}) => {
  const [track, setTrack] = useState<ITrack>(serverTrack)
  const router = useRouter();
  const userName = useInput('')
  const text = useInput('')

  const addComment = async () => {
    try {
      const response = await axios.post('http://localhost:5000/tracks/comment', {
        username: userName.value,
        text: text.value,
        trackId: track
      })
      setTrack({...track, comments: [...track.comments, response.data]})
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <MainLayout title={"Музыкальная площадка - " + track.name + " - " + track.artist}>
      <Button
        variant={"outlined"}
        style={{fontSize: 32}}
        onClick={() => router.push('/tracks/')}
      >
        К списку
      </Button>
      <Grid container style={{margin: '20px 0'}}>
        <img src={'http://localhost:5000/' + track.picture} alt={track.name} width={200} height={200} />
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
        <TextField {...userName} label="Ваше имя" fullWidth />
        <TextField {...text} label="Комментарий" fullWidth multiline rows={4} />
        <Button onClick={addComment}>Отправить</Button>
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

export const getServerSideProps: GetServerSideProps = async ({params}) => {
  const response = await axios.get('http://localhost:5000/tracks/' + params.id)
  return {
    props: {
      serverTrack: response.data
    }
  }
}