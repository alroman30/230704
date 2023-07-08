const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
	courseName : {
		type: String,
		required: [true, "Course name is required"]
	},
	studentsEnrolled : {
		type: String,
		required: [true, "Required"]
	}
})

module.exports = mongoose.model("Course", courseSchema)