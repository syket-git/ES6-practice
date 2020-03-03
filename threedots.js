const ages = [23, 42, 42, 12, 42, 12, 22, 43, 56];
const ages2 = [3, 2, 4];
const ages3 = [34, 23, 17, 24, 53, 56];

const allAges = ages.concat(ages2).concat(6).concat(ages3);
const allAges2 = [...ages, ...ages2, 56,  ...ages3];
//console.log(allAges2);

const Taka = [23, 232, 52323, 523242, 2323253, 534325, 5343123];

const HighestTaka = Math.max(...Taka);
console.log(HighestTaka);