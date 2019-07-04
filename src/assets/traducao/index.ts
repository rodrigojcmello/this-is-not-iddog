import json from './e-list-bundle.json';

interface Item {
  [index: string]: string;
}

interface Index {
  [index: string]: Item;
}

const traducao: Index = json;

export default traducao;
