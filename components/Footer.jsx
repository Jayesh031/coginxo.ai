'use client'
import React from 'react';
import { Mail, Phone, Github, Linkedin, Twitter, ChevronRight, MessageCircle, Brain, Cpu, Zap, Bot } from 'lucide-react';

export default function Footer() {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const FloatingAIIcon = ({ icon: Icon, className, delay = 0 }) => (
        <div 
            className={`absolute opacity-10 ${className}`}
            style={{
                animation: `float 6s ease-in-out infinite`,
                animationDelay: `${delay}s`
            }}
        >
            <Icon className="w-8 h-8 text-blue-400" />
        </div>
    );

    return (
        <>
            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0px) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(180deg); }
                }
                @keyframes pulse-glow {
                    0%, 100% { opacity: 0.3; transform: scale(1); }
                    50% { opacity: 0.6; transform: scale(1.1); }
                }
                @keyframes gradient-shift {
                    0% { background-position: 0% 50%; }
                    50% { background-position: 100% 50%; }
                    100% { background-position: 0% 50%; }
                }
                .animate-float { animation: float 6s ease-in-out infinite; }
                .animate-pulse-glow { animation: pulse-glow 4s ease-in-out infinite; }
                .animate-gradient-shift { 
                    background-size: 200% 200%;
                    animation: gradient-shift 8s ease-in-out infinite;
                }
            `}</style>
            
            <footer className="relative w-full overflow-hidden" role="contentinfo">
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
                    {/* Floating AI icons */}
                    <FloatingAIIcon icon={Brain} className="top-10 left-1/4" delay={0} />
                    <FloatingAIIcon icon={Cpu} className="top-32 right-1/3" delay={2} />
                    <FloatingAIIcon icon={Bot} className="bottom-20 left-1/3" delay={4} />
                    <FloatingAIIcon icon={Zap} className="top-1/2 right-1/4" delay={1} />
                    
                    {/* Animated gradient orbs */}
                    <div className="absolute top-0 right-0 h-48 w-48 md:h-64 md:w-64 rounded-full bg-gradient-to-r from-blue-400 to-cyan-300 blur-2xl animate-pulse-glow"></div>
                    <div className="absolute bottom-0 left-1/4 h-64 w-64 md:h-96 md:w-96 rounded-full bg-gradient-to-r from-violet-400 to-purple-300 blur-2xl animate-pulse-glow" style={{animationDelay: '2s'}}></div>
                    <div className="absolute top-1/3 right-1/4 h-32 w-32 md:h-48 md:w-48 rounded-full bg-gradient-to-r from-indigo-300 to-blue-200 blur-lg animate-pulse-glow" style={{animationDelay: '4s'}}></div>
                </div>

                {/* Main content */}
                <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16 border-t-4 border-violet-600">
                    <div className="grid grid-cols-1 gap-8 md:gap-12 lg:grid-cols-12">
                        {/* Brand section - left side */}
                        <div className="lg:col-span-5 xl:col-span-4">
                            <div className="group">
                                <h2 className="text-2xl pb-2 sm:text-3xl lg:text-4xl font-extrabold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-800 bg-clip-text text-transparent animate-gradient-shift">
                                    Cognixo.ai
                                </h2>
                                <div className="mt-2 h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full group-hover:w-24 transition-all duration-300"></div>
                            </div>

                            <p className="mt-4 sm:mt-6 text-gray-700 text-sm sm:text-base lg:text-lg leading-relaxed">
                                Transforming businesses with cutting-edge AI technology. From machine learning models to intelligent automation - we make AI work for you.
                            </p>

                            {/* Contact info */}
                            <div className="mt-6 sm:mt-8 space-y-3 sm:space-y-4">
                                <a
                                    href="mailto:contact@aisolutionspro.com"
                                    className="group flex items-center text-gray-700 transition-all hover:text-blue-600"
                                    aria-label="Send email to AI Solutions Pro"
                                >
                                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-violet-300 text-black group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        <Mail className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <span className="ml-3 text-sm sm:text-base break-all">contact@aisolutionspro.com</span>
                                </a>

                                <a 
                                    href="tel:+1234567890" 
                                    className="group flex items-center text-gray-700 transition-all hover:text-blue-600"
                                    aria-label="Call AI Solutions Pro"
                                >
                                    <div className="flex h-8 w-8 sm:h-10 sm:w-10 lg:h-12 lg:w-12 items-center justify-center rounded-xl bg-gradient-to-r from-cyan-400 to-violet-300 text-black group-hover:from-blue-600 group-hover:to-violet-600 group-hover:text-white transition-all duration-300 group-hover:scale-110">
                                        <Phone className="h-4 w-4 sm:h-5 sm:w-5" />
                                    </div>
                                    <span className="ml-3 text-sm sm:text-base">+1 (234) 567-8900</span>
                                </a>
                            </div>

                            {/* Social links */}
                            <div className="mt-6 sm:mt-8 flex space-x-3 sm:space-x-4">
                                <a 
                                    href="https://github.com/aisolutionspro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-300 text-black shadow-lg transition-all hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    aria-label="Visit our GitHub profile"
                                >
                                    <Github className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                                </a>
                                <a 
                                    href="https://linkedin.com/company/aisolutionspro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-300 text-black shadow-lg transition-all hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    aria-label="Visit our LinkedIn page"
                                >
                                    <Linkedin className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                                </a>
                                <a 
                                    href="https://twitter.com/aisolutionspro"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex h-10 w-10 sm:h-12 sm:w-12 lg:h-14 lg:w-14 items-center justify-center rounded-full bg-gradient-to-r from-cyan-400 to-violet-300 text-black shadow-lg transition-all hover:shadow-xl hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    aria-label="Follow us on Twitter"
                                >
                                    <Twitter className="h-4 w-4 sm:h-5 sm:w-5 lg:h-6 lg:w-6" />
                                </a>
                            </div>
                        </div>

                        {/* Right side - Content grid */}
                        <div className="lg:col-span-7 xl:col-span-8 mt-8 lg:mt-0">
                            <div className="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 xl:grid-cols-3">
                                {/* AI Solutions column */}
                                <div className="space-y-4">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 flex items-center">
                                        <Bot className="mr-2 h-5 w-5 text-blue-600" />
                                        AI Solutions
                                    </h3>
                                    <nav aria-label="AI Solutions">
                                        <ul className="space-y-2 sm:space-y-3">
                                            {[
                                                'Machine Learning Models',
                                                'Natural Language Processing',
                                                'Computer Vision',
                                                'Predictive Analytics',
                                                'AI Chatbots'
                                            ].map((item) => (
                                                <li key={item}>
                                                    <a 
                                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className="group flex items-center text-sm sm:text-base text-gray-600 transition-all hover:text-blue-600 focus:text-blue-600 focus:outline-none"
                                                    >
                                                        <ChevronRight className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-blue-400 group-hover:text-blue-600 transition-transform group-hover:translate-x-1" />
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>

                                {/* Services column */}
                                <div className="space-y-4">
                                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-900 flex items-center">
                                        <Cpu className="mr-2 h-5 w-5 text-violet-600" />
                                        Services
                                    </h3>
                                    <nav aria-label="Services">
                                        <ul className="space-y-2 sm:space-y-3">
                                            {[
                                                'AI Strategy Consulting',
                                                'Custom AI Development',
                                                'Data Science & Analytics',
                                                'AI Integration',
                                                'Training & Support'
                                            ].map((item) => (
                                                <li key={item}>
                                                    <a 
                                                        href={`#${item.toLowerCase().replace(/\s+/g, '-')}`}
                                                        className="group flex items-center text-sm sm:text-base text-gray-600 transition-all hover:text-violet-600 focus:text-violet-600 focus:outline-none"
                                                    >
                                                        <ChevronRight className="mr-1 sm:mr-2 h-3 w-3 sm:h-4 sm:w-4 text-violet-400 group-hover:text-violet-600 transition-transform group-hover:translate-x-1" />
                                                        {item}
                                                    </a>
                                                </li>
                                            ))}
                                        </ul>
                                    </nav>
                                </div>

                                {/* Quick Contact section */}
                                <div className="md:col-span-2 xl:col-span-1 mt-6 xl:mt-0">
                                    <div className="rounded-2xl bg-gradient-to-br from-blue-50 via-indigo-50 to-violet-50 p-4 sm:p-6 lg:p-8 shadow-xl border border-blue-100">
                                        <div className="flex items-center space-x-3">
                                            <div className="flex h-10 w-10 sm:h-10 sm:w-10 items-center justify-center rounded-full bg-gradient-to-r from-blue-500 to-violet-500 text-white animate-pulse-glow">
                                                <MessageCircle className="h-5 w-5 sm:h-6 sm:w-6" />
                                            </div>
                                            <h3 className="text-lg sm:text-lg font-bold text-gray-900">Let's Talk AI</h3>
                                        </div>

                                        {/* <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600 leading-relaxed">
                                            Ready to transform your business with AI? Get in touch for a free consultation.
                                        </p> */}

                                        {/* QR Code placeholder */}
                                        <div className="mt-3 sm:mt-4 flex justify-center">
                                        <div className="relative h-48 w-48 sm:h-48 sm:w-48 overflow-hidden rounded-lg border-4 border-white shadow-md">
                                            <img
                                                src="/Whatsapp_QR.jpg"
                                                alt="WhatsApp QR Code"
                                                className="h-full w-full object-cover"
                                            />
                                        </div>
                                        </div>

                                        <div className="mt-4 sm:mt-6 text-center">
                                            <p className="text-xs sm:text-sm text-gray-600 mb-3">Scan for instant chat or:</p>
                                            <a
                                                href="https://wa.me/1234567890"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center rounded-full bg-gradient-to-r from-blue-500 via-violet-500 to-blue-500 animate-gradient-shift px-4 py-2 sm:px-6 sm:py-3 text-sm sm:text-base font-semibold text-white shadow-lg transition-all hover:shadow-xl hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                                aria-label="Start WhatsApp conversation"
                                            >
                                                <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                                                Chat 
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bottom section */}
                    <div className="mt-12 sm:mt-10 lg:mt-12">
                        <div className="flex flex-col items-center justify-between border-t border-black pt-6 sm:pt-4 lg:pt-5 md:flex-row">
                            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
                                <p className="text-xs sm:text-sm lg:text-base text-gray-600">
                                    © {new Date().getFullYear()} AI Solutions Pro. All rights reserved.
                                </p>
                                <p className="text-xs sm:text-sm text-gray-500 mt-1 sm:mt-0">
                                    Powered by Advanced AI Technology
                                </p>
                            </div>

                            <nav className="mt-4 flex flex-wrap justify-center space-x-4 sm:space-x-6 lg:space-x-8 md:mt-0" aria-label="Legal links">
                                <a 
                                    href="/privacy-policy" 
                                    className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors focus:text-blue-600 focus:outline-none"
                                >
                                    Privacy Policy
                                </a>
                                <a 
                                    href="/terms-of-service" 
                                    className="text-xs sm:text-sm lg:text-base text-gray-600 hover:text-blue-600 transition-colors focus:text-blue-600 focus:outline-none"
                                >
                                    Terms of Service
                                </a>
                            </nav>
                        </div>
                    </div>
                </div>

                {/* SEO-friendly structured data */}
                <script type="application/ld+json" dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "AI Solutions Pro",
                        "description": "Leading AI solutions company specializing in machine learning, natural language processing, and intelligent automation",
                        "url": "https://aisolutionspro.com",
                        "logo": "https://aisolutionspro.com/logo.png",
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+1234567890",
                            "contactType": "customer service",
                            "email": "contact@aisolutionspro.com"
                        },
                        "sameAs": [
                            "https://github.com/aisolutionspro",
                            "https://linkedin.com/company/aisolutionspro",
                            "https://twitter.com/aisolutionspro"
                        ],
                        "address": {
                            "@type": "PostalAddress",
                            "addressCountry": "US"
                        },
                        "foundingDate": "2020",
                        "numberOfEmployees": "50-100",
                        "industry": "Artificial Intelligence",
                        "keywords": "AI solutions, machine learning, artificial intelligence, data science, automation, NLP, computer vision"
                    })
                }} />
            </footer>
        </>
    );
}