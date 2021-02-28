import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "50%",
    margin: "0 auto",
  },
  button: {
    float: "right",
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Select Language", "Enter name"];
}

function getStepContent(step, newWizard, onLangChange, onNameChange) {
  switch (step) {
    case 0:
      return (
        <StepOne language={newWizard.language} onLangChange={onLangChange} />
      );
    case 1:
      return (
        <StepTwo newWizard name={newWizard.name} onNameChange={onNameChange} />
      );
    default:
      return "Unknown step";
  }
}

export default function MultiWizard({ onAddWidget }) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [newWizard, setWizard] = React.useState({ language: "", name: "" });
  const history = useHistory();
  const steps = getSteps();

  const handleNext = () => {
    if (activeStep === steps.length - 1) {
      history.push("/");
      onAddWidget(newWizard);
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const onLangChange = (language) => {
    setWizard((newWizard) => ({ ...newWizard, language }));
  };

  const onNameChange = (name) => {
    setWizard((newWizard) => ({ ...newWizard, name }));
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps = {};
          const labelProps = {};
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      <div>
        {getStepContent(activeStep, newWizard, onLangChange, onNameChange)}
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleNext}
            className={classes.button}
            disabled={!newWizard.language}
          >
            {activeStep === steps.length - 1 ? "Finish" : "Next"}
          </Button>
        </div>
      </div>
    </div>
  );
}
