// App.js
import React from 'react';

// Main App component
const App = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-inter antialiased">
      {/* Navbar */}
      <nav className="bg-white shadow-md rounded-b-xl mx-3 mt-3">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#" className="text-blue-600 text-3xl font-bold">
            AI & Cloud
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200">
              Home
            </a>
            <a href="#features" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200">
              Features
            </a>
            <a href="#blog" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200">
              Blog
            </a>
            <a href="#contact" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200">
              Contact
            </a>
          </div>
          {/* Mobile Menu Button (Hamburger) */}
          <button className="md:hidden text-gray-700 text-2xl focus:outline-none">
            &#9776; {/* Unicode for hamburger icon */}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative flex items-center justify-center h-[500px] md:h-[600px] lg:h-[700px] bg-gradient-to-br from-blue-600 to-blue-800 text-white overflow-hidden rounded-b-3xl shadow-xl mb-12">
        <div className="absolute inset-0 bg-pattern opacity-10"></div> {/* Optional background pattern */}
        <div className="container mx-auto text-center px-4 relative z-10">
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight mb-4 drop-shadow-lg">
            Shape Tomorrow with AI Innovation
          </h1>
          <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90">
            Unlock the power of artificial intelligence to revolutionize your business, streamline operations, and discover new opportunities. AITHEFUTURE is your partner in intelligent transformation.
          </p>
          <a href="#features" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Explore Features
          </a>
        </div>
      </section>

      {/* Blog Posts Section */}
      <section id="blog" className="container mx-auto py-12 px-4 mb-12">
        <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">Latest Cloud & AI Insights</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Blog Post Card 1 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="https://placehold.co/600x400/D1E7DD/0A3622?text=Cloud+AI" alt="Cloud AI Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">The Rise of Serverless AI</h3>
            <p className="text-gray-600 text-sm mb-3">By Jane Doe | June 28, 2025</p>
            <p className="text-gray-700 mb-4">Explore how serverless architectures are revolutionizing AI deployment, offering scalability and cost-efficiency for modern applications.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
          </div>
          {/* Blog Post Card 2 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="https://placehold.co/600x400/E0E7FF/1C3E67?text=Ethical+AI" alt="Ethical AI Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">Navigating Ethical AI in Business</h3>
            <p className="text-gray-600 text-sm mb-3">By John Smith | June 25, 2025</p>
            <p className="text-gray-700 mb-4">A deep dive into the critical considerations for building and deploying ethical AI systems in today's rapidly evolving business landscape.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
          </div>
          {/* Blog Post Card 3 */}
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
            <img src="https://placehold.co/600x400/FEE2E2/B91C1C?text=MLOps" alt="MLOps Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
            <h3 className="text-xl font-semibold mb-2 text-gray-900">MLOps: Bridging the Gap from Model to Production</h3>
            <p className="text-gray-600 text-sm mb-3">By Emily White | June 20, 2025</p>
            <p className="text-gray-700 mb-4">Understand the best practices and tools for implementing MLOps to ensure seamless deployment and management of machine learning models.</p>
            <a href="#" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
          </div>
        </div>
        <div className="text-center mt-10">
          <a href="#" className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            View All Posts
          </a>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="container mx-auto text-center py-12 px-4 mb-12">
        <div className="p-8 md:p-12 bg-gray-100 rounded-3xl shadow-lg">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Ready to Transform Your Business?</h2>
          <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
            Join the future with AITHEFUTURE. Let's discuss how AI can drive your next wave of innovation.
          </p>
          <button className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
            Get Started Today
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-gray-300 py-10 rounded-t-3xl shadow-xl">
        <div className="container mx-auto text-center px-4">
          <p className="mb-2">&copy; 2025 AITHEFUTURE. All rights reserved.</p>
          <p className="mb-4">Designed with <span className="text-red-500">&#x2764;</span> and AI.</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
            <span className="text-gray-600">|</span>
            <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;