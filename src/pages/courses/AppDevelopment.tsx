import React from 'react';
import { Clock, Users, Star, Smartphone, Tablet, Monitor } from 'lucide-react';

const CourseCard = ({ course }: { course: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-xs font-medium">
        {course.level}
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-green-600 px-2 py-1 rounded text-sm font-semibold">
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
        <button className="bg-green-600 text-white px-4 py-2 rounded-lg hover:bg-green-700 transition-colors text-sm font-medium">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const AppDevelopment = () => {
  const courses = [
    {
      id: 1,
      title: "React Native Development",
      description: "Build cross-platform mobile apps using React Native for iOS and Android.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 329,
      duration: "14 weeks",
      students: "2.9k",
      rating: 5,
      reviews: 1180
    },
    {
      id: 2,
      title: "Flutter Development",
      description: "Create beautiful native apps for mobile, web, and desktop from a single codebase.",
      image: "https://images.pexels.com/photos/4164418/pexels-photo-4164418.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 349,
      duration: "16 weeks",
      students: "2.5k",
      rating: 5,
      reviews: 1050
    },
    {
      id: 3,
      title: "iOS Development with Swift",
      description: "Master native iOS app development using Swift and Xcode for iPhone and iPad.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 299,
      duration: "12 weeks",
      students: "3.2k",
      rating: 5,
      reviews: 1340
    },
    {
      id: 4,
      title: "Android Development with Kotlin",
      description: "Build native Android applications using Kotlin and Android Studio.",
      image: "https://images.pexels.com/photos/607812/pexels-photo-607812.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 289,
      duration: "12 weeks",
      students: "2.8k",
      rating: 4,
      reviews: 1120
    },
    {
      id: 5,
      title: "Progressive Web Apps",
      description: "Create app-like experiences on the web with PWA technologies and service workers.",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 249,
      duration: "10 weeks",
      students: "2.1k",
      rating: 5,
      reviews: 850
    },
    {
      id: 6,
      title: "App Store Optimization",
      description: "Learn to publish, market, and optimize your apps for maximum visibility and downloads.",
      image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 179,
      duration: "6 weeks",
      students: "1.7k",
      rating: 4,
      reviews: 680
    }
  ];

  const platforms = [
    { icon: Smartphone, name: "Mobile Apps", description: "iOS & Android Native" },
    { icon: Tablet, name: "Cross-Platform", description: "React Native, Flutter" },
    { icon: Monitor, name: "Web Apps", description: "PWAs, Responsive Design" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-green-600 via-green-700 to-teal-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              App Development <span className="text-green-200">Courses</span>
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Build the next generation of mobile and web applications. Learn native development, 
              cross-platform frameworks, and modern app deployment strategies.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {platforms.map((platform, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <platform.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{platform.name}</h3>
                <p className="text-green-200 text-sm">{platform.description}</p>
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
              Choose Your Platform
            </h2>
            <p className="text-lg text-gray-600">
              Native, cross-platform, or web - we cover all modern app development approaches
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Development Path */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            App Development Technologies
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">React Native</h3>
              <p className="text-gray-600 text-sm">Cross-platform development</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Tablet className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Flutter</h3>
              <p className="text-gray-600 text-sm">Google's UI toolkit</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Smartphone className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Swift/Kotlin</h3>
              <p className="text-gray-600 text-sm">Native development</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Monitor className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">PWAs</h3>
              <p className="text-gray-600 text-sm">Progressive web apps</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AppDevelopment;