import TextField from "@material-ui/core/TextField";
import * as React from "react";
import {useDispatch, useSelector} from "react-redux";

import {ClassifierState} from "@piximi/types";
import {updateLearningRate} from "@piximi/store";

type LearningRateProps = {};

export const LearningRate = ({}: LearningRateProps) => {
  const dispatch = useDispatch();

  const onChange = React.useCallback(
    (event: React.ChangeEvent<{value: string}>) => {
      const action = updateLearningRate({
        learningRate: parseFloat(event.target.value)
      });

      dispatch(action);
    },
    [dispatch]
  );

  const learningRate = useSelector(
    ({classifier}: {classifier: ClassifierState}): number => {
      return classifier.learningRate as number;
    }
  );

  return (
    <TextField
      fullWidth
      id="learning-rate"
      label="Learning rate"
      onChange={onChange}
      value={learningRate}
    />
  );
};
