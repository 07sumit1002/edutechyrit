import React from 'react';
import { Users, Award, Briefcase, ThumbsUp, Target, Lightbulb, Eye, Shield } from 'lucide-react';

const TeamMember = ({ member }: { member: any }) => (
  <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
    <img
      src={member.image}
      alt={member.name}
      className="w-full h-64 object-cover"
    />
    <div className="p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
      <p className="text-blue-600 font-medium mb-3">{member.role}</p>
      <p className="text-gray-600 text-sm">{member.bio}</p>
    </div>
  </div>
);

const About = () => {
  const stats = [
    { icon: Briefcase, value: "2024", label: "Founded" },
    { icon: Users, value: "100+", label: "Clients Worldwide" },
    { icon: Award, value: "350+", label: "Projects Delivered" },
    { icon: ThumbsUp, value: "4 Awards", label: "Founder Achievements" }
  ];

  const values = [
    {
      icon: Target,
      title: "Commitment",
      description: "We go the extra mile to exceed expectations through timely delivery and impactful results."
    },
    {
      icon: Shield,
      title: "Ownership",
      description: "We take responsibility and deliver with precision, aligned with your business goals."
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "We embrace emerging technologies to create forward-looking, standout solutions."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "We value honest communication and keep clients informed at every step."
    }
  ];

  const team = [
    {
      id: 1,
      name: "Yashika",
      role: "CEO, Founder",
      bio: "A visionary leader focused on delivering innovative, scalable digital solutions that transform businesses and empower growth.",
      image: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 2,
      name: "Sumit Kumar",
      role: "Full Stack Developer & Trainer",
      bio: "Expert in building robust web applications and mentoring aspiring developers with a passion for clean code and scalable architecture.",
      image: "https://images.pexels.com/photos/6326377/pexels-photo-6326377.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 3,
      name: "Isha",
      role: "UI/UX Developer & Trainer",
      bio: "Specializes in creating user-centered designs and interactive experiences that drive engagement and usability.",
      image: "https://images.pexels.com/photos/7647990/pexels-photo-7647990.jpeg?auto=compress&cs=tinysrgb&w=400"
    },
    {
      id: 4,
      name: "Vinay Sheoran",
      role: "Data Scientist & Trainer",
      bio: "Data enthusiast with deep experience in predictive analytics and machine learning, committed to data-driven decision making.",
      image: "https://images.pexels.com/photos/6326370/pexels-photo-6326370.jpeg?auto=compress&cs=tinysrgb&w=400"
    }
  ];


  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            The Story of <span className="text-blue-200">YR IT Solutions</span>
          </h1>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            We are a results-driven tech company empowering businesses with custom apps, digital marketing, and AI-powered solutions.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Some Quick Facts</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="h-8 w-8 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              At YR IT Solutions, ethics, integrity, and excellence drive every decision and partnership.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <value.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Founding Member</h2>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map(member => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-8">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
            <p>
              YR IT Solutions started as a small initiative by a group of passionate educators and 
              technologists who saw the gap between traditional education and industry needs.
            </p>
            <p>
              What began as weekend coding workshops in a small community center has grown into a 
              global platform serving students in over 150 countries, with partnerships with leading 
              tech companies and universities.
            </p>
            <p>
              Today, we continue to innovate in education technology, constantly updating our curriculum 
              to reflect the latest industry trends and ensuring our students are always ahead of the curve.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Have a Question?</h2>
          <p className="text-blue-100 mb-8">
            We do more than connect — we relate to your business and provide cost-effective, tailored solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              Schedule a Meeting
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg hover:bg-white hover:text-blue-600 transition-colors font-semibold">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;