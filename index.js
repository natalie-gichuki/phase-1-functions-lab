// Code your solution in this file!
function distanceFromHqInBlocks(street) {
const hqStreet = 42;
return Math.abs(street - hqStreet);
}

console.log(distanceFromHqInBlocks(43));
console.log(distanceFromHqInBlocks(50));
console.log(distanceFromHqInBlocks(34));

function distanceFromHqInFeet(street) {
const feetPerBlock = 264;
const hqStreet = 42;
return Math.abs(street - hqStreet) * feetPerBlock;
}

console.log(distanceFromHqInFeet(34));
console.log(distanceFromHqInFeet(50));
console.log(distanceFromHqInFeet(43));


function distanceTravelledInFeet(start, destination){
const feetPerBlock = 264;
return Math.abs(start - destination) * 264;
}

console.log(distanceTravelledInFeet(43, 48));
console.log(distanceTravelledInFeet(50, 60));
console.log(distanceTravelledInFeet(34, 28));

function calculatesFarePrice(start, destination) {
  const distance =  distanceTravelledInFeet (start, destination);

  if (distance <= 400){
    return 0;
  } else if (distance > 400 && distance <= 2000){
    return (distance - 400 ) * 0.02;
  } else if (distance > 2000 && distance <= 2500){
    return 25;
  } else {
    return 'cannot travel that far';
  }

   
  }

  console.log( calculatesFarePrice(43, 44));
  console.log( calculatesFarePrice(34, 32));
  console.log( calculatesFarePrice(50, 58));
  console.log( calculatesFarePrice(34, 24));