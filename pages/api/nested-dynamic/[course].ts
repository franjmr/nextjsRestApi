import { NextApiRequest, NextApiResponse } from "next";
import { Course } from "../../../model/Course";

//http://localhost:3000/api/dynamic/1234567890
export default (req:NextApiRequest, res: NextApiResponse<Course>) => {
	const { course } = req.query
    res.status(200).json({
		firstCourse: `${course}`,
		secondCourse: 'AI',
		thirdCourse: 'Mobile Development'
	});
};