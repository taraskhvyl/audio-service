import React from 'react';
import { Container, Step, StepLabel, Stepper } from '@material-ui/core';

interface StepWrapperProps {
  activeStep: number;
}
const steps = ['Информация о треке', 'Загрузите обложку', 'Загрузка трека']

const StepWrapper: React.FC<StepWrapperProps> = ({activeStep, children}) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) =>
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        )}
      </Stepper>
    </Container>
  );
};

export default StepWrapper;