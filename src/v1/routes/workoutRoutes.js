const express = require("express");
const router = express.Router();
const workoutController = require("../../controllers/workoutControllers");
const recordController = require("../../controllers/recordControllers");

router.get("/", workoutController.getAllWorkouts)

router.get("/:workoutId", workoutController.getOneWorkout)

router.get("/:workoutId/records", recordController.getRecordForWorkout)

router.post("/", workoutController.createNewWorkout)

router.patch("/:workoutId", workoutController.updateOneWorkout)

router.delete("/:workoutId", workoutController.deleteOneWorkout)

module.exports = router;
