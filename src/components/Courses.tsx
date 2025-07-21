import React from 'react';
import { Clock, Users, Star, BookOpen, Code, Palette, BarChart, Shield } from 'lucide-react';

const CourseCard = ({ course }: { course: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
      />
      <div className="absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 rounded-full text-xs font-medium">
        {course.category}
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-blue-600 px-2 py-1 rounded text-sm font-semibold">
        ${course.price}
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
        {course.title}
      </h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{course.description}</p>
      
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

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Full Stack Web Development",
      description: "Master modern web development with React, Node.js, and database technologies. Build real-world projects from scratch.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Development",
      price: 299,
      duration: "12 weeks",
      students: "2.5k",
      rating: 5,
      reviews: 1240,
      icon: Code
    },
    {
      id: 2,
      title: "UI/UX Design Mastery",
      description: "Learn design principles, user research, prototyping, and create stunning user interfaces that users love.",
      image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Design",
      price: 249,
      duration: "10 weeks",
      students: "1.8k",
      rating: 5,
      reviews: 920,
      icon: Palette
    },
    {
      id: 3,
      title: "Data Science & Analytics",
      description: "Dive into data analysis, machine learning, and statistical modeling using Python and popular data science libraries.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Data Science",
      price: 349,
      duration: "16 weeks",
      students: "3.2k",
      rating: 5,
      reviews: 1560,
      icon: BarChart
    },
    {
      id: 4,
      title: "Cybersecurity Fundamentals",
      description: "Understand security principles, ethical hacking, and protect systems from modern cyber threats.",
      image: "https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Security",
      price: 199,
      duration: "8 weeks",
      students: "1.5k",
      rating: 4,
      reviews: 780,
      icon: Shield
    },
    {
      id: 5,
      title: "Machine Learning Bootcamp",
      description: "Build intelligent applications using machine learning algorithms, neural networks, and AI frameworks.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "AI/ML",
      price: 399,
      duration: "20 weeks",
      students: "2.1k",
      rating: 5,
      reviews: 1100,
      icon: BookOpen
    },
    {
      id: 6,
      title: "Mobile App Development",
      description: "Create cross-platform mobile applications using React Native and Flutter frameworks.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      category: "Mobile",
      price: 279,
      duration: "14 weeks",
      students: "1.9k",
      rating: 5,
      reviews: 950,
      icon: Code
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Popular <span className="text-blue-600">Courses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose from our comprehensive catalog of courses designed by industry experts 
            and delivered through engaging, hands-on learning experiences.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default Courses;