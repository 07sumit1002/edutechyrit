import React from 'react';
import { Clock, Users, Star, Code, Globe, Database } from 'lucide-react';

const CourseCard = ({ course }: { course: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
        {course.level}
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-blue-600 px-2 py-1 rounded text-sm font-semibold">
        ${course.price}
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{course.title}</h3>
      <p className="text-gray-600 mb-4">{course.description}</p>
      
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center text-gray-500 text-sm">
          <Clock className="h-4 w-4 mr-1" />
          {course.duration}
        </div>
        <div className="flex items-center text-gray-500 text-sm">
          <Users className="h-4 w-4 mr-1" />
          {course.students}
        </div>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < course.rating ? 'fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-gray-600 text-sm">({course.reviews})</span>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const WebDevelopment = () => {
  const courses = [
    {
      id: 1,
      title: "Complete React Development",
      description: "Master React from basics to advanced concepts including hooks, context, and modern patterns.",
      image: "https://images.pexels.com/photos/11035380/pexels-photo-11035380.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 299,
      duration: "12 weeks",
      students: "3.2k",
      rating: 5,
      reviews: 1240
    },
    {
      id: 2,
      title: "Full Stack JavaScript",
      description: "Build complete web applications using Node.js, Express, MongoDB, and React.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Advanced",
      price: 399,
      duration: "16 weeks",
      students: "2.8k",
      rating: 5,
      reviews: 980
    },
    {
      id: 3,
      title: "HTML, CSS & JavaScript Fundamentals",
      description: "Start your web development journey with the core technologies of the web.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 199,
      duration: "8 weeks",
      students: "5.1k",
      rating: 5,
      reviews: 2100
    },
    {
      id: 4,
      title: "Advanced CSS & Animations",
      description: "Create stunning layouts and animations with modern CSS techniques and frameworks.",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 249,
      duration: "10 weeks",
      students: "1.9k",
      rating: 5,
      reviews: 750
    },
    {
      id: 5,
      title: "Vue.js Complete Guide",
      description: "Learn Vue.js framework from scratch and build modern single-page applications.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 279,
      duration: "11 weeks",
      students: "2.3k",
      rating: 4,
      reviews: 890
    },
    {
      id: 6,
      title: "Backend Development with Python",
      description: "Build robust APIs and web services using Django and Flask frameworks.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 329,
      duration: "14 weeks",
      students: "1.7k",
      rating: 5,
      reviews: 650
    }
  ];

  const skills = [
    { icon: Code, name: "Frontend Development", description: "React, Vue, Angular" },
    { icon: Database, name: "Backend Development", description: "Node.js, Python, APIs" },
    { icon: Globe, name: "Full Stack", description: "End-to-end development" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Web Development <span className="text-blue-200">Courses</span>
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Master modern web development technologies and build amazing websites and applications 
              that users love. From frontend to backend, we've got you covered.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-blue-200 text-sm">{skill.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Courses Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Learning Path
            </h2>
            <p className="text-lg text-gray-600">
              From beginner-friendly courses to advanced specializations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Learning Path */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Recommended Learning Path
          </h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-8">
            <div className="bg-blue-50 p-6 rounded-lg flex-1">
              <div className="text-blue-600 font-bold text-lg mb-2">1. Fundamentals</div>
              <p className="text-gray-600">HTML, CSS & JavaScript</p>
            </div>
            <div className="hidden md:block text-blue-600">→</div>
            <div className="bg-blue-50 p-6 rounded-lg flex-1">
              <div className="text-blue-600 font-bold text-lg mb-2">2. Framework</div>
              <p className="text-gray-600">React or Vue.js</p>
            </div>
            <div className="hidden md:block text-blue-600">→</div>
            <div className="bg-blue-50 p-6 rounded-lg flex-1">
              <div className="text-blue-600 font-bold text-lg mb-2">3. Full Stack</div>
              <p className="text-gray-600">Backend & Databases</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WebDevelopment;