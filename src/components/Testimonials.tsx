import React from 'react';
import { Star, Quote } from 'lucide-react';

const TestimonialCard = ({ testimonial }: { testimonial: any }) => (
  <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
    <div className="flex items-center mb-4">
      <Quote className="h-8 w-8 text-blue-600 mr-3" />
      <div className="flex text-yellow-400">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className="h-5 w-5 fill-current" />
        ))}
      </div>
    </div>
    
    <p className="text-gray-700 mb-6 italic leading-relaxed">
      "{testimonial.content}"
    </p>
    
    <div className="flex items-center">
      <img
        src={testimonial.avatar}
        alt={testimonial.name}
        className="w-12 h-12 rounded-full object-cover mr-4"
      />
      <div>
        <div className="font-semibold text-gray-900">{testimonial.name}</div>
        <div className="text-gray-600 text-sm">{testimonial.role}</div>
        <div className="text-blue-600 text-sm">{testimonial.company}</div>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      content: "The courses here completely transformed my career. The instructors are world-class, and the hands-on projects gave me the confidence to land my dream job as a full-stack developer.",
      name: "Sarah Johnson",
      role: "Senior Developer",
      company: "Tech Innovations Inc.",
      avatar: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 2,
      content: "I went from zero knowledge to building my own mobile app in just 3 months. The structured curriculum and supportive community made all the difference in my learning journey.",
      name: "Michael Chen",
      role: "Mobile App Developer",
      company: "StartupX",
      avatar: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 3,
      content: "The UI/UX design course exceeded my expectations. The practical assignments and feedback from instructors helped me build a portfolio that got me hired at a top design agency.",
      name: "Emily Rodriguez",
      role: "UX Designer",
      company: "Creative Studios",
      avatar: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 4,
      content: "As a working professional, the flexible learning schedule was perfect. I could study at my own pace while working full-time and still achieve my certification goals.",
      name: "David Thompson",
      role: "Data Analyst",
      company: "Analytics Pro",
      avatar: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 5,
      content: "The cybersecurity course was incredibly comprehensive. The real-world scenarios and practical labs prepared me for the challenges I face in my current role as a security specialist.",
      name: "Lisa Park",
      role: "Security Specialist",
      company: "SecureNet Solutions",
      avatar: "https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150"
    },
    {
      id: 6,
      content: "The machine learning bootcamp opened up a whole new world for me. The projects were challenging but rewarding, and now I'm working as an AI engineer at a fortune 500 company.",
      name: "James Wilson",
      role: "AI Engineer",
      company: "Global Tech Corp",
      avatar: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150"
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our <span className="text-blue-600">Students Say</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our successful graduates have to say 
            about their transformative learning experience.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map(testimonial => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;