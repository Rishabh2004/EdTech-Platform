import React, { useState } from 'react';
import Navbar from '../components/Navbar'; // Assuming you have a Navbar component
import axios from 'axios'; // For handling form submission

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        setLoading(true); 

        try {
            await axios.post('/api/contact', {
                name,
                email,
                subject,
                message,
            });

            setSuccess('Your message has been sent successfully!');
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        } catch (error) {
            console.error('Contact form error:', error.response?.data || error.message);
            setError(error.response?.data?.message || 'An error occurred while sending your message.');
        } finally {
            setLoading(false); 
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-customBg text-customText overflow-y-auto"> {/* Allow vertical scrolling */}
            <Navbar />

            <div className="flex-grow flex items-center justify-center py-8">
                <div className="w-full max-w-lg p-8 bg-courseBg rounded-lg shadow-lg mx-4">
                    <h1 className="text-2xl font-semibold mb-6 text-custom-light">Contact Us</h1>

                    {error && <p className="text-red-500 mb-4">{error}</p>}
                    {success && <p className="text-green-500 mb-4">{success}</p>}

                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="name" className="block text-sm font-medium mb-1 text-custom-light">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                                placeholder="Enter your name"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="email" className="block text-sm font-medium mb-1 text-custom-light">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                                placeholder="Enter your email"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="subject" className="block text-sm font-medium mb-1 text-custom-light">Subject</label>
                            <input
                                type="text"
                                id="subject"
                                name="subject"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                required
                                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                                placeholder="Enter the subject"
                            />
                        </div>

                        <div className="mb-4">
                            <label htmlFor="message" className="block text-sm font-medium mb-1 text-custom-light">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={message}
                                onChange={(e) => setMessage(e.target.value)}
                                required
                                rows="4"
                                className="w-full px-3 py-2 rounded-md border border-custom-light bg-gray-900 text-custom-light placeholder-custom-light"
                                placeholder="Enter your message"
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 rounded-md bg-blue-700 text-custom-light hover:bg-blue-800"
                            disabled={loading}
                        >
                            {loading ? 'Sending...' : 'Send Message'}
                        </button>
                    </form>

                    <div className="mt-8 border-t border-custom-light pt-4" align="center">
                        <h2 className="text-xl font-semibold text-custom-light">Alternatively, you can reach us at:</h2>
                        <p className="mt-2 text-base text-custom-light">
                            <strong>Email:</strong> <a href="mailto:support@educationapp.com" className="hover:underline">support@educationapp.com</a>
                        </p>
                        <p className="mt-2 text-base text-custom-light">
                            <strong>Phone:</strong> <a href="tel:+91 98971 88888" className="hover:underline">+91 98971 88888</a>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
