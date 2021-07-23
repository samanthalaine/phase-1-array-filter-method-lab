// Code your solution here
function findMatching(drivers, name) {
    let match = drivers.filter(driverName => driverName === name);
    return match;
}

function fuzzyMatch(drivers, name){
    return drivers.filter(driver => driver.substring(0, name.length) === name)
}