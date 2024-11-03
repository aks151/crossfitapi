const recordService = require("../services/recordService");


const getRecordForWorkout = (req, res) => {
    const {
        params: {workoutId},
    } = req;

    

    try {
        const record = recordService.getRecordForWorkout(workoutId);
       res.send({status:"OK", data: record});
    } catch(error) {
        res
        .status(400)
        .send({
            status: "ERROR1",
            message: {error: error.message || error},
        })
        
        
    }
}

module.exports = {
    getRecordForWorkout
}