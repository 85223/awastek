// 請勿更改此檔案

import { Mock } from "./mock";
import mockjs from "mockjs";

const mockData: Mock[] = ((items: number) => {
  let arr: Mock[] = [];

  for (let i = 0; i < items; i++) {
    let items = [];
    for (let j = 0; j < mockjs.Random.natural(0, 3); j++) {
      items.push(mockjs.Random.dataImage("100x50", `I: ${i}, J: ${j}`));
    }

    arr.push({
      name: mockjs.Random.name(),
      status: mockjs.Random.boolean(),
      items,
    });
  }

  return arr;
})(100);

export default mockData;
