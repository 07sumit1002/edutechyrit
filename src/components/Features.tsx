import React from 'react';
import { Video, AlignCenterVertical as Certificate, Users, Clock, Download, MessageSquare, Trophy, Smartphone } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }: {
  icon: React.ElementType;
  title: string;
  description: string;
}) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group">
    <div className="bg-gradient-to-br from-blue-100 to-indigo-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:from-blue-500 group-hover:to-indigo-500 transition-all duration-300">
      <Icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
    </div>
    <h3 className="text-xl font-semibold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </div>
);

const Features = () => {
  const features = [
    {
      icon: Video,
      title: "HD Video Lessons",
      description: "Learn with crystal-clear HD video content, interactive demonstrations, and step-by-step tutorials from industry experts."
    },
    {
      icon: Certificate,
      title: "Industry Certificates",
      description: "Earn recognized certificates upon completion that boost your resume and demonstrate your expertise to employers."
    },
    {
      icon: Users,
      title: "Expert Instructors",
      description: "Learn from seasoned professionals with years of industry experience and proven teaching methodologies."
    },
    {
      icon: Clock,
      title: "Flexible Learning",
      description: "Study at your own pace with 24/7 access to course materials, perfect for busy schedules and different time zones."
    },
    {
      icon: Download,
      title: "Offline Access",
      description: "Download lessons and study materials for offline learning, ensuring you can continue your education anywhere."
    },
    {
      icon: MessageSquare,
      title: "Community Support",
      description: "Join a vibrant community of learners, participate in discussions, and get help from peers and mentors."
    },
    {
      icon: Trophy,
      title: "Practical Projects",
      description: "Apply your knowledge through hands-on projects that build your portfolio and demonstrate real-world skills."
    },
    {
      icon: Smartphone,
      title: "Mobile Learning",
      description: "Access your courses on any device with our responsive platform and dedicated mobile apps for iOS and Android."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why Choose <span className="text-blue-600">Our Platform</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We provide everything you need to succeed in your learning journey, from world-class content 
            to comprehensive support systems.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;