import React, { useState, useEffect } from 'react';

// Component for the Hero Section
const HeroSection = () => (
  <section id="home" className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 md:py-32 rounded-b-3xl mx-3 mb-12 shadow-xl">
    <div className="container mx-auto px-4 text-center">
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 animate-fade-in-down">
        Your Name - Cloud Architect & AI Designer
      </h1>
      <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 opacity-90 animate-fade-in-up">
        Building Scalable, Secure, and Intelligent Solutions on AWS, Azure, & GCP.
      </p>
      <a href="#blog" className="inline-block bg-white text-blue-700 hover:bg-gray-100 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 animate-bounce-in">
        Explore My Insights
      </a>
    </div>
  </section>
);

// Individual Blog Post Detail Components (Placeholders)
const BlogPostServerlessAI = () => (
  <div className="container mx-auto py-12 px-4">
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">The Rise of Serverless AI</h2>
      <p className="text-gray-600 text-sm mb-6">By Jane Doe | June 28, 2025</p>
      <img src="https://placehold.co/800x500/D1E7DD/0A3622?text=Serverless+AI+Detail" alt="Serverless AI Detail" className="rounded-lg mb-6 w-full object-cover"></img>
      <p className="text-gray-700 leading-relaxed mb-4">
        Serverless architectures are fundamentally changing how we deploy and manage artificial intelligence models. By abstracting away server management, developers can focus purely on code, leading to faster deployment cycles and reduced operational overhead. This paradigm is particularly beneficial for AI workloads due to their often bursty and unpredictable nature.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Services like AWS Lambda, Azure Functions, and Google Cloud Functions allow AI models to be invoked on demand, scaling instantly from zero to thousands of concurrent requests. This eliminates the need to provision and maintain always-on servers, significantly cutting down infrastructure costs. Furthermore, integration with other cloud-native services like object storage (S3, Azure Blob Storage, GCS) and message queues (SQS, Azure Service Bus, Pub/Sub) enables robust and scalable data pipelines for AI inference.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        The future of AI deployment increasingly points towards serverless, offering unparalleled agility and efficiency for modern, intelligent applications.
      </p>
      <a href="#blog" className="text-blue-600 hover:underline font-semibold">&larr; Back to Blog</a>
    </div>
  </div>
);

const BlogPostEthicalAI = () => (
  <div className="container mx-auto py-12 px-4">
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">Navigating Ethical AI in Business</h2>
      <p className="text-gray-600 text-sm mb-6">By John Smith | June 25, 2025</p>
      <img src="https://placehold.co/800x500/E0E7FF/1C3E67?text=Ethical+AI+Detail" alt="Ethical AI Detail" className="rounded-lg mb-6 w-full object-cover"></img>
      <p className="text-gray-700 leading-relaxed mb-4">
        As AI becomes more pervasive in business operations, the importance of ethical considerations cannot be overstated. Ensuring fairness, transparency, and accountability in AI systems is crucial not only for regulatory compliance but also for maintaining public trust and avoiding unintended societal biases.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Key aspects of ethical AI include mitigating algorithmic bias, ensuring data privacy, providing explainability for AI decisions, and establishing clear human oversight. Businesses must adopt robust governance frameworks that incorporate ethical guidelines throughout the AI lifecycle, from data collection and model training to deployment and monitoring.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        By proactively addressing these ethical challenges, organizations can build AI systems that are not only powerful but also responsible and beneficial for all stakeholders.
      </p>
      <a href="#blog" className="text-blue-600 hover:underline font-semibold">&larr; Back to Blog</a>
    </div>
  </div>
);

const BlogPostMLOps = () => (
  <div className="container mx-auto py-12 px-4">
    <div className="bg-white p-8 rounded-2xl shadow-lg">
      <h2 className="text-4xl font-bold mb-4 text-gray-900">MLOps: Bridging the Gap from Model to Production</h2>
      <p className="text-gray-600 text-sm mb-6">By Emily White | June 20, 2025</p>
      <img src="https://placehold.co/800x500/FEE2E2/B91C1C?text=MLOps+Detail" alt="MLOps Detail" className="rounded-lg mb-6 w-full object-cover"></img>
      <p className="text-gray-700 leading-relaxed mb-4">
        MLOps (Machine Learning Operations) is a set of practices that aims to deploy and maintain machine learning models in production reliably and efficiently. It extends DevOps principles to the machine learning lifecycle, encompassing data preparation, model training, versioning, deployment, monitoring, and retraining.
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        Implementing robust MLOps pipelines is essential for businesses to realize the full value of their AI investments. This involves automating processes, establishing continuous integration and continuous delivery (CI/CD) for models, and setting up comprehensive monitoring to detect data drift, model decay, and performance issues in real-time.
      </p>
      <p className="text-gray-700 leading-relaxed mb-6">
        Effective MLOps ensures that models remain performant, secure, and up-to-date in dynamic production environments, transforming experimental models into reliable business assets.
      </p>
      <a href="#blog" className="text-blue-600 hover:underline font-semibold">&larr; Back to Blog</a>
    </div>
  </div>
);

