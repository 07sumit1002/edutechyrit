import React from 'react';
import { Play, ArrowRight, Star } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
              <Star className="h-4 w-4 mr-2 fill-current" />
              #1 Learning Platform
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Master New
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> Skills</span>
              <br />
              Shape Your Future
            </h1>
            
            <p className="text-xl text-gray-600 leading-relaxed">
              Join thousands of learners advancing their careers with our comprehensive courses, 
              expert instructors, and hands-on projects. Start your journey today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-all duration-300 font-semibold text-lg flex items-center justify-center shadow-lg hover:shadow-xl">
                Get Started Free
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button className="group bg-white text-gray-700 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 font-semibold text-lg flex items-center justify-center border-2 border-gray-200 hover:border-blue-300">
                <Play className="mr-2 h-5 w-5 text-blue-600" />
                Watch Demo
              </button>
            </div>
            
            <div className="flex items-center space-x-8 pt-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">50K+</div>
                <div className="text-gray-600">Students</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">200+</div>
                <div className="text-gray-600">Courses</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-blue-600">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
          
          {/* Right Content */}
          <div className="relative">
            <div className="relative bg-white rounded-2xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
                Live Classes
              </div>
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students learning online"
                className="w-full h-64 object-cover rounded-xl"
              />
              <div className="mt-4">
                <h3 className="font-semibold text-gray-900">Web Development Bootcamp</h3>
                <p className="text-gray-600 text-sm mt-1">Learn modern web technologies from scratch</p>
                <div className="flex items-center mt-3">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-gray-600 text-sm ml-2">4.9 (2.5k reviews)</span>
                </div>
              </div>
            </div>
            
            {/* Floating elements */}
            <div className="absolute -top-8 left-8 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium animate-bounce">
              New Course!
            </div>
            <div className="absolute -bottom-4 -left-8 bg-purple-500 text-white px-4 py-2 rounded-lg text-sm font-medium">
              24/7 Support
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;