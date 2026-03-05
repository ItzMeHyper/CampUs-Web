import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-scroll';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';
import './Navbar.css';

const navLinks = [
    { label: 'Features', to: 'features' },
    { label: 'AI', to: 'ai-section' },
    { label: 'Teams', to: 'project-teams' },
    { label: 'Tech Stack', to: 'tech-stack' },
    { label: 'Roles', to: 'roles' },
    { label: 'Contact', to: 'contact' },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    return (
        <motion.nav
            className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="navbar__inner container">
                {/* Logo */}
                <Link to="hero" smooth duration={600} className="navbar__logo" onClick={() => setMenuOpen(false)}>
                    <span className="logo-text">Camp</span>
                    <span className="logo-accent">Us</span>
                    <span className="logo-dot" />
                </Link>

                {/* Desktop Links */}
                <ul className="navbar__links">
                    {navLinks.map(link => (
                        <li key={link.to}>
                            <Link
                                to={link.to}
                                smooth
                                duration={600}
                                offset={-80}
                                className="navbar__link"
                                activeClass="navbar__link--active"
                                spy
                            >
                                {link.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                {/* CTA */}
                <div className="navbar__cta">
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary navbar__cta-btn"
                    >
                        View on GitHub
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="navbar__toggle"
                    onClick={() => setMenuOpen(o => !o)}
                    aria-label="Toggle menu"
                >
                    {menuOpen ? <RiCloseLine size={24} /> : <RiMenuLine size={24} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {menuOpen && (
                    <motion.div
                        className="navbar__mobile"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {navLinks.map(link => (
                            <Link
                                key={link.to}
                                to={link.to}
                                smooth
                                duration={600}
                                offset={-80}
                                className="navbar__mobile-link"
                                onClick={() => setMenuOpen(false)}
                            >
                                {link.label}
                            </Link>
                        ))}
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="btn btn-primary" style={{ marginTop: 8, textAlign: 'center', justifyContent: 'center' }}>
                            View on GitHub
                        </a>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
