const workout = require("../database/Workout");
const {v4: uuid} = require("uuid");

const getAllWorkouts =  (filterParams) => {
    return workout.getAllWorkouts(filterParams);
}

const getOneWorkout = (workoutName) => {
    // try{} catch(error){}
    try{
        const oneWorkoutToBeReturned = workout.getOneWorkout(workoutName);
    return oneWorkoutToBeReturned;
    } catch(error){
        throw error;
    }
    
}

const createNewWorkout = (newWorkout) => {
    const workoutToInsert = {
        ...newWorkout,
        id: uuid(),
        createdAt: new Date().toLocaleString("en-US", {timezone: "UTC"}),
        updatedAT: new Date().toLocaleString("en-US", {timezone: "UTC"}),
    }
    try {
        const createdWorkout = workout.addNewWorkout(workoutToInsert);
        return createdWorkout;
    } catch(error) {
        throw error;
    }
    
}

const updateOneWorkout = (workoutId, body) => {
    const updatedWorkout = workout.updateOneWorkout(workoutId, body);
    return updatedWorkout;
}

const deleteOneWorkout = (workoutId) => {
    const deletedWorkout = workout.deleteOneWorkout(workoutId);
    return deletedWorkout;
}


module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}