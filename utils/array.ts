import _ from 'lodash';

export const sortByKey = (array: Array<any>, key?: string) => {
  if (array && key) {
    return array.sort((a, b) => (a[key] > b[key] ? 1 : b[key] > a[key] ? -1 : 0));
  } else {
    return array.sort((a, b) => (a > b ? 1 : b > a ? -1 : 0));
  }
};

export const removeDuplicates = (array: Array<any>) => {
  return array.filter((v, i) => array.indexOf(v) == i);
};

export const searchArray = (array: any[], key: string, value: any) => {
  if (array && key) {
    return array.filter(item => item[key] === (value !== null ? value : item[key]));
  } else {
    return [];
  }
};

export const shuffle = (array: any[]) => {
  var currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
  }

  return array;
};

export function moveToFront(list: any[], equalTo: any, path: string) {
  return list.sort(function (x, y) {
    return _.get(x, path) == equalTo ? -1 : _.get(y, path) == equalTo ? 1 : 0;
  });
}

export function isIterable(obj: any) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}
