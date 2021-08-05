import { Box, Button, Card, Grid } from "@material-ui/core";
import { useRouter } from "next/dist/client/router";
import React from "react";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/tracks";

const Index = () => {
  const router = useRouter();
  // const tracks: ITrack[] = [{}];

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
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Index;