// Main App component
const App = () => {
  const [currentPage, setCurrentPage] = useState('home'); // Default to 'home'

  useEffect(() => {
    // Function to handle hash changes
    const handleHashChange = () => {
      const hash = window.location.hash.substring(1); // Remove the '#'
      if (hash.startsWith('blog/')) {
        setCurrentPage(hash);
      } else if (hash === 'blog' || hash === 'contact') {
        setCurrentPage(hash);
      } else {
        setCurrentPage('home'); // Default to home if hash is empty or unrecognized
      }
    };

    // Set initial page based on current hash
    handleHashChange();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []); // Empty dependency array means this runs once on mount

  const renderContent = () => {
    switch (currentPage) {
      case 'blog/serverless-ai':
        return <BlogPostServerlessAI />;
      case 'blog/ethical-ai':
        return <BlogPostEthicalAI />;
      case 'blog/mlops':
        return <BlogPostMLOps />;
      case 'blog':
        return (
          <section id="blog" className="container mx-auto py-12 px-4 mb-12">
            <h2 className="text-center text-4xl font-bold mb-10 text-gray-800">Latest Cloud & AI Insights</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blog Post Card 1 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="https://placehold.co/600x400/D1E7DD/0A3622?text=Cloud+AI" alt="Cloud AI Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">The Rise of Serverless AI</h3>
                <p className="text-gray-600 text-sm mb-3">By Jane Doe | June 28, 2025</p>
                <p className="text-gray-700 mb-4">Explore how serverless architectures are revolutionizing AI deployment, offering scalability and cost-efficiency for modern applications.</p>
                <a href="#blog/serverless-ai" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
              </div>
              {/* Blog Post Card 2 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="https://placehold.co/600x400/E0E7FF/1C3E67?text=Ethical+AI" alt="Ethical AI Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">Navigating Ethical AI in Business</h3>
                <p className="text-gray-600 text-sm mb-3">By John Smith | June 25, 2025</p>
                <p className="text-gray-700 mb-4">A deep dive into the critical considerations for building and deploying ethical AI systems in today's rapidly evolving business landscape.</p>
                <a href="#blog/ethical-ai" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
              </div>
              {/* Blog Post Card 3 */}
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img src="https://placehold.co/600x400/FEE2E2/B91C1C?text=MLOps" alt="MLOps Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
                <h3 className="text-xl font-semibold mb-2 text-gray-900">MLOps: Bridging the Gap from Model to Production</h3>
                <p className="text-gray-600 text-sm mb-3">By Emily White | June 20, 2025</p>
                <p className="text-gray-700 mb-4">Understand the best practices and tools for implementing MLOps to ensure seamless deployment and management of machine learning models.</p>
                <a href="#blog/mlops" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
              </div>
            </div>
            <div className="text-center mt-10">
              <a href="#blog" className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                View All Posts
              </a>
            </div>
          </section>
        );
      case 'home':
      default:
        return (
          <>
            {/* Blog Posts Section (displayed on home by default, can also be accessed via #blog) */}
            <section id="blog-preview" className="container mx-auto py-12 px-4 mb-12">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Blog Post Card 1 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="https://placehold.co/600x400/D1E7DD/0A3622?text=Cloud+AI" alt="Cloud AI Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">The Rise of Serverless AI</h3>
                  <p className="text-gray-600 text-sm mb-3">By Jane Doe | June 28, 2025</p>
                  <p className="text-gray-700 mb-4">Explore how serverless architectures are revolutionizing AI deployment, offering scalability and cost-efficiency for modern applications.</p>
                  <a href="#blog/serverless-ai" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
                </div>
                {/* Blog Post Card 2 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="https://placehold.co/600x400/E0E7FF/1C3E67?text=Ethical+AI" alt="Ethical AI Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">Navigating Ethical AI in Business</h3>
                  <p className="text-gray-600 text-sm mb-3">By John Smith | June 25, 2025</p>
                  <p className="text-gray-700 mb-4">A deep dive into the critical considerations for building and deploying ethical AI systems in today's rapidly evolving business landscape.</p>
                  <a href="#blog/ethical-ai" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
                </div>
                {/* Blog Post Card 3 */}
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <img src="https://placehold.co/600x400/FEE2E2/B91C1C?text=MLOps" alt="MLOps Blog Post" className="rounded-lg mb-4 w-full h-48 object-cover"></img>
                  <h3 className="text-xl font-semibold mb-2 text-gray-900">MLOps: Bridging the Gap from Model to Production</h3>
                  <p className="text-gray-600 text-sm mb-3">By Emily White | June 20, 2025</p>
                  <p className="text-gray-700 mb-4">Understand the best practices and tools for implementing MLOps to ensure seamless deployment and management of machine learning models.</p>
                  <a href="#blog/mlops" className="text-blue-600 hover:underline font-semibold">Read More &rarr;</a>
                </div>
              </div>
              <div className="text-center mt-10">
                <a href="#blog" className="inline-block bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                  View All Posts
                </a>
              </div>
            </section>
          </>
        );
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-50 text-gray-800 font-inter antialiased">
      {/* Navbar */}
      <nav className="bg-white shadow-md rounded-b-xl mx-3 mt-3">
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <a href="#home" className="text-blue-600 text-3xl font-bold">
            AI & Cloud
          </a>
          <div className="hidden md:flex space-x-6">
            <a href="#home" className="text-gray-700 hover:text-blue-600 font-semibold transition-colors duration-200">
              Home
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

      {/* Render content based on current page */}
      {renderContent()}

      {/* Call to Action Section (Only visible on home/blog list) */}
      {(currentPage === 'home' || currentPage === 'blog') && (
        <section className="container mx-auto text-center py-12 px-4 mb-12">
          <div className="p-8 md:p-12 bg-gray-100 rounded-3xl shadow-lg">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-600">Ready to Transform Your Business?</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-6">
              Join the future with AITHEFUTURE. Let's discuss how AI can drive your next wave of innovation.
            </p>
            <a href="#contact" className="bg-blue-600 text-white hover:bg-blue-700 font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
              Get Started Today
            </a>
          </div>
        </section>
      )}

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