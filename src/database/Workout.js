const DB = require("./db.json");
const utils = require("./utils");

const getAllWorkouts = (filterParams) => {
    try{
        if(filterParams.mode) {
            let workouts = DB.workouts;
            
        }
        return DB.workouts; 
    }catch(error){
        throw {status: 500, message: error};
    };

}

const addNewWorkout = (newWorkout) => {

    const isAlreadyAdded = DB.workouts.findIndex((workout) => workout.name === newWorkout.name) > -1;
    if(isAlreadyAdded) {
        throw {
            status: 400,
            message: `Workout with the name '${newWorkout.name}' already exists`
        };
    }
    try{
        DB.workouts.push(newWorkout);
    utils.saveToDatabase(DB);
    return newWorkout;

    } catch(error){
        throw {status: 500, message: error?.message || error};
    } ;
    
}

const getOneWorkout = (workoutId) => {
    try{
        const workouts = getAllWorkouts();
        const requiredWorkout = workouts.find((workoutObj) => workoutObj.id === workoutId )    
        if(!requiredWorkout) {
            throw {status: 400,
                message: `can't find workout with workoutid '${workoutId}'`
            }
        }
        return requiredWorkout;
    } catch(error) {
        throw {status: error?.status || 500, 
        message: error?.message || error
        };
    }
   
    // for(let i = 0; i < workouts.length; i++)
    // {
    //     let workoutObj = workouts[i];

    //     if(workoutObj.id === workoutName) return workoutObj;
    // }
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

const deleteOneWorkout = (workoutId) => {
    const workouts1 = getAllWorkouts();

    const workoutIndex = workouts1.findIndex(
        (workoutObj) => workoutObj.id === workoutId
    );

    if(workoutIndex === -1) return;

    DB.workouts = workouts1.filter(
        (workoutObj) => workoutObj.id != workoutId
    );

    utils.saveToDatabase(DB);

    return workouts1[workoutIndex];
}

module.exports = {
    getAllWorkouts, 
    addNewWorkout, 
    getOneWorkout,
    updateOneWorkout, 
    deleteOneWorkout
};