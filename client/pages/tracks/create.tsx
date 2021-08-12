import React, { useState } from "react";
import MainLayout from "../../layouts/MainLayout";
import StepWrapper from '../../components/StepWrapper';
import { Button, Grid, TextField } from '@material-ui/core';
import FileUpload from '../../components/FileUpload';

const Create = () => {
  const [activeStep, setActiveStep] = useState(0)
  const [picture, setPicture] = useState(null)
  const [audio, setAudio] = useState(null)

  const next = () => {
    if(activeStep !== 2) {
      setActiveStep(prev => prev + 1)
    }
  }

  const back = () => {
      setActiveStep(prev => prev - 1)
  }

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStep}>
        {activeStep === 0 &&
          <Grid container direction={"column"} style={{padding: 20}}>
              <TextField
                  style={{marginTop: 10}}
                  label={"Название трека"}
              />
              <TextField
                  style={{marginTop: 10}}
                  label={"Имя исполнителя"}
              />
              <TextField
                  style={{marginTop: 10}}
                  label={"Текст песни"}
                  multiline
                  rows={3}
              />
          </Grid>
        }
        {activeStep === 1 &&
        <FileUpload setFile={setPicture} accept="image/*">
            <Button>Загрузить обложку</Button>
        </FileUpload>
        }
        {activeStep === 2 &&
        <FileUpload setFile={setAudio} accept="audio/*">
            <Button>Загрузить аудио</Button>
        </FileUpload>
        }
      </StepWrapper>
      <Grid container justifyContent={'space-between'}>
        <Button disabled={activeStep === 0} onClick={back}>Назад</Button>
        <Button onClick={next}>Далее</Button>
      </Grid>
    </MainLayout>
  );
}

export default Create;
