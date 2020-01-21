// n: the integer number of sticks to buy
// k: the integer number of box sizes the store carries
// b: the integer number of boxes to buy

function boxesPerTrip(n, k, b){

  //sticks to buy => n
  //boxes of Spaghetti to buy => b
  //the store has limited numbers of boxes => k

  // b => 3 boxes
  // n => 12  [x,y,z] where X+Y+Z == 12
  // number of boxes = [1, 2,..., k-1, k]

  return []
}

function bonetrousle(n, k, b) {
    if (b.isGreaterThan(k)) {
        return [-1];
    }

    // Check for special case to solve instantly
    let sumOfMins = b.times(b.plus(1)).dividedBy(2);
    if (sumOfMins.isEqualTo(n)) {
        console.log('special');
        const solution = [];
        for (let i = 1; i <= b; i++) {
            solution.push(i);
        }
        return solution;
    }

    const solution = findCombinationBig(n, b, [], 0, k);
    return solution === null ? [-1] : solution;
}