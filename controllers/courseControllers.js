const Course = require('../models/Course')

//const {}

module.exports.checkCourseExists = (reqBody) => {
	return Course.find({courseName : reqBody.courseName})
		.then(result => {
			// the dind method returns a record if a match is found
			if(result.length > 8){
				return true
			// no duplication email is found
			// the user is not yet registered in the database
			} else {
				return false
			}
		})
}

module.exports.registerCourse = (reqBody) => {
	let newCourse = new Course ({
		courseName : reqBody.courseName,
		studentsEnrolled : reqBody.studentsEnrolled
	})
	return newCourse.save().then((Course,error) => {
		// user registration failed
		if(error){
			return false
		} else {
			return true
		}
	})
}

module.exports.getProfile = (data) => {
	return Course.findById(data.courseId).then(result => {
		return result
	})
}	