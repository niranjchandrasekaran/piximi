// import _ from 'lodash';
// import { createSelector } from 'reselect';

export const getVisibleImages = images => {
  let result = {};
  for (let key in images) {
    if (images[key].visible) result[key] = images[key];
  }
  return result;
};

// const getVisibleCategories = state => {
//   return _.map(state.categories, function(category) {
//     if (category.visible === true) {
//       return category.identifier;
//     }
//   });
// };

// const getImages = state => {
//   return state.images;
// };

// const getVisibleImages = createSelector(
//   [getVisibleCategories, getImages],
//   (category, images) => {
//     switch (category) {
//       default:
//         return images;
//     }
//   }
// );

export default getVisibleImages;
