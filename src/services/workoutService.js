const workoutDBhandler = require("../database/Workout");

const getAllWorkouts =  () => {
    return workoutDBhandler.getAllWorkouts();
}

const getOneWorkout = () => {
    return;
}

const createNewWorkout = () => {
    return;
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