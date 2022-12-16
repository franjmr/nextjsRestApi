import { NextApiRequest, NextApiResponse } from "next";
import { Course } from "../../../model/Course";

//http://localhost:3000/api/static
export default (req:NextApiRequest, res: NextApiResponse<Course>) => {
    res.status(200).json({
		firstCourse: 'Web Development',
		secondCourse: 'AI',
		thirdCourse: 'Mobile Development'
	});
};