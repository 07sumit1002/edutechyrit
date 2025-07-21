import React from 'react';
import { Calendar, Clock, Award, CheckCircle, Users, Star } from 'lucide-react';

const ProgramCard = ({ program }: { program: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-2xl font-bold">{program.title}</h3>
        <div className="bg-white bg-opacity-20 px-3 py-1 rounded-full text-sm font-medium">
          {program.duration}
        </div>
      </div>
      <p className="text-blue-100 mb-4">{program.description}</p>
      <div className="text-3xl font-bold">${program.price}</div>
    </div>
    
    <div className="p-6">
      <div className="grid grid-cols-2 gap-4 mb-6">
        <div className="flex items-center text-gray-600">
          <Calendar className="h-4 w-4 mr-2" />
          <span className="text-sm">{program.startDate}</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Users className="h-4 w-4 mr-2" />
          <span className="text-sm">{program.students} enrolled</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Clock className="h-4 w-4 mr-2" />
          <span className="text-sm">{program.hours} hours</span>
        </div>
        <div className="flex items-center text-gray-600">
          <Award className="h-4 w-4 mr-2" />
          <span className="text-sm">Certificate included</span>
        </div>
      </div>
      
      <div className="mb-6">
        <h4 className="font-semibold text-gray-900 mb-3">What you'll learn:</h4>
        <ul className="space-y-2">
          {program.features.map((feature: string, index: number) => (
            <li key={index} className="flex items-center text-gray-600 text-sm">
              <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
              {feature}
            </li>
          ))}
        </ul>
      </div>
      
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div className="flex text-yellow-400 mr-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className={`h-4 w-4 ${i < program.rating ? 'fill-current' : 'text-gray-300'}`} />
            ))}
          </div>
          <span className="text-gray-600 text-sm">({program.reviews})</span>
        </div>
        <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
          Enroll Now
        </button>
      </div>
    </div>
  </div>
);

const Programs = () => {
  const programs = [
    {
      id: 1,
      title: "30-Day Web Dev Bootcamp",
      description: "Intensive program to get you job-ready in web development in just 30 days.",
      duration: "30 Days",
      price: 999,
      startDate: "Every Monday",
      students: "2.5k",
      hours: "120",
      rating: 5,
      reviews: 890,
      features: [
        "HTML, CSS, JavaScript fundamentals",
        "React.js framework mastery",
        "Backend development with Node.js",
        "Database integration",
        "Portfolio project development",
        "Job interview preparation"
      ]
    },
    {
      id: 2,
      title: "45-Day Full Stack Program",
      description: "Comprehensive full-stack development program with hands-on projects and mentorship.",
      duration: "45 Days",
      price: 1499,
      startDate: "1st & 15th",
      students: "1.8k",
      hours: "180",
      rating: 5,
      reviews: 720,
      features: [
        "Frontend development (React/Vue)",
        "Backend APIs and databases",
        "DevOps and deployment",
        "Testing and debugging",
        "Real-world project portfolio",
        "1-on-1 mentorship sessions"
      ]
    },
    {
      id: 3,
      title: "6-Month Career Transformation",
      description: "Complete career change program with guaranteed job placement assistance.",
      duration: "6 Months",
      price: 4999,
      startDate: "Monthly",
      students: "950",
      hours: "480",
      rating: 5,
      reviews: 450,
      features: [
        "Multiple technology tracks",
        "Industry capstone projects",
        "Professional portfolio development",
        "Resume and LinkedIn optimization",
        "Mock interviews and feedback",
        "Job placement guarantee"
      ]
    },
    {
      id: 4,
      title: "30-Day Data Science Sprint",
      description: "Fast-track your data science career with this intensive hands-on program.",
      duration: "30 Days",
      price: 1199,
      startDate: "Every Monday",
      students: "1.2k",
      hours: "150",
      rating: 4,
      reviews: 380,
      features: [
        "Python for data analysis",
        "Machine learning algorithms",
        "Data visualization techniques",
        "Statistical analysis methods",
        "Real dataset projects",
        "Industry case studies"
      ]
    },
    {
      id: 5,
      title: "45-Day UX Design Intensive",
      description: "Transform into a UX designer with this comprehensive design thinking program.",
      duration: "45 Days",
      price: 1299,
      startDate: "Bi-weekly",
      students: "850",
      hours: "135",
      rating: 5,
      reviews: 320,
      features: [
        "Design thinking methodology",
        "User research and testing",
        "Wireframing and prototyping",
        "Design system creation",
        "Portfolio development",
        "Client presentation skills"
      ]
    },
    {
      id: 6,
      title: "6-Month Tech Leadership",
      description: "Advanced program for experienced developers transitioning to leadership roles.",
      duration: "6 Months",
      price: 3999,
      startDate: "Quarterly",
      students: "420",
      hours: "360",
      rating: 5,
      reviews: 180,
      features: [
        "Technical architecture design",
        "Team management skills",
        "Project planning and execution",
        "Stakeholder communication",
        "Performance optimization",
        "Leadership mentorship"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Intensive Learning <span className="text-blue-200">Programs</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Fast-track your career with our structured, intensive programs designed to get you 
            job-ready in the shortest time possible with maximum impact.
          </p>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Choose Your Learning Journey
            </h2>
            <p className="text-lg text-gray-600">
              From quick skill boosts to complete career transformations
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {programs.map(program => (
              <ProgramCard key={program.id} program={program} />
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Why Choose Our Programs?
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Time-Efficient</h3>
              <p className="text-gray-600 text-sm">Accelerated learning paths designed for busy professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Expert Mentorship</h3>
              <p className="text-gray-600 text-sm">1-on-1 guidance from industry professionals</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Job Guarantee</h3>
              <p className="text-gray-600 text-sm">Placement assistance and career support included</p>
            </div>
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <CheckCircle className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Practical Focus</h3>
              <p className="text-gray-600 text-sm">Real projects and portfolio development</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Transform Your Career?
          </h2>
          <p className="text-blue-100 mb-8">
            Join thousands of successful graduates who have accelerated their careers with our intensive programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Schedule a Call
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Download Brochure
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Programs;