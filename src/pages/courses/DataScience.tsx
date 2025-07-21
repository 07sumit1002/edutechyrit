import React from 'react';
import { Clock, Users, Star, BarChart, Brain, TrendingUp } from 'lucide-react';

const CourseCard = ({ course }: { course: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="relative">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-48 object-cover"
      />
      <div className="absolute top-4 left-4 bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium">
        {course.level}
      </div>
      <div className="absolute top-4 right-4 bg-white bg-opacity-90 text-purple-600 px-2 py-1 rounded text-sm font-semibold">
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
        <button className="bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors text-sm font-medium">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const DataScience = () => {
  const courses = [
    {
      id: 1,
      title: "Python for Data Science",
      description: "Learn Python programming specifically for data analysis, visualization, and machine learning.",
      image: "https://images.pexels.com/photos/669610/pexels-photo-669610.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 249,
      duration: "10 weeks",
      students: "4.2k",
      rating: 5,
      reviews: 1680
    },
    {
      id: 2,
      title: "Machine Learning Fundamentals",
      description: "Understand ML algorithms, supervised and unsupervised learning with practical projects.",
      image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Intermediate",
      price: 349,
      duration: "14 weeks",
      students: "3.1k",
      rating: 5,
      reviews: 1240
    },
    {
      id: 3,
      title: "Data Visualization with Tableau",
      description: "Create compelling data visualizations and dashboards using Tableau and Power BI.",
      image: "https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 199,
      duration: "8 weeks",
      students: "2.8k",
      rating: 4,
      reviews: 890
    },
    {
      id: 4,
      title: "Deep Learning with TensorFlow",
      description: "Build neural networks and deep learning models for complex AI applications.",
      image: "https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Advanced",
      price: 449,
      duration: "18 weeks",
      students: "1.9k",
      rating: 5,
      reviews: 750
    },
    {
      id: 5,
      title: "SQL for Data Analysis",
      description: "Master SQL queries, database design, and data manipulation for analytics.",
      image: "https://images.pexels.com/photos/1181298/pexels-photo-1181298.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Beginner",
      price: 179,
      duration: "6 weeks",
      students: "3.7k",
      rating: 5,
      reviews: 1450
    },
    {
      id: 6,
      title: "Big Data Analytics",
      description: "Work with large datasets using Hadoop, Spark, and cloud-based analytics platforms.",
      image: "https://images.pexels.com/photos/1181671/pexels-photo-1181671.jpeg?auto=compress&cs=tinysrgb&w=600",
      level: "Advanced",
      price: 399,
      duration: "16 weeks",
      students: "1.5k",
      rating: 4,
      reviews: 620
    }
  ];

  const skills = [
    { icon: BarChart, name: "Data Analysis", description: "Python, R, Statistics" },
    { icon: Brain, name: "Machine Learning", description: "ML Algorithms, AI Models" },
    { icon: TrendingUp, name: "Data Visualization", description: "Tableau, Power BI, D3.js" }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-600 via-purple-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-6">
              Data Science <span className="text-purple-200">Courses</span>
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Unlock the power of data with our comprehensive data science curriculum. 
              Learn to extract insights, build predictive models, and drive business decisions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {skills.map((skill, index) => (
              <div key={index} className="text-center">
                <div className="bg-white bg-opacity-20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <skill.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
                <p className="text-purple-200 text-sm">{skill.description}</p>
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
              Master Data Science Skills
            </h2>
            <p className="text-lg text-gray-600">
              From data analysis to machine learning and AI
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {courses.map(course => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        </div>
      </section>

      {/* Career Outcomes */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Career Opportunities
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Analyst</h3>
              <p className="text-gray-600 text-sm">$65k - $95k avg salary</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">ML Engineer</h3>
              <p className="text-gray-600 text-sm">$90k - $140k avg salary</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Data Scientist</h3>
              <p className="text-gray-600 text-sm">$85k - $130k avg salary</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <BarChart className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Business Analyst</h3>
              <p className="text-gray-600 text-sm">$70k - $105k avg salary</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default DataScience;