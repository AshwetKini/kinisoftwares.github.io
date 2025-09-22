import React, { useState, useEffect, useRef } from 'react';
import { 
  Code, 
  Smartphone, 
  Database, 
  Globe, 
  Server, 
  Users, 
  ArrowRight, 
  Phone, 
  Mail, 
  MapPin,
  Star,
  CheckCircle,
  Menu,
  X,
  MessageCircle,
  Zap,
  Shield,
  Rocket,
  Award,
  TrendingUp,
  Eye,
  MousePointer,
  Layers,
  Cpu,
  Cloud,
  Lock,
  Sparkles,
  Play,
  ChevronDown
} from 'lucide-react';
import SEOMeta from '../components/SEOMeta';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState({});
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const heroRef = useRef(null);
  const servicesRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Intersection Observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    document.querySelectorAll('[id]').forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      icon: <Code className="w-12 h-12" />,
      title: "Website Development",
      description: "Cutting-edge websites with modern frameworks, responsive design, and lightning-fast performance.",
      features: ["React/Next.js", "Mobile-First Design", "SEO Optimized", "Performance Focused"],
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10"
    },
    {
      icon: <Smartphone className="w-12 h-12" />,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications with seamless user experiences.",
      features: ["iOS & Android", "React Native", "Flutter", "App Store Optimization"],
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10"
    },
    {
      icon: <Database className="w-12 h-12" />,
      title: "CRM Solutions",
      description: "Comprehensive Customer Relationship Management systems to streamline operations.",
      features: ["Custom Workflows", "Analytics Dashboard", "Integration Ready", "Cloud-Based"],
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10"
    },
    {
      icon: <Globe className="w-12 h-12" />,
      title: "Custom Software",
      description: "Tailored software solutions designed for your unique business requirements.",
      features: ["Scalable Architecture", "API Development", "Database Design", "Security First"],
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10"
    },
    {
      icon: <Server className="w-12 h-12" />,
      title: "Web Hosting",
      description: "Enterprise-grade hosting solutions with 99.9% uptime guarantee.",
      features: ["SSD Storage", "CDN Integration", "SSL Certificates", "24/7 Monitoring"],
      color: "from-indigo-500 to-purple-500",
      bgColor: "bg-indigo-500/10"
    },
    {
      icon: <Users className="w-12 h-12" />,
      title: "IT Consulting",
      description: "Strategic technology guidance to optimize your digital infrastructure.",
      features: ["Digital Strategy", "Tech Audits", "Process Optimization", "Training & Support"],
      color: "from-teal-500 to-cyan-500",
      bgColor: "bg-teal-500/10"
    }
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: <Rocket className="w-8 h-8" /> },
    { number: "200+", label: "Happy Clients", icon: <Users className="w-8 h-8" /> },
    { number: "5+", label: "Years Experience", icon: <Award className="w-8 h-8" /> },
    { number: "24/7", label: "Support Available", icon: <Shield className="w-8 h-8" /> }
  ];

  const testimonials = [
    {
      name: "Rajesh Sharma",
      company: "TechCorp Solutions",
      text: "Kini Softwares delivered an exceptional website that exceeded our expectations. Their attention to detail and professionalism is outstanding.",
      rating: 5,
      image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Priya Patel",
      company: "Digital Marketing Pro",
      text: "The mobile app they developed for us has significantly improved our customer engagement. Highly recommended!",
      rating: 5,
      image: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    },
    {
      name: "Amit Kumar",
      company: "StartUp Ventures",
      text: "Their CRM solution streamlined our entire sales process. The team is incredibly skilled and responsive.",
      rating: 5,
      image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
    }
  ];

  const technologies = [
    { name: "React", icon: "⚛️" },
    { name: "Node.js", icon: "🐢" },
    { name: "Next.js", icon: "📦" },
    {name: "NestJS", icon: "🐦" },
    { name: "React Native", icon: "📱" },
    {name: "Core Android", icon: "🤖" },
    { name: "Python", icon: "🐍" },
    { name: "AWS", icon: "☁️" },
    { name: "MongoDB", icon: "🍃" },
    { name: "Docker", icon: "🐳" },
    { name: "Flutter", icon: "💙" },
    { name: "Firebase", icon: "🔥" }
  ];

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">

      <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* SEO Meta Tags */}
      <SEOMeta
        title="Kini Softwares - Premium IT Solutions & Development Services"
        description="Leading IT solutions company providing website development, mobile apps, CRM systems, custom software, and hosting services. Founded by Ashwet Kini in Nallasopara West."
        keywords="Top IT solutions company,best IT solutions company,web development, mobile apps, CRM systems, custom software, hosting, Kini Softwares, Ashwet Kini, Nallasopara West"
        url="/"
        image="/kinisoftwareslogo.png"
        type="website"
      />
      {/* Custom Cursor */}
      <div 
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference transition-transform duration-100 ease-out"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: `scale(${scrollY > 100 ? 1.5 : 1})`
        }}
      />

      {/* Particle Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 4}s`
            }}
          />
        ))}
      </div>

      {/* Navigation */}
    <nav
  className={`fixed w-full z-40 transition-all duration-500 ${
    scrollY > 50
      ? 'bg-black/80 backdrop-blur-2xl border-b border-white/10 shadow-2xl'
      : 'bg-transparent'
  }`}
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex justify-between items-center py-4">
      <div className="flex items-center space-x-4 group">
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50 group-hover:opacity-75 transition-opacity duration-300" />
          <img
            src="/kinisoftwares.github.io/kinisoftwareslogo.png"
            alt="Kini Softwares Logo"
            className="relative h-12 w-12 rounded-xl object-cover"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
        </div>
        <div className="text-3xl font-black bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
          Kini{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
            Softwares
          </span>
        </div>
      </div>
            
            <div className="hidden md:flex space-x-8">
              {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item, index) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="relative text-white/80 hover:text-white transition-all duration-300 font-medium text-lg group"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300" />
                </a>
              ))}
            </div>

            <button
              className="md:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors duration-300"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ${
          isMenuOpen ? 'max-h-64 opacity-100' : 'max-h-0 opacity-0'
        } overflow-hidden bg-black/90 backdrop-blur-2xl border-t border-white/10`}>
          <div className="px-4 py-6 space-y-4">
            {['Home', 'Services', 'About', 'Portfolio', 'Contact'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="block text-white/80 hover:text-white transition-colors duration-300 py-2 text-lg"
                onClick={() => setIsMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
          <div 
            className="absolute inset-0 opacity-30"
            style={{
              background: `radial-gradient(circle at ${mousePosition.x}px ${mousePosition.y}px, rgba(168, 85, 247, 0.15) 0%, transparent 50%)`
            }}
          />
        </div>

        {/* Floating Geometric Shapes */}
        <div className="absolute inset-0">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className={`absolute animate-float-${i % 3 + 1}`}
              style={{
                left: `${10 + (i * 12)}%`,
                top: `${20 + (i * 8)}%`,
                animationDelay: `${i * 0.5}s`
              }}
            >
              <div className={`w-${8 + (i % 3) * 4} h-${8 + (i % 3) * 4} bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl`} />
            </div>
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="space-y-8 animate-fade-in-up">
            {/* Main Heading */}
            <div className="space-y-4">
              <div className="inline-flex items-center space-x-2 bg-white/5 backdrop-blur-xl rounded-full px-6 py-3 border border-white/10">
                <Sparkles className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">Welcome to the Future of IT</span>
              </div>
              
              <h1 className="text-6xl md:text-8xl font-black leading-tight">
                <span className="block text-white mb-4">Premium</span>
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                  IT Solutions
                </span>
                <span className="block text-white/90 text-4xl md:text-6xl mt-4">for Modern Business</span>
              </h1>
            </div>

            <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Transform your digital presence with cutting-edge websites, mobile apps, and custom software solutions that drive growth and innovation.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-8">
              <button className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-10 py-5 rounded-2xl font-bold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="relative flex items-center space-x-3">
                  <span>Start Your Project</span>
                  <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </button>
              
              <button className="group relative border-2 border-white/20 text-white px-10 py-5 rounded-2xl font-bold text-lg backdrop-blur-xl hover:bg-white/10 transition-all duration-300 hover:scale-105 hover:border-purple-400/50">
                <div className="flex items-center space-x-3">
                  <Play className="w-6 h-6" />
                  <span>Watch Demo</span>
                </div>
              </button>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
              <ChevronDown className="w-8 h-8 text-white/60" />
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 to-pink-900/10" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div 
                key={index} 
                className={`text-center group transform transition-all duration-500 hover:scale-110 ${
                  isVisible.home ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-300">
                  <div className="text-purple-400 mb-4 flex justify-center group-hover:scale-110 transition-transform duration-300">
                    {stat.icon}
                  </div>
                  <div className="text-4xl md:text-5xl font-black text-white mb-2 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-gray-300 text-lg font-medium">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/20 mb-8">
              <Zap className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Our Expertise</span>
            </div>
            
            <h2 className="text-5xl md:text-7xl font-black text-white mb-8">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Comprehensive IT solutions designed to transform your business and accelerate growth
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`group relative bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-2xl rounded-3xl p-8 border border-white/10 hover:border-purple-500/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/10 cursor-pointer ${
                  isVisible.services ? 'animate-fade-in-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${index * 150}ms` }}
                onMouseEnter={() => setActiveService(index)}
              >
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-10 rounded-3xl transition-opacity duration-500`} />
                
                {/* Icon */}
                <div className={`${service.bgColor} rounded-2xl p-4 w-fit mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`text-transparent bg-clip-text bg-gradient-to-r ${service.color}`}>
                    {service.icon}
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-purple-300 transition-colors duration-300">
                  {service.title}
                </h3>
                
                <p className="text-gray-300 leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features */}
                <div className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-2">
                      <CheckCircle className="w-4 h-4 text-green-400" />
                      <span className="text-sm text-gray-400">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-600/0 via-purple-600/5 to-pink-600/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technology Stack */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-black via-purple-900/10 to-black" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Technologies We <span className="text-purple-400">Master</span>
            </h3>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {technologies.map((tech, index) => (
              <div
                key={index}
                className="group bg-white/5 backdrop-blur-xl rounded-2xl px-6 py-4 border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-110 hover:bg-white/10"
              >
                <div className="flex items-center space-x-3">
                  <span className="text-2xl">{tech.icon}</span>
                  <span className="text-white font-medium">{tech.name}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-pink-900/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className={`space-y-8 ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`}>
              <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/20">
                <Award className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300 font-medium">About Us</span>
              </div>

              <h2 className="text-5xl md:text-6xl font-black text-white leading-tight">
                About <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Kini Softwares</span>
              </h2>
              
              <div className="space-y-6 text-lg text-gray-300 leading-relaxed">
                <p>
                  Founded by <strong className="text-purple-400 font-bold">Ashwet Kini</strong>, Kini Softwares stands at the forefront of digital innovation, transforming businesses through cutting-edge technology solutions.
                </p>
                <p>
                  We specialize in creating exceptional digital experiences that drive growth, enhance efficiency, and deliver measurable results. Our team of expert developers and designers work tirelessly to bring your vision to life.
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6">
                {[
                  { icon: <Rocket className="w-6 h-6" />, text: "Innovation First" },
                  { icon: <Shield className="w-6 h-6" />, text: "Security Focused" },
                  { icon: <Zap className="w-6 h-6" />, text: "Lightning Fast" },
                  { icon: <Users className="w-6 h-6" />, text: "Client Centric" }
                ].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 group">
                    <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <span className="text-gray-300 font-medium">{item.text}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={`relative ${isVisible.about ? 'animate-fade-in-up' : 'opacity-0'}`} style={{ animationDelay: '300ms' }}>
              <div className="relative bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10">
                {/* Founder Card */}
                <div className="text-center">
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-2xl opacity-50" />
                    <div className="relative w-32 h-32 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto flex items-center justify-center">
                      <Users className="w-16 h-16 text-white" />
                    </div>
                  </div>
                  
                  <h3 className="text-3xl font-bold text-white mb-2">Ashwet Kini</h3>
                  <p className="text-purple-400 text-xl mb-6 font-medium">Founder & CEO</p>
                  <p className="text-gray-300 leading-relaxed">
                    Visionary leader with extensive experience in software development, business strategy, and digital transformation.
                  </p>
                  
                  <div className="mt-8 flex justify-center space-x-4">
                    <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                      <Mail className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="bg-white/10 rounded-full p-3 hover:bg-white/20 transition-colors duration-300 cursor-pointer">
                      <Phone className="w-5 h-5 text-purple-400" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/10 via-transparent to-pink-900/10" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/20 mb-8">
              <Star className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Testimonials</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Clients Say</span>
            </h2>
          </div>

          <div className="relative max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-12 border border-white/10">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-8 h-8 text-yellow-400 fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-12 italic">
                  "{testimonials[currentTestimonial].text}"
                </blockquote>

                {/* Client Info */}
                <div className="flex items-center justify-center space-x-6">
                  <img
                    src={testimonials[currentTestimonial].image}
                    alt={testimonials[currentTestimonial].name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-purple-500"
                  />
                  <div className="text-left">
                    <div className="text-xl font-bold text-white">
                      {testimonials[currentTestimonial].name}
                    </div>
                    <div className="text-purple-400 font-medium">
                      {testimonials[currentTestimonial].company}
                    </div>
                  </div>
                </div>

                {/* Testimonial Indicators */}
                <div className="flex justify-center space-x-3 mt-12">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentTestimonial 
                          ? 'bg-purple-500 scale-125' 
                          : 'bg-white/30 hover:bg-white/50'
                      }`}
                      onClick={() => setCurrentTestimonial(index)}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-32 relative">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-pink-900/20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-purple-500/10 backdrop-blur-xl rounded-full px-6 py-3 border border-purple-500/20 mb-8">
              <MessageCircle className="w-5 h-5 text-purple-400" />
              <span className="text-purple-300 font-medium">Get In Touch</span>
            </div>
            
            <h2 className="text-5xl md:text-6xl font-black text-white mb-8">
              Let's Build Something <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">Amazing</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to transform your business? Let's discuss your project and create something extraordinary together.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="space-y-8">
              {[
                { icon: <Phone className="w-8 h-8" />, title: "Phone", info: "+91 8329833526", color: "from-green-500 to-emerald-500" },
                { icon: <Mail className="w-8 h-8" />, title: "Email", info: "ashukini3@gmail.com", color: "from-blue-500 to-cyan-500" },
                { icon: <MapPin className="w-8 h-8" />, title: "Address", info: "Kini Softwares Office Location", color: "from-purple-500 to-pink-500" }
              ].map((contact, index) => (
                <div key={index} className="group flex items-center space-x-6 p-6 bg-white/5 backdrop-blur-xl rounded-2xl border border-white/10 hover:border-purple-500/30 transition-all duration-300 hover:scale-105">
                  <div className={`bg-gradient-to-r ${contact.color} p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300`}>
                    <div className="text-white">
                      {contact.icon}
                    </div>
                  </div>
                  <div>
                    <div className="text-white font-bold text-xl mb-1">{contact.title}</div>
                    <div className="text-gray-300 text-lg">{contact.info}</div>
                  </div>
                </div>
              ))}

              {/* Google Maps */}
              <div className="bg-white/5 backdrop-blur-xl rounded-2xl p-6 border border-white/10">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.844247626082!2d72.7659409!3d19.417757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ab2d24be5ddf%3A0xff576ee3e7b15de0!2sKini%20Softwares!5e0!3m2!1sen!2sin!4v1691500000000!5m2!1sen!2sin"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="rounded-xl"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-2xl rounded-3xl p-8 border border-white/10">
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <input
                      type="text"
                      placeholder="Your Name"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Your Email"
                      className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                    />
                  </div>
                </div>
                
                <div>
                  <input
                    type="text"
                    placeholder="Subject"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300"
                  />
                </div>
                
                <div>
                  <textarea
                    rows={6}
                    placeholder="Tell us about your project..."
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-purple-400 focus:bg-white/20 transition-all duration-300 resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 rounded-xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/25 transform hover:scale-105 transition-all duration-300"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-16 border-t border-white/10 relative">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl blur-lg opacity-50" />
                <img 
                  src="/kinisoftwareslogo.png" 
                  alt="Kini Softwares Logo" 
                  className="relative h-12 w-12 rounded-xl object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              </div>
              <div className="text-3xl font-black text-white">
                Kini <span className="text-purple-400">Softwares</span>
              </div>
            </div>
            
            <p className="text-gray-400 mb-8 text-lg">
              Transforming businesses through innovative IT solutions
            </p>
            
            <div className="flex justify-center space-x-6 mb-8">
              {[
                { icon: <Mail className="w-6 h-6" />, href: "mailto:info@kinisoftwares.com" },
                { icon: <Phone className="w-6 h-6" />, href: "tel:+918329833526" },
                { icon: <MessageCircle className="w-6 h-6" />, href: "https://wa.me/918329833526" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="bg-white/10 p-3 rounded-full hover:bg-purple-500/20 transition-all duration-300 hover:scale-110"
                >
                  <div className="text-purple-400">
                    {social.icon}
                  </div>
                </a>
              ))}
            </div>
            
            <p className="text-gray-500 text-sm">
              © 2024 Kini Softwares. All rights reserved. | Founded by Ashwet Kini
            </p>
          </div>
        </div>
      </footer>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/918329833526"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-8 right-8 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-2xl hover:shadow-green-500/25 transform hover:scale-110 transition-all duration-300 z-50 animate-pulse"
      >
        <MessageCircle className="w-8 h-8" />
      </a>

      {/* Scroll to Top Button */}
      {scrollY > 500 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 left-8 bg-white/10 backdrop-blur-xl text-white p-3 rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 hover:scale-110 z-50"
        >
          <ArrowRight className="w-6 h-6 rotate-[-90deg]" />
        </button>
      )}
    </div>
  );
}

export default App;