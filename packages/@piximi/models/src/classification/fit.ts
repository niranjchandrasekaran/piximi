import {FitOptions} from "@piximi/types";
import {History, LayersModel, Tensor} from "@tensorflow/tfjs";
import {Dataset} from "@tensorflow/tfjs-data";

export const fit = async (
  compiled: LayersModel,
  data: Dataset<{xs: Tensor; ys: Tensor}>,
  validationData: Dataset<{xs: Tensor; ys: Tensor}>,
  options: FitOptions
): Promise<History> => {
  const args = {
    callbacks: {
      onEpochEnd: (epoch, logs) => {
        console.log(logs.loss);
      }
    },
    epochs: options.epochs,
    validationData: validationData
  };

  return await compiled.fitDataset(data, args);
};
