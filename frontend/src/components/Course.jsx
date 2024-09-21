import React from 'react'
import { Link } from 'react-router-dom'
const Course = ({ image, link }) => {
    return (
        <div className="flex bg-customBg flex-col justify-between rounded-lg  bg-background p-6 shadow-sm hover:shadow-md">
            <img
                src={image}
                alt="Course"
                className="mx-auto aspect-video overflow-hidden rounded-lg object-cover object-center"
                width="300"
                height="200"
            />
            <h3 className="text-xl font-bold mt-4">Web Development</h3>
            <p className="text-muted-foreground">
                Learn the latest web development technologies and frameworks.
            </p>
            <div className="mt-4 flex justify-end">
                <Link to={link} className="bg-customText text-black hover:bg-gray-300 px-4 py-2 text-sm font-medium ">
                    Explore Course
                </Link>
            </div>
        </div>
    )
}

export default Course;