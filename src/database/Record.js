const DB = require("./db.json");

const getRecordForWorkout = (workoutId) => {
    try {
        const records = DB.records;
        const recordForWorkout = records.filter((recordObj) => recordObj.workout === workoutId)
        if(!recordForWorkout){
            throw {
                status: 400,
                message: `Can't find workout with the id '${workoutId}'`,
            }
        }

        return recordForWorkout;
    } catch(error) {
        throw {status: error?.status || 500, 
            message: error?.message || error
        };
    }
}

module.exports = {
    getRecordForWorkout
}