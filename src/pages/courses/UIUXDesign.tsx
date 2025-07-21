import React from 'react';
import { Clock, Users, Star, Palette, Eye, Layers } from 'lucide-react';

const CourseCard = ({ course }: { course: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium">
        {course.level}
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-pink-600 px-2 py-1 rounded text-sm font-semibold">
        ₹{course.price}
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
        <button className="bg-pink-600 text-white px-4 py-2 rounded-lg hover:bg-pink-700 transition-colors text-sm font-medium">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const UIUXDesign = () => {
  const courses = [
    {
      id: 1,
      title: "UI Design Fundamentals",
      description: "Learn the principles of visual design, typography, color theory, and layout composition.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 199,
      duration: "8 weeks",
      students: "3.5k",
      rating: 5,
      reviews: 1420
    },
    {
      id: 2,
      title: "UX Research & Strategy",
      description: "Master user research methods, personas, journey mapping, and design strategy.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 279,
      duration: "12 weeks",
      students: "2.8k",
      rating: 5,
      reviews: 1150
    },
    {
      id: 3,
      title: "Figma Design Mastery",
      description: "Become proficient in Figma for UI design, prototyping, and design system creation.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 179,
      duration: "6 weeks",
      students: "4.1k",
      rating: 5,
      reviews: 1680
    },
    {
      id: 4,
      title: "Advanced Prototyping",
      description: "Create interactive prototypes and animations using Figma, Principle, and Framer.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Advanced",
      price: 329,
      duration: "10 weeks",
      students: "1.9k",
      rating: 4,
      reviews: 780
    },
    {
      id: 5,
      title: "Design Systems",
      description: "Build scalable design systems and component libraries for consistent user experiences.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Advanced",
      price: 349,
      duration: "12 weeks",
      students: "1.6k",
      rating: 5,
      reviews: 650
    },
    {
      id: 6,
      title: "Mobile App Design",
      description: "Design beautiful mobile interfaces following iOS and Android design guidelines.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 299,
      duration: "10 weeks",
      students: "2.3k",
      rating: 5,
      reviews: 920
    }
  ];

  const skills = [
    { icon: Palette, name: "Visual Design", description: "Typography, Color, Layout" },
    { icon: Eye, name: "User Research", description: "Testing, Analytics, Insights" },
    { icon: Layers, name: "Design Systems", description: "Components, Guidelines" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-pink-600 via-pink-700 to-purple-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              UI/UX Design <span className="text-pink-200">Courses</span>
            </h1>
            <p className="text-xl text-pink-100 max-w-3xl mx-auto">
              Create exceptional user experiences and beautiful interfaces. Learn design thinking, 
              user research, and modern design tools from industry professionals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-pink-200 text-sm">{skill.description}</p>
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
              Design Your Future
            </h2>
            <p className="text-lg text-gray-600">
              From beginner design principles to advanced UX strategy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Design Tools */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Master Industry-Standard Tools
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Figma</h3>
              <p className="text-gray-600 text-sm">Design & Prototyping</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Eye className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Adobe XD</h3>
              <p className="text-gray-600 text-sm">UI/UX Design</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Layers className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Sketch</h3>
              <p className="text-gray-600 text-sm">Interface Design</p>
            </div>
            <div className="text-center">
              <div className="bg-pink-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Palette className="h-8 w-8 text-pink-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Principle</h3>
              <p className="text-gray-600 text-sm">Animation & Interaction</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default UIUXDesign;