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

module.exports = {
    getAllWorkouts, 
    addNewWorkout, 
    getOneWorkout
};