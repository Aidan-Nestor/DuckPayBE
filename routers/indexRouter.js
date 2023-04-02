const express = require("express");
const { Router } = express;
const router = new Router();
const studentModel = require("../model");
const mongoose = require("mongoose");

const sch = {
  userID: Number,
  transactions: Number,
};

router.post("/", async (req, res) => {
  const { userID, transactions } = req.body;

  try {
    const student = new studentModel({
      userID: userID,
      transactions: transactions,
    });
    const val = await student.save();
    res.json(val);
  } catch (err) {
    res.json("err");
  }
});

router.get("/", async (_, res) => {
  try {
    const student = await studentModel.find();
    console.log(student);
    res.json(student);
  } catch (err) {
    res.json("err");
  }
});

// router.put("/:userID", async (req, res) => {
//   const { userID } = req.params;
//   try {
//     const student = await studentModel.findById(userID);

//     await student.save();
//     res.json(student);
//   } catch (err) {
//     console.log(err);
//     res.json("err");
//   }
// });

router.get("/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const student = await studentModel.find({ userID: userID });
    res.json(student);
  } catch (err) {
    res.json("err");
  }
});

router.delete("/:userID", async (req, res) => {
  const { userID } = req.params;
  try {
    const student = await studentModel.findOneAndDelete({ userID: userID });
    res.json(student);
  } catch (err) {
    res.json("err");
  }
});

module.exports = router;
