const DB = require("./db.json");
const utils = require("./utils");

const getAllWorkouts = () => {
return DB.workouts;
}

const addNewWorkout = (newWorkout) => {

    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(isAlreadyAdded) return;
    DB.workouts.push(newWorkout);
    utils.saveToDatabase(DB);
    return newWorkout;
}

const getOneWorkout = (workoutId) => {
    const workouts = getAllWorkouts();
    

    const requiredWorkout = workouts.find((workoutObj) => workoutObj.id === workoutId )

    // for(let i = 0; i < workouts.length; i++)
    // {
    //     let workoutObj = workouts[i];

    //     if(workoutObj.id === workoutName) return workoutObj;
    // }

    if(!requiredWorkout) return;

    return requiredWorkout;

}

const updateOneWorkout = (workoutId, changes) => {
    const workouts1 = getAllWorkouts();

    const workoutIndex = workouts1.findIndex(
        (workoutObj) => workoutObj.id === workoutId
    );

    if(workoutIndex === -1) return;

    const workoutObject = DB.workouts[workoutIndex];
    const updatedWorkoutObj = {
        ...workoutObject,
        ...changes,
        updatedAt: new Date().toLocaleString("en-US", {timeZone: "UTC"})
    }
    DB.workouts[workoutIndex] = updatedWorkoutObj;
    utils.saveToDatabase(DB);
    return updatedWorkoutObj;
}

module.exports = {
    getAllWorkouts, 
    addNewWorkout, 
    getOneWorkout,
    updateOneWorkout
};