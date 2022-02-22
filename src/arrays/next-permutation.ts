/*
    Challenge Details https://leetcode.com/explore/interview/card/facebook/5/array-and-strings/3012/
*/

import { lastValueFrom, map, range, Subject, takeLast, takeWhile } from "rxjs";
let deb = new Subject();
deb.subscribe({ next: console.log });
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var nextPermutation = async function (nums: Array<number>) {
  return lastValueFrom(
    range(0, nums.length - 1).pipe(
      map((arrow) => {
        return [nums[arrow], nums[arrow + 1], arrow];
      }),
      takeWhile(([a, b, i]) => a < b),
      takeLast(1),
      map(([a, b, i]) => {
        const box = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = box;
        return nums;
      })
    )
  ).catch(() => {
    return nums.reverse();
  });
};

(async () => {
  const x = await nextPermutation([1, 2, 4]);
  console.log(x);
})();
