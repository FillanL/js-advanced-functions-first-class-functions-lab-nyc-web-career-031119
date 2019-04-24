// Code your solution in this file!
const returnFirstTwoDrivers = function (drivers) {
  return drivers.slice(0, 2);
}

const returnLastTwoDrivers = function (drivers) {
  return drivers.slice(-2)
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]


function createFareMultiplier(num) {
  return function (fare) {
    return fare * num
  }
}

function fareDoubler(fare) {
  return fare * 2
}

function fareTripler(fare) {
  return fare * 3
}

function fetchSpecifiedDrivers(arrayOfDrivers, firstOrLast) {
  return firstOrLast(arrayOfDrivers)
  // return
}
