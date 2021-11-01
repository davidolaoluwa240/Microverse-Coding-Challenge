function countingValleys(steps, path) {
  // minimum steps
  let minStep = 2;
  // maximum steps
  let maxStep = Math.pow(10, 6);

  // initial value is 0 for the sea level
  let pathWalked = 0;

  // initialize the valley counter
  let valleyCounter = 0;

  // variable declared to check whether the journey of the valley has begun
  let valleyJourneyBeginned = false;

  // validate steps
  if (steps >= minStep && steps <= maxStep) {
    if (typeof path === "string") {
      // imagine that every up and down is represented as 1(up) and -1(down)
      // convert the path to array of 1 and -1
      let pathArr = path.split("").map((step) => (step === "U" ? 1 : -1));

      // loop through the path array
      pathArr.forEach((pathStep) => {
        // increment the path walked
        pathWalked += pathStep;

        // check whether the path walked is less than zero and if valley journed beggined is false
        // if true then set the valley journey beggined back to true
        if (pathWalked < 0 && !valleyJourneyBeginned) {
          valleyJourneyBeginned = true;
        }

        // when the path walked is equal to zero and valley journed has beginned then increment the valley counter;
        // also set the valley journey beginned back to false
        if (pathWalked === 0 && valleyJourneyBeginned) {
          valleyCounter++;
          valleyJourneyBeginned = false;
        }
      });
    }
  }

  // return the valley counter
  return valleyCounter;
}

countingValleys(8, "UDDDUDUU");
