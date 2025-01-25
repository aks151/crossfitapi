const workoutService = require("../services/workoutService");

const getAllWorkouts = (req,res) => {
    const {mode} = req.query;
    const allWorkouts = workoutService.getAllWorkouts({mode});
    res.send({status: "OK", data: allWorkouts});
}

const getOneWorkout = (req, res) => {
    const {
        params: {workoutId},
    } = req;

    if(!workoutId) {
        res.status(400)
        .send({
            status: "ERROR",
            data: {error: "parameter workoutId cannot be empty"}
        });
    }

    try{
        const workout = workoutService.getOneWorkout(workoutId);
        res.send({status:"OK", data: workout});
    } catch(error) {
        res
        .status(error.status || 500)
        .send({
            status:"FAILED",
            data: {
                error: error.message || error,
            }
        })
    }
  
}

const createNewWorkout = (req, res) => {
    const {body} = req;

    if(!body.name ||
        !body.mode||
        !body.equipment ||
        !body.exercises ||
        !body.trainerTips
    ){
        res
        .status(400)
        .send({
            status: "FAILED",
            data: {
                error:
                "One of the required keys is not present.(name, mode, equipment,exercises)"
            }
        })
    }

    const newWorkout = {
        name: body.name,
        mode: body.mode,
        equipment: body.equipment,
        exercises: body.exercises,
        trainerTips: body.trainerTips,
    };

    try {
        const createdWorkout = workoutService.createNewWorkout(newWorkout);
    res.status(201).send({status: "OK", data: createdWorkout})
    } catch(error) {
        res
        .status(error?.status || 500)
        .send({status: "FAILED",
            data: { error: error?.message || error}
        });
    }

    
}

const updateOneWorkout = (req, res) => {
    const {
        body,
        params: {workoutId},
    } = req;

    if(!workoutId) return;

    const updatedWorkout = workoutService.updateOneWorkout(workoutId, body);
    res.send({status: "OK", data: updatedWorkout});
}

const deleteOneWorkout = (req, res) => {
    const {
        params: {workoutId}
    } = req;
    if(!workoutId) return;
    const deletedWorkout = workoutService.deleteOneWorkout(workoutId);
    res.send({status: "OK", data: deletedWorkout});
}

module.exports = {
    getAllWorkouts,
    getOneWorkout,
    createNewWorkout,
    updateOneWorkout,
    deleteOneWorkout
}
