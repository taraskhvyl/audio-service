import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/tracks";
import { useTypedSelector } from '../../hooks/useTypedSelector';
import { useActions } from '../../hooks/useActions';

const Index = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent="center">
        <Card style={{ width: 900 }}>
          <Box p={3}>
            <Grid container justifyContent="space-between">
              <h1>Список треков</h1>
              <Button onClick={() => router.push("/tracks/create")}>
                Загрузить
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
