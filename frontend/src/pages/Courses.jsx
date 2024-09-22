import React from 'react'
import Navbar from '../components/Navbar';
import i1 from '../assests/images/java.png'
import i2 from '../assests/images/py.png'
import i3 from '../assests/images/hcj.jpeg'
const Courses = () => {
    const courses = [
        {
          title: 'Web Development',
          description: 'Learn the latest in full-stack web development.',
          image: i3, // Local or external image URL
        },
        {
          title: 'Data Science',
          description: 'Explore data analysis, machine learning, and AI.',
          image: i1, // Local or external image URL
        },
        {
          title: 'Cyber Security',
          description: 'Master ethical hacking and network security.',
          image: i2, // Local or external image URL
        },
        // Add more courses with their images
      ];
    return (
        <div>
            <Navbar />
            <div className="min-h-screen bg-customBg text-customText flex flex-col items-center py-10">
                <h1 className="text-4xl font-bold mb-8">Our Courses</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full max-w-7xl px-4">
                    {courses.map((course, index) => (
                        <div
                            key={index}
                            className="bg-courseBg p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                        >
                            <img
                                src={course.image}
                                alt={course.title}
                                className="w-full h-48 object-cover rounded-md mb-4"
                            />
                            <h2 className="text-2xl font-semibold mb-2">{course.title}</h2>
                            <p className="text-base">{course.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Courses