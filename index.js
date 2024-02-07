// Code your solution in this file!
function distanceFromHqInBlocks(block){
    let distance = Math.abs(block - 42);
    return distance;
}
function distanceFromHqInFeet(block){
    let distance = distanceFromHqInBlocks(block) * 264;
    return distance;
}
function distanceTravelledInFeet(start, destination){
    let distance = Math.abs(start - destination) * 264;
    return distance;
}
function calculatesFarePrice(start, destination){
    let distance = distanceTravelledInFeet(start, destination);
    let fare
    if (distance > 2500){
        fare = 'cannot travel that far';
    }else if (distance > 2000){
        fare = 25;
    }else if(distance > 400){
        fare = 2.56;
    }else if(distance <= 400){
        fare = 0;
    }else{
        fare = undefined;
    }
    return fare;
}
