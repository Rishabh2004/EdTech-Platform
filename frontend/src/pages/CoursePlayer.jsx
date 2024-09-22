import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Play, Menu } from 'lucide-react';

const courseData = [
    {
        id: 1,
        title: 'Chapter 1: Introduction',
        videos: [
            { id: 1, title: 'Welcome to the course', duration: '5:30', src: '/path/to/video1.mp4' },
            { id: 2, title: 'Course overview', duration: '10:15', src: '/path/to/video2.mp4' },
        ],
    },
    {
        id: 2,
        title: 'Chapter 2: Getting Started',
        videos: [
            { id: 3, title: 'Setting up your environment', duration: '15:45', src: '/path/to/video3.mp4' },
            { id: 4, title: 'Your first project', duration: '20:00', src: '/path/to/video4.mp4' },
        ],
    },
];

export default function CoursePlayer() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [expandedChapters, setExpandedChapters] = useState([]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [isHovering, setIsHovering] = useState(false);

    const toggleChapter = (chapterId) => {
        setExpandedChapters((prev) =>
            prev.includes(chapterId) ? prev.filter((id) => id !== chapterId) : [...prev, chapterId]
        );
    };

    const selectVideo = (chapterId, videoId) => {
        setSelectedVideo({ chapterId, videoId });
        setIsSidebarOpen(false);
    };

    const selectedChapter = courseData.find((chapter) => chapter.id === (selectedVideo && selectedVideo.chapterId));
    const selectedVideoData = selectedChapter?.videos.find((video) => video.id === (selectedVideo && selectedVideo.videoId));

    return (
        <div className="flex h-screen bg-customBg text-customText">
            {/* Sidebar Toggle Button for Mobile */}
            <button
                className="fixed top-4 left-4 z-50 md:hidden p-2 bg-customBg rounded-full"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                aria-label={isSidebarOpen ? "Close sidebar" : "Open sidebar"}
            >
                <Menu size={24} />
            </button>

            {/* Sidebar with Chapter Directory */}
            <div
                className={`fixed top-0 left-0 h-full w-64 bg-customBg p-4 overflow-y-auto transition-transform duration-300 ease-in-out transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'
                    } md:translate-x-0 z-40`}
            >
                <h2 className="text-2xl font-bold mb-4 mt-12 md:mt-0">Course Contents</h2>
                {courseData.map((chapter) => (
                    <div key={chapter.id} className="mb-4">
                        <button
                            className="flex items-center w-full text-left font-semibold p-2 hover:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600"
                            onClick={() => toggleChapter(chapter.id)}
                        >
                            {expandedChapters.includes(chapter.id) ? (
                                <ChevronDown className="mr-2 flex-shrink-0" size={20} />
                            ) : (
                                <ChevronRight className="mr-2 flex-shrink-0" size={20} />
                            )}
                            <span className="truncate">{chapter.title}</span>
                        </button>
                        {expandedChapters.includes(chapter.id) && (
                            <div className="ml-6 mt-2">
                                {chapter.videos.map((video) => (
                                    <button
                                        key={video.id}
                                        className={`flex items-center w-full text-left p-2 hover:bg-gray-700 rounded focus:outline-none focus:ring-2 focus:ring-blue-600 ${selectedVideo?.videoId === video.id ? 'bg-blue-900' : ''
                                            }`}
                                        onClick={() => selectVideo(chapter.id, video.id)}
                                    >
                                        <Play className="mr-2 flex-shrink-0" size={16} />
                                        <span className="truncate flex-grow">{video.title}</span>
                                        <span className="text-sm text-gray-400 flex-shrink-0">{video.duration}</span>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </div>

            {/* Overlay for Mobile Sidebar */}
            {isSidebarOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 md:hidden z-30"
                    onClick={() => setIsSidebarOpen(false)}
                ></div>
            )}

            {/* Main Content Area with Video Player */}
            <div className="flex-1 p-4 md:ml-64">
                {selectedVideoData ? (
                    <div className="relative">
                        <div
                            className="aspect-w-16 aspect-h-9 bg-black rounded-lg overflow-hidden"
                            onMouseEnter={() => setIsHovering(true)}
                            onMouseLeave={() => setIsHovering(false)}
                        >
                            <video
                                src={selectedVideoData.src}
                                controls
                                className="w-full h-full"
                            >
                                Your browser does not support the video tag.
                            </video>
                            <div
                                className={`absolute top-0 left-0 p-4 bg-gradient-to-b from-black to-transparent text-white transition-opacity duration-300 ${isHovering ? 'opacity-100' : 'opacity-0'
                                    }`}
                            >
                                <h2 className="text-lg font-semibold">{selectedVideoData.title}</h2>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div className="flex items-center justify-center h-full text-xl text-gray-500">
                        Select a video to start watching
                    </div>
                )}
            </div>
        </div>
    );
}
