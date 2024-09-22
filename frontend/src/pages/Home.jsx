import React from 'react'
import { Link } from 'react-router-dom'
import bugs from '../assests/images/bugs.svg'
import instructer from '../assests/images/instructer.svg'
import Course from '../components/Course'
import { ArrowRight } from 'lucide-react'
import Navbar from '../components/Navbar'

const Home = () => {
    return (
        <div className="flex flex-col min-h-screen bg-customBg text-customText">
            <Navbar />
            <main className="flex-1">
                <section className="w-full py-12 md:py-24 lg:py-32">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12">
                            <div className="flex flex-col justify-center space-y-4">
                                <div className="space-y-2">
                                    <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                                        Unlock Your Potential with Our Edtech Platform
                                    </h1>
                                    <p className="max-w-[600px] text-muted-foreground text-sm md:text-base lg:text-xl">
                                        Discover a world of knowledge and skills with our comprehensive edtech platform. Explore a diverse range of courses
                                        and programs tailored to your needs.
                                    </p>
                                </div>
                                <div className="flex flex-col sm:flex-row gap-2">
                                    <Link
                                        to="/courses"
                                        className="inline-flex bg-customText hover:bg-gray-300 text-black h-10 items-center justify-center rounded-md px-4 sm:px-8 text-sm font-medium shadow transition-colors"
                                    >
                                        Explore Courses
                                    </Link>
                                    <Link
                                        to="/signup"
                                        className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-4 sm:px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
                                    >
                                        Sign Up
                                    </Link>
                                </div>
                            </div>
                            <div className="flex justify-center lg:justify-end">
                                <img
                                    src={bugs}
                                    alt="Hero"
                                    className="max-w-full h-auto aspect-square overflow-hidden rounded-xl object-cover"
                                    width="550"
                                    height="550"
                                />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="w-full py-12 lg:py-24 bg-courseBg">
                    <div className="container px-4 md:px-6 mx-auto">
                        <div className="flex flex-col items-center justify-center space-y-4 text-center">
                            <div className="space-y-2">
                                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl md:text-4xl lg:text-5xl">
                                    Explore Our Diverse Course Offerings
                                </h2>
                                <p className="max-w-[900px] text-muted-foreground text-sm md:text-base lg:text-lg">
                                    From programming to design, business to personal development, we have a wide range of courses to help you achieve your goals.
                                </p>
                            </div>
                        </div>

                        <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 py-12 sm:grid-cols-2 lg:grid-cols-3">
                            {/* Course Cards */}
                            <Course image='#' link='#' />
                            <Course image='#' link='#' />
                            <Course image='#' link='#' />
                        </div>
                    </div>
                </section>

                <section className='w-full flex flex-col lg:flex-row px-4 md:px-6 lg:px-9 py-12 lg:py-24 items-center'>
                    <div className='w-full lg:w-1/2 mb-6 lg:mb-0'>
                        <img src={instructer} alt="Instructor" className="max-w-full h-auto" />
                    </div>
                    <div className='w-full lg:w-1/2 px-0 lg:px-8 flex flex-col'>
                        <h1 className='text-3xl sm:text-4xl md:text-5xl lg:text-6xl mb-4'>Become an <span style={{ 'color': '#F8B6B2' }}>instructor</span></h1>
                        <p className='text-sm md:text-base lg:text-lg mb-4'>Instructors from around the world teach millions of students on StudyNotion. We provide the tools and skills to teach what you love.</p>
                        <button className='flex w-2/3 justify-between  items-start gap-2 text-start mt-3 bg-customText px-4 py-2 rounded text-customBg text-sm md:text-base'>
                            <span>Start Teaching Today</span>  <ArrowRight size={20} />
                        </button>
                    </div>
                </section>
            </main>

            <footer className="py-6 w-full shrink-0 items-center px-4 md:px-6 border-t text-xs text-muted-foreground">
                &copy; 2024 Edtech Platform. All rights reserved.
            </footer>
        </div>
    )
}

export default Home