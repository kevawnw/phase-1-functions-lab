function distanceFromHqInBlocks(someValue) {
    if (someValue < 42) {
        return 42 - someValue
}   else if (someValue > 42) {
        return someValue - 42
}
    
}

function distanceFromHqInFeet(someValue) {
    distanceFromHqInBlocks(someValue);
    if (someValue < 42 ) {
        return (42 - someValue) * 264
    } else if (someValue > 42) {
        return (someValue - 42) * 264
    }
}

function distanceTravelledInFeet(start, destination) {
    if (start < destination) {
        return (destination - start) * 264
    } else if (destination < start) {
        return (start - destination) * 264
    }

    
}

function calculatesFarePrice(start, destination) {
    const travel = distanceTravelledInFeet(start, destination);
    if (travel <= 400) {
        return (travel * 0)
    }   else if (travel > 400 && travel <= 2000) {
        return (travel - 400) * 0.02
    }  else if (travel > 2000 && travel <= 2500) {
        return 25
    }  else if (travel > 2500) {
        return "cannot travel that far"
    }



}