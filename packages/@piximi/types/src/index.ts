type Category = {
  description: string;
  identifier: string;
  index: number;
  visualization: CategoryVisualization;
};

type CategoryVisualization = {
  color: string;
  visible: boolean;
};

type Classifier = {
  categories: Category[];
  images: Image[];
  name: string;
};

type Image = {
  categoryIdentifier: string;
  checksum: string;
  data: string;
  identifier: string;
  partition: Partition;
  scores: Score[];
  visualization: ImageVisualization;
};

type ImageVisualization = {
  brightness: number;
  contrast: number;
  visible: boolean;
  visibleChannels: number[];
};

enum Partition {
  Training,
  Validation,
  Test
}

type Score = {
  categoryIdentifier: string;
  probability: number;
};

type Settings = {
  spinner: {
    spinning: boolean;
  };
};

export {
  Category,
  CategoryVisualization,
  Classifier,
  Image,
  ImageVisualization,
  Partition,
  Score,
  Settings
};
