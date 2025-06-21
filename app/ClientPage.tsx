"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import {
  ArrowRight,
  Star,
  Users,
  Code,
  Smartphone,
  Globe,
  Mail,
  Phone,
  MapPin,
  Menu,
  X,
  Shield,
  Database,
} from "lucide-react"
import { submitContactForm } from "./actions"

export default function ClientPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState("")

  useEffect(() => {
    setIsVisible(true)
  }, [])

  useEffect(() => {
    // Add smooth scrolling to the document
    document.documentElement.style.scrollBehavior = "smooth"

    return () => {
      document.documentElement.style.scrollBehavior = "auto"
    }
  }, [])

  const services = [
    {
      icon: <Globe className="w-8 h-8 text-purple-600" />,
      title: "Web Development",
      description: "Build modern, responsive websites and web applications using cutting-edge technologies.",
    },
    {
      icon: <Smartphone className="w-8 h-8 text-purple-600" />,
      title: "Mobile App Development",
      description: "Create native and cross-platform mobile applications for iOS and Android.",
    },
    {
      icon: <Code className="w-8 h-8 text-purple-600" />,
      title: "Custom Software Solutions",
      description: "Develop tailored software solutions to meet your specific business requirements.",
    },
    {
      icon: <Shield className="w-8 h-8 text-purple-600" />,
      title: "Cybersecurity Solutions",
      description: "Protect your digital assets with comprehensive security audits and ethical hacking services.",
    },
    {
      icon: <Database className="w-8 h-8 text-purple-600" />,
      title: "Database Design",
      description: "Design and optimize databases for maximum performance and scalability.",
    },
    {
      icon: <Users className="w-8 h-8 text-purple-600" />,
      title: "Technical Consulting",
      description: "Get expert advice on technology stack selection and software architecture.",
    },
  ]

  const team = [
    {
      name: "Abdelrahman Ashraf",
      role: "Software Development",
      image: "/images/abdelrahman-profile.jpg",
      expertise: "Web & Mobile Dev",
    },
    {
      name: "Abdelrhman Ahmed",
      role: "Cyber Security",
      image: "/images/abdelrhman-ahmed-profile.jpg",
      expertise: "Ethical Hacking",
    },
    {
      name: "Abdallah Alaa",
      role: "Graphic Designer",
      image: "/images/abdallah-alaa-profile.jpg",
      expertise: "UI Designer",
    },
  ]

  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "TechStartup Inc.",
      content:
        "They delivered an amazing web application that exceeded our expectations. The code quality is outstanding!",
      rating: 5,
    },
    {
      name: "Ahmed Hassan",
      company: "E-Commerce Solutions",
      content:
        "Our mobile app has over 50K downloads thanks to their excellent development work. Highly professional team!",
      rating: 5,
    },
    {
      name: "Maria Garcia",
      company: "FinTech Innovations",
      content:
        "Their cybersecurity audit helped us identify and fix critical vulnerabilities. Our system is now bulletproof!",
      rating: 5,
    },
  ]

  const stats = [
    { number: "100+", label: "Projects Completed" },
    { number: "50+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "24/7", label: "Support Available" },
  ]

  const handleSubmit = async (formData: FormData) => {
    setIsSubmitting(true)
    setSubmitMessage("")

    const result = await submitContactForm(formData)

    setIsSubmitting(false)
    setSubmitMessage(result.message)

    if (result.success) {
      // Reset form on success
      const form = document.getElementById("contact-form") as HTMLFormElement
      form?.reset()
    }
  }

  const handleNavClick = (href: string) => {
    setIsMenuOpen(false)
    // Smooth scroll to section with offset for fixed header
    const element = document.querySelector(href)
    if (element) {
      const headerOffset = 80
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-purple-600">DevCraft</div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <button
                  onClick={() => handleNavClick("#home")}
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => handleNavClick("#services")}
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Services
                </button>
                <button
                  onClick={() => handleNavClick("#team")}
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Team
                </button>
                <button
                  onClick={() => handleNavClick("#testimonials")}
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Customer opinions
                </button>
                <button
                  onClick={() => handleNavClick("#contact")}
                  className="text-gray-900 hover:text-purple-600 transition-colors"
                >
                  Contact
                </button>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => handleNavClick("#home")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => handleNavClick("#services")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => handleNavClick("#team")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
              >
                Team
              </button>
              <button
                onClick={() => handleNavClick("#testimonials")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
              >
                Customer opinions
              </button>
              <button
                onClick={() => handleNavClick("#contact")}
                className="block w-full text-left px-3 py-2 text-gray-900 hover:text-purple-600 transition-colors"
              >
                Contact
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-16 bg-gradient-to-br from-purple-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`transform transition-all duration-1000 ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-10 opacity-0"}`}
            >
              <Badge className="mb-4 bg-purple-100 text-purple-800 hover:bg-purple-200">
                ✨ Trusted by 50+ Companies
              </Badge>
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
                Build Amazing
                <span className="text-purple-600"> Software Solutions</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                We create cutting-edge web applications, mobile apps, and custom software solutions that drive your
                business forward. From concept to deployment, we've got you covered.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-purple-600 hover:bg-purple-700 group">
                  Start Your Project
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button size="lg" variant="outline" className="border-purple-200 hover:bg-purple-50">
                  View Our Work
                </Button>
              </div>
            </div>
            <div
              className={`transform transition-all duration-1000 delay-300 ${isVisible ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
            >
              <div className="relative">
                <Image
                  src="/images/hero-software-development.png"
                  alt="Custom software development services"
                  width={600}
                  height={500}
                  className="relative rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-3xl md:text-4xl font-bold text-purple-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Development Services</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive software development solutions tailored to your business needs
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg"
              >
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-purple-100 rounded-full w-fit group-hover:bg-purple-200 transition-colors">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl font-semibold">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-gray-600 leading-relaxed">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Meet Our Development Team</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Skilled developers and security experts passionate about creating exceptional software
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg bg-white"
              >
                <CardContent className="p-6 text-center">
                  <div className="relative mb-6">
                    <Image
                      src={member.image || "/placeholder.svg"}
                      alt={member.name}
                      width={200}
                      height={200}
                      className="rounded-full mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{member.name}</h3>
                  <p className="text-purple-600 font-medium mb-2">{member.role}</p>
                  <p className="text-gray-600">{member.expertise}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Don't just take our word for it - hear from our satisfied clients
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                <CardContent className="p-8">
                  <div className="flex mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-gray-700 mb-6 text-lg leading-relaxed italic">"{testimonial.content}"</p>
                  <div>
                    <p className="font-semibold text-gray-900">{testimonial.name}</p>
                    <p className="text-purple-600">{testimonial.company}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Next Project?</h2>
              <p className="text-xl mb-8 text-purple-100">
                Let's discuss your software development needs and turn your ideas into reality. Get a free consultation
                today!
              </p>

              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-purple-200" />
                  <span className="text-purple-100">abde51654@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-purple-200" />
                  <span className="text-purple-100">+201066092459</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-purple-200" />
                  <span className="text-purple-100">Suez - Cairo - Egypt</span>
                </div>
              </div>
            </div>

            <Card className="shadow-2xl">
              <CardHeader>
                <CardTitle className="text-2xl">Start Your Project</CardTitle>
                <CardDescription>Tell us about your project and we'll get back to you within 24 hours.</CardDescription>
              </CardHeader>
              <CardContent>
                <form id="contact-form" action={handleSubmit} className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <Input name="firstName" placeholder="First Name" required />
                    <Input name="lastName" placeholder="Last Name" required />
                  </div>
                  <Input name="email" placeholder="Email Address" type="email" required />
                  <Input name="company" placeholder="Company Name" />
                  <select
                    name="serviceType"
                    className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    required
                  >
                    <option value="">Select Service Type</option>
                    <option value="web">Web Development</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="custom">Custom Software</option>
                    <option value="security">Cybersecurity</option>
                    <option value="consulting">Technical Consulting</option>
                  </select>
                  <Textarea name="message" placeholder="Describe your project requirements..." rows={4} required />
                  <Button type="submit" className="w-full bg-purple-600 hover:bg-purple-700" disabled={isSubmitting}>
                    {isSubmitting ? "Sending..." : "Send"}
                    {!isSubmitting && <ArrowRight className="ml-2 h-4 w-4" />}
                  </Button>
                  {submitMessage && (
                    <div
                      className={`text-center p-3 rounded-md ${submitMessage.includes("Thank you") ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"}`}
                    >
                      {submitMessage}
                    </div>
                  )}
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="text-2xl font-bold text-purple-400 mb-4">DevCraft</div>
              <p className="text-gray-400">
                Building innovative software solutions that drive business growth and digital transformation.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Development
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Mobile Apps
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Custom Software
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Cybersecurity
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    About Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Portfolio
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Careers
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li>abde51654@gmail.com</li>
                <li>+201066092459</li>
                <li>Suez - Cairo - Egypt</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 DevCraft. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
