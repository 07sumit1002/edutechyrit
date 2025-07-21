import React from 'react';
import { Link } from 'react-router-dom';
import { Code, BarChart, Palette, Smartphone, Clock, Users, Star } from 'lucide-react';

const CourseCategory = ({ category }: { category: any }) => (
  <Link to={category.link} className="group">
    <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
      <div className="relative">
        <img
          src={category.image}
          alt={category.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <category.icon className="h-8 w-8 text-white mb-2" />
          <h3 className="text-xl font-bold text-white">{category.title}</h3>
        </div>
      </div>
      
      <div className="p-6">
        <p className="text-gray-600 mb-4">{category.description}</p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center text-gray-500 text-sm">
            <Clock className="h-4 w-4 mr-1" />
            {category.courses} courses
          </div>
          <div className="flex items-center text-gray-500 text-sm">
            <Users className="h-4 w-4 mr-1" />
            {category.students} students
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <div className="text-blue-600 font-semibold">From ₹{category.priceFrom}</div>
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors text-sm font-medium group-hover:bg-blue-700">
            Explore Courses
          </button>
        </div>
      </div>
    </div>
  </Link>
);

const Courses = () => {
  const categories = [
    {
      id: 1,
      title: "Web Development",
      description: "Master modern web technologies including React, Node.js, and full-stack development.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Code,
      courses: 25,
      students: "12.5k",
      priceFrom: 199,
      link: "/courses/web-development"
    },
    {
      id: 2,
      title: "Data Science",
      description: "Learn data analysis, machine learning, and AI with Python and popular frameworks.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: BarChart,
      courses: 18,
      students: "8.3k",
      priceFrom: 249,
      link: "/courses/data-science"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "Create beautiful, user-friendly interfaces and exceptional user experiences.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Palette,
      courses: 15,
      students: "6.7k",
      priceFrom: 179,
      link: "/courses/ui-ux-design"
    },
    {
      id: 4,
      title: "App Development",
      description: "Build mobile applications for iOS and Android using modern frameworks.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      icon: Smartphone,
      courses: 20,
      students: "9.2k",
      priceFrom: 229,
      link: "/courses/app-development"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Explore Our <span className="text-blue-200">Course Categories</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Choose from our comprehensive catalog of technology courses designed by industry experts 
            to help you master in-demand skills and advance your career.
          </p>
        </div>
      </section>

      {/* Course Categories */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {categories.map(category => (
              <CourseCategory key={category.id} category={category} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Can't Find What You're Looking For?
          </h2>
          <p className="text-blue-100 mb-8">
            We're constantly adding new courses. Contact us to suggest a course or get notified about upcoming releases.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/contact" className="bg-white text-blue-600 px-6 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Request a Course
            </Link>
            <Link to="/programs" className="border-2 border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              View Programs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;