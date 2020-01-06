import {Loss, Metric, Optimizer} from "@piximi/types";

import {compile} from "./compile";
import {mobilenetv1} from "./mobilenetv1";

const path =
  "https://storage.googleapis.com/tfjs-models/tfjs/mobilenet_v1_0.25_224/model.json";

describe("compile", () => {
  it("metricsNames", async () => {
    const options = {
      learningRate: 0.01,
      lossFunction: Loss.CategoricalCrossentropy,
      metrics: [Metric.CategoricalAccuracy],
      optimizationFunction: Optimizer.SGD
    };

    const promise = mobilenetv1(10, path, 100);

    const graph = await compile(promise, options);

    expect(graph.metricsNames).toEqual(["loss", "categoricalAccuracy"]);
  });
});
