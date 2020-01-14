import {ClassifierState, Loss, Metric, Optimizer} from "@piximi/types";
import {createReducer} from "@reduxjs/toolkit";

import * as actions from "../actions";

const state: ClassifierState = {
  compiling: false,
  compileOptions: {
    learningRate: 0.01,
    lossFunction: Loss.CategoricalCrossentropy,
    metrics: [Metric.CategoricalAccuracy],
    optimizationFunction: Optimizer.SGD
  },
  evaluating: false,
  fitOptions: {
    epochs: 1,
    initialEpoch: 0
  },
  fitting: false,
  generating: false,
  opening: false,
  predicting: false,
  saving: false
};

export const reducer = createReducer(state, {
  [actions.compile.toString()]: (state) => {
    return {
      ...state,
      compiling: true
    };
  },
  [actions.compiled.toString()]: (state, action) => {
    const {compiled} = action.payload;

    return {
      ...state,
      compiling: false,
      model: compiled
    };
  },
  [actions.evaluate.toString()]: (state) => {
    return {
      ...state,
      evaluating: true
    };
  },
  [actions.evaluated.toString()]: (state, action) => {
    const {evaluations} = action.payload;

    return {
      ...state,
      evaluating: false,
      evaluations: evaluations
    };
  },
  [actions.fit.toString()]: (state) => {
    return {
      ...state,
      fitting: true
    };
  },
  [actions.fitted.toString()]: (state, action) => {
    const {fitted, history} = action.payload;

    return {
      ...state,
      fitting: false,
      history: history,
      model: fitted
    };
  },
  [actions.generate.toString()]: (state) => {
    return {
      ...state,
      generating: true
    };
  },
  [actions.generated.toString()]: (state, action) => {
    const {data, validationData} = action.payload;

    return {
      ...state,
      data: data,
      generating: false,
      validationData: validationData
    };
  },
  [actions.open.toString()]: (state) => {
    return {
      ...state,
      opening: true
    };
  },
  [actions.opened.toString()]: (state, action) => {
    const {opened} = action.payload;

    return {
      ...state,
      model: opened,
      opening: false
    };
  },
  [actions.predict.toString()]: (state) => {
    return {
      ...state,
      predicting: true
    };
  },
  [actions.predicted.toString()]: (state, action) => {
    const {predictions} = action.payload;

    return {
      ...state,
      predicting: false,
      predictions: predictions
    };
  },
  [actions.save.toString()]: (state) => {
    return {
      ...state,
      saving: true
    };
  },
  [actions.saved.toString()]: (state, action) => {}
});
