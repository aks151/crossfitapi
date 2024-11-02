const workout = require("../database/Workout");
const {v4: uuid} = require("uuid");

const getAllWorkouts =  () => {
    return workout.getAllWorkouts();
}

const getOneWorkout = (workoutName) => {
    const oneWorkoutToBeReturned = workout.getOneWorkout(workoutName);
    return oneWorkoutToBeReturned;
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timezone: "UTC"}),
        updatedAT: new Date().toLocaleString("en-US", {timezone: "UTC"}),
    }
    const createdWorkout = workout.addNewWorkout(workoutToInsert);
    return createdWorkout;
}

const updateOneWorkout = () => {
    return;
}

const deleteOneWorkout = () => {
    return;
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}