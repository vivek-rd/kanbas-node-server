import mongoose from "mongoose";
const assignmentSchema = new mongoose.Schema(
  {
    course: { type: mongoose.Schema.Types.ObjectId, ref: "CourseModel" },
    title: String,
    description: String,
    points: Number,
    due_date: Date,
    available_date: Date,
  },
  { collection: "assignments" }
);
export default assignmentSchema;
