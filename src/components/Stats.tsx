import React from 'react';
import { TrendingUp, Award, Globe, Heart } from 'lucide-react';

const StatCard = ({ icon: Icon, value, label, description }: {
  icon: React.ElementType;
  value: string;
  label: string;
  description: string;
}) => (
  <div className="text-center group">
    <div className="bg-white w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:shadow-xl transition-all duration-300">
      <Icon className="h-10 w-10 text-blue-600" />
    </div>
    <div className="text-4xl font-bold text-white mb-2">{value}</div>
    <div className="text-xl font-semibold text-blue-100 mb-2">{label}</div>
    <p className="text-blue-200 text-sm">{description}</p>
  </div>
);

const Stats = () => {
  const stats = [
    {
      icon: TrendingUp,
      value: "95%",
      label: "Success Rate",
      description: "Of our students achieve their learning goals"
    },
    {
      icon: Award,
      value: "10K+",
      label: "Certificates",
      description: "Industry-recognized certificates awarded"
    },
    {
      icon: Globe,
      value: "150+",
      label: "Countries",
      description: "Students learning from around the world"
    },
    {
      icon: Heart,
      value: "4.9/5",
      label: "Student Rating",
      description: "Average satisfaction score from reviews"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-4">
            Trusted by Students Worldwide
          </h2>
          <p className="text-xl text-blue-100 max-w-3xl mx-auto">
            Join thousands of learners who have transformed their careers with our comprehensive learning platform.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;