'use client'
import { useState, useEffect, useRef } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu, X, Home, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function Navbar() {
    const pathname = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);
    const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false);
    const servicesDropdownRef = useRef(null);

    // Optimize scroll handling with throttling
    useEffect(() => {
        let ticking = false;
        const handleScroll = () => {
            if (!ticking) {
                requestAnimationFrame(() => {
                    setScrolled(window.scrollY > 20);
                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll, { passive: true });
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Prevent body scroll when mobile menu is open
    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
        
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isMenuOpen]);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (servicesDropdownRef.current && !servicesDropdownRef.current.contains(event.target)) {
                setIsServicesOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
    }, [pathname]);

    const navItems = [
        { name: 'Home', href: '/', icon: <Home size={16} /> },
        { name: 'About Us', href: '/about' },
        { 
            name: 'Services', 
            href: '/services', 
            hasDropdown: true,
            dropdownItems: [
                { name: 'AI Solutions', href: '/services/ai-solutions' },
                { name: 'Data Services', href: '/services/data-services' },
                { name: 'Consulting', href: '/services/consulting'}
            ]
        },
        { name: 'Blogs', href: '/blogs' },
        { name: 'Contact Us', href: '/contact' }
    ];

    const handleMenuClose = () => {
        setIsMenuOpen(false);
        setIsServicesOpen(false);
        setIsMobileServicesOpen(false);
    };

    const handleServicesClick = (e) => {
        if (window.innerWidth >= 768) {
            e.preventDefault();
            setIsServicesOpen(!isServicesOpen);
        }
    };

    const isActive = (href) => {
        if (href === '/') {
            return pathname === '/';
        }
        return pathname.startsWith(href);
    };

    return (
        <header role="banner" className="w-full flex justify-center fixed top-0 z-50">
            <motion.nav
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ 
                    type: "spring", 
                    stiffness: 100, 
                    damping: 15,
                    duration: 0.8
                }}
                className={`w-[95%] sm:w-[90%] md:w-4/5 lg:w-3/4 xl:w-2/3 max-w-6xl mx-2 sm:mx-4 mt-2 sm:mt-4 rounded-2xl transition-all duration-500 ease-in-out relative ${
                    scrolled 
                        ? 'shadow-2xl backdrop-blur-xl' 
                        : 'shadow-xl backdrop-blur-lg'
                }`}
                style={{
                    background: scrolled 
                        ? 'linear-gradient(135deg, rgba(6, 182, 212, 0.2) 0%, rgba(59, 130, 246, 0.2) 50%, rgba(99, 102, 241, 0.2) 100%)'
                        : 'linear-gradient(135deg, rgba(6, 182, 212, 0.15) 0%, rgba(59, 130, 246, 0.15) 50%, rgba(99, 102, 241, 0.15) 100%)',
                    backdropFilter: 'blur(20px)',
                    WebkitBackdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    boxShadow: scrolled
                        ? '0 25px 50px -12px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.15)'
                        : '0 25px 50px -12px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.1)',
                }}
                role="navigation"
                aria-label="Main navigation"
            >
                <div className="px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
                    <div className="flex items-center justify-between">
                        {/* Logo with enhanced SEO */}
                        <motion.div
                            className="flex-shrink-0"
                            whileHover={{ scale: 1.05 }}
                            transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        >
                            <Link 
                                href="/" 
                                className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-700 text-transparent bg-clip-text  transition-all duration-300"
                                aria-label="Cognixo.ai - AI Solutions Company Homepage"
                            >
                                Cognixo.ai
                            </Link>
                        </motion.div>

                        {/* Desktop navigation */}
                        <div className="hidden lg:flex items-center space-x-1 xl:space-x-2">
                            {navItems.map((item, index) => (
                                <motion.div 
                                    key={item.href} 
                                    className="relative" 
                                    ref={item.hasDropdown ? servicesDropdownRef : null}
                                    initial={{ opacity: 0, y: -20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: index * 0.1, duration: 0.5 }}
                                >
                                    {item.hasDropdown ? (
                                        <motion.button
                                            onClick={handleServicesClick}
                                            onMouseEnter={() => setIsServicesOpen(true)}
                                            onMouseLeave={() => setIsServicesOpen(false)}
                                            className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 ${
                                                isActive(item.href)
                                                    ? 'text-black bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-600/30 shadow-lg'
                                                    : 'text-black hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-indigo-600/20'
                                            }`}
                                            whileHover={{ scale: 1.05, y: -2 }}
                                            whileTap={{ scale: 0.95 }}
                                            aria-expanded={isServicesOpen}
                                            aria-haspopup="true"
                                            aria-label={`${item.name} menu`}
                                        >
                                            <span className="flex items-center gap-1">
                                                {item.icon}
                                                {item.name}
                                                <motion.div
                                                    animate={{ rotate: isServicesOpen ? 180 : 0 }}
                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                >
                                                    <ChevronDown size={14} />
                                                </motion.div>
                                            </span>
                                            {isActive(item.href) && (
                                                <motion.div
                                                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full"
                                                    layoutId="activeDesktopUnderline"
                                                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                />
                                            )}
                                        </motion.button>
                                    ) : (
                                        <Link href={item.href}>
                                            <motion.div
                                                className={`relative px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-300 flex items-center gap-1 ${
                                                    isActive(item.href)
                                                        ? 'text-black bg-gradient-to-r from-cyan-500/30 via-blue-500/30 to-indigo-600/30 shadow-lg'
                                                        : 'text-black hover:bg-gradient-to-r hover:from-cyan-500/20 hover:via-blue-500/20 hover:to-indigo-600/20'
                                                }`}
                                                whileHover={{ scale: 1.05, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                aria-current={isActive(item.href) ? 'page' : undefined}
                                            >
                                                <span className="flex items-center gap-1">
                                                    {item.icon}
                                                    {item.name}
                                                </span>
                                                {isActive(item.href) && (
                                                    <motion.div
                                                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600 rounded-full"
                                                        layoutId="activeDesktopUnderline"
                                                        transition={{ type: "spring", stiffness: 500, damping: 30 }}
                                                    />
                                                )}
                                            </motion.div>
                                        </Link>
                                    )}

                                    {/* Desktop Services Dropdown */}
                                    <AnimatePresence>
                                        {item.hasDropdown && isServicesOpen && (
                                            <motion.div
                                                initial={{ opacity: 0, y: -10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: -10, scale: 0.95 }}
                                                transition={{ duration: 0.2, ease: "easeOut" }}
                                                className="absolute top-full left-0 mt-4 w-52 rounded-xl overflow-hidden shadow-2xl z-100"
                                                style={{
                                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.25) 0%, rgba(59, 130, 246, 0.25) 50%, rgba(99, 102, 241, 0.25) 100%)',
                                                    backdropFilter: 'blur(20px)',
                                                    WebkitBackdropFilter: 'blur(20px)',
                                                    border: '1px solid rgba(255, 255, 255, 0.3)',
                                                }}
                                                onMouseEnter={() => setIsServicesOpen(true)}
                                                onMouseLeave={() => setIsServicesOpen(false)}
                                                role="menu"
                                                aria-label="Services submenu"
                                            >
                                                <div className="py-2">
                                                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                        <Link key={dropdownItem.href} href={dropdownItem.href}>
                                                            <motion.div
                                                                className={`block px-4 py-3 text-sm transition-all duration-200 ${
                                                                    isActive(dropdownItem.href)
                                                                        ? 'bg-gradient-to-r from-cyan-500/40 via-blue-500/40 to-indigo-600/40 text-black font-medium border-l-4 border-cyan-400'
                                                                        : 'text-black hover:bg-gradient-to-r hover:from-cyan-500/30 hover:via-blue-500/30 hover:to-indigo-600/30 '
                                                                }`}
                                                                initial={{ opacity: 0, x: -10 }}
                                                                animate={{ opacity: 1, x: 0 }}
                                                                transition={{ delay: dropdownIndex * 0.05 }}
                                                                whileHover={{ x: 5, backgroundColor: "rgba(59, 130, 246, 0.15)" }}
                                                                onClick={handleMenuClose}
                                                                role="menuitem"
                                                            >
                                                                {dropdownItem.name}
                                                            </motion.div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>

                        {/* Mobile menu button */}
                        <motion.button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="lg:hidden p-2 rounded-lg text-black hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-cyan-400 transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            aria-expanded={isMenuOpen}
                            aria-controls="mobile-menu"
                            aria-label="Toggle navigation menu"
                        >
                            <motion.div
                                animate={{ rotate: isMenuOpen ? 90 : 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                {isMenuOpen ? (
                                    <X size={24} className="w-6 h-6" />
                                ) : (
                                    <Menu size={24} className="w-6 h-6" />
                                )}
                            </motion.div>
                        </motion.button>
                    </div>

                    {/* Mobile menu with darker colors */}
                    <AnimatePresence>
                        {isMenuOpen && (
                            <motion.div
                                id="mobile-menu"
                                className="lg:hidden overflow-hidden rounded-b-xl"
                                initial={{ opacity: 0, height: 0 }}
                                animate={{ opacity: 1, height: "auto" }}
                                exit={{ opacity: 0, height: 0 }}
                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                style={{
                                    background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.3) 0%, rgba(59, 130, 246, 0.3) 50%, rgba(99, 102, 241, 0.3) 100%)',
                                    backdropFilter: 'blur(20px)',
                                    WebkitBackdropFilter: 'blur(20px)',
                                }}
                                role="menu"
                                aria-label="Mobile navigation menu"
                            >
                                <div className="border-t border-white/20 mt-2">
                                    <div className="flex flex-col space-y-1 px-4 py-4">
                                        {navItems.map((item, index) => (
                                            <motion.div 
                                                key={item.href}
                                                initial={{ opacity: 0, x: -30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ 
                                                    delay: index * 0.1, 
                                                    duration: 0.4,
                                                    ease: "easeOut"
                                                }}
                                            >
                                                {item.hasDropdown ? (
                                                    <div>
                                                        <motion.button
                                                            onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                                                            className={`w-full px-4 py-3 text-left rounded-xl flex items-center justify-between transition-all duration-300 text-base font-medium ${
                                                                isActive(item.href)
                                                                    ? 'bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 text-cyan-300 shadow-lg border border-cyan-400/30'
                                                                    : 'text-black hover:bg-gradient-to-r hover:from-slate-700/60 hover:via-slate-600/60 hover:to-slate-700/60 hover:text-cyan-200 hover:shadow-md'
                                                            }`}
                                                            whileHover={{ x: 5, scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                            aria-expanded={isMobileServicesOpen}
                                                            aria-controls="mobile-services-menu"
                                                        >
                                                            <div className="flex items-center gap-2">
                                                                {item.icon}
                                                                {item.name}
                                                                {isActive(item.href) && (
                                                                    <motion.span
                                                                        className="ml-2 h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                                                                        initial={{ scale: 0 }}
                                                                        animate={{ scale: 1 }}
                                                                        transition={{ type: "spring", stiffness: 500, damping: 10 }}
                                                                    />
                                                                )}
                                                            </div>
                                                            <motion.div
                                                                animate={{ rotate: isMobileServicesOpen ? 180 : 0 }}
                                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                            >
                                                                <ChevronDown size={18} />
                                                            </motion.div>
                                                        </motion.button>

                                                        {/* Mobile Services Dropdown */}
                                                        <AnimatePresence>
                                                            {isMobileServicesOpen && (
                                                                <motion.div
                                                                    id="mobile-services-menu"
                                                                    initial={{ opacity: 0, height: 0 }}
                                                                    animate={{ opacity: 1, height: "auto" }}
                                                                    exit={{ opacity: 0, height: 0 }}
                                                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                                                    className="ml-6 mt-2 space-y-1 overflow-hidden"
                                                                    role="menu"
                                                                >
                                                                    {item.dropdownItems.map((dropdownItem, dropdownIndex) => (
                                                                        <Link key={dropdownItem.href} href={dropdownItem.href}>
                                                                            <motion.div
                                                                                className={`w-full px-4 py-2.5 text-left rounded-lg transition-all duration-300 text-sm border-l-3 border-b-2 mb-2 ${
                                                                                    isActive(dropdownItem.href)
                                                                                        ? 'bg-gradient-to-r from-slate-800/70 via-slate-700/70 to-slate-800/70 text-cyan-300 font-medium border-cyan-600 shadow-md'
                                                                                        : 'text-black hover:bg-gradient-to-r hover:from-slate-800/50 hover:via-slate-700/50 hover:to-slate-800/50 hover:text-cyan-200 border-cyan-600 hover:border-cyan-400'
                                                                                }`}
                                                                                initial={{ opacity: 0, x: -15 }}
                                                                                animate={{ opacity: 1, x: 0 }}
                                                                                transition={{ 
                                                                                    delay: dropdownIndex * 0.08,
                                                                                    duration: 0.4
                                                                                }}
                                                                                whileHover={{ x: 8, backgroundColor: "rgba(51, 65, 85, 0.3)" }}
                                                                                whileTap={{ scale: 0.98 }}
                                                                                onClick={handleMenuClose}
                                                                                role="menuitem"
                                                                            >
                                                                                {dropdownItem.name}
                                                                            </motion.div>
                                                                        </Link>
                                                                    ))}
                                                                </motion.div>
                                                            )}
                                                        </AnimatePresence>
                                                    </div>
                                                ) : (
                                                    <Link href={item.href}>
                                                        <motion.div
                                                            className={`w-full px-4 py-3 text-left rounded-xl flex items-center gap-2 transition-all duration-300 text-base font-medium ${
                                                                isActive(item.href)
                                                                    ? 'bg-gradient-to-r from-slate-700/80 via-slate-600/80 to-slate-700/80 text-cyan-300 shadow-lg border border-cyan-400/30'
                                                                    : 'text-black hover:bg-gradient-to-r hover:from-slate-700/60 hover:via-slate-600/60 hover:to-slate-700/60 hover:text-cyan-200 hover:shadow-md'
                                                            }`}
                                                            whileHover={{ x: 5, scale: 1.02 }}
                                                            whileTap={{ scale: 0.98 }}
                                                            onClick={handleMenuClose}
                                                            role="menuitem"
                                                            aria-current={isActive(item.href) ? 'page' : undefined}
                                                        >
                                                            {item.icon}
                                                            {item.name}
                                                            {isActive(item.href) && (
                                                                <motion.span
                                                                    className="ml-auto h-2 w-2 rounded-full bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600"
                                                                    initial={{ scale: 0 }}
                                                                    animate={{ scale: 1 }}
                                                                    transition={{ type: "spring", stiffness: 500, damping: 10 }}
                                                                />
                                                            )}
                                                        </motion.div>
                                                    </Link>
                                                )}
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </motion.nav>
        </header>
    );
}