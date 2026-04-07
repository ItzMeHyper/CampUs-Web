import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { RiArrowDownLine, RiAndroidLine, RiPlayCircleLine } from 'react-icons/ri';
import './Hero.css';

const words = ['Academic', 'World,', 'Unified.'];

export default function Hero() {
    return (
        <section className="hero" id="hero">
            {/* Animated blobs */}
            <div className="hero__blob hero__blob--1" />
            <div className="hero__blob hero__blob--2" />
            <div className="hero__blob hero__blob--3" />

            {/* Grid overlay */}
            <div className="hero__grid" />

            <div className="container hero__inner">
                <div className="hero__content">
                    {/* Badge */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <span className="section-label">
                            <span className="hero__badge-dot" />
                            Now in Development — CampUs v1.0
                        </span>
                    </motion.div>

                    {/* Headline */}
                    <motion.h1
                        className="hero__title"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.2 }}
                    >
                        <span>Your&nbsp;</span>
                        {words.map((word, i) => (
                            <motion.span
                                key={word}
                                className={i === 2 ? 'gradient-text' : ''}
                                initial={{ opacity: 0, y: 40 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                            >
                                {word}{' '}
                            </motion.span>
                        ))}
                    </motion.h1>

                    {/* Subheading */}
                    <motion.p
                        className="hero__subtitle"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.7 }}
                    >
                        The all-in-one academic collaboration platform for students, faculty, and institutions.
                        AI-powered teams, smart mentoring, campus events, and more — built with React Native.
                    </motion.p>

                    {/* CTAs */}
                    <motion.div
                        className="hero__ctas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.9 }}
                    >
                        <Link to="features" smooth duration={600} offset={-80}>
                            <button className="btn btn-primary">
                                <RiPlayCircleLine size={18} />
                                Explore Features
                            </button>
                        </Link>
                        <a
                            href="/previews/CampUs.apk"
                            download="CampUs.apk"
                            className="btn btn-secondary"
                        >
                            <RiAndroidLine size={18} />
                            Download APK
                        </a>
                    </motion.div>

                    {/* Demo Credentials */}
                    <motion.div
                        className="hero__demo-creds"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.0 }}
                        style={{ marginTop: '1.5rem', fontSize: '14px', color: 'var(--text-secondary)', background: 'rgba(255, 255, 255, 0.05)', padding: '12px 24px', borderRadius: '12px', display: 'inline-block', border: '1px solid var(--border)' }}
                    >
                        <p style={{ margin: 0 }}>
                            <span style={{ color: 'var(--accent-cyan)' }}>Demo Login:</span> student@sjcetpalai.ac.in 
                            <span style={{ margin: '0 12px', color: 'var(--accent-purple)' }}>|</span> 
                            <span style={{ color: 'var(--accent-pink)' }}>Password:</span> 123456
                        </p>
                    </motion.div>

                    {/* Stats row */}
                    <motion.div
                        className="hero__stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1.1 }}
                    >
                        {[
                            { value: '4', label: 'User Roles' },
                            { value: '10+', label: 'Core Features' },
                            { value: 'AI', label: 'Powered Matching' },
                            { value: '100%', label: 'Academic Focused' },
                        ].map(stat => (
                            <div key={stat.label} className="hero__stat">
                                <span className="hero__stat-value">{stat.value}</span>
                                <span className="hero__stat-label">{stat.label}</span>
                            </div>
                        ))}
                    </motion.div>
                </div>

                {/* Phone Mockup */}
                <motion.div
                    className="hero__mockup"
                    initial={{ opacity: 0, x: 60 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="mockup-phone">
                        <div className="mockup-notch" />
                        <div className="mockup-screen">
                            <div className="mockup-header">
                                <div className="mockup-avatar" />
                                <div className="mockup-info">
                                    <div className="mockup-bar mockup-bar--name" />
                                    <div className="mockup-bar mockup-bar--sub" />
                                </div>
                            </div>
                            <div className="mockup-card">
                                <div className="mockup-bar mockup-bar--wide" />
                                <div className="mockup-bar mockup-bar--medium" />
                                <div className="mockup-bar mockup-bar--narrow" />
                            </div>
                            <div className="mockup-card">
                                <div className="mockup-bar mockup-bar--wide" />
                                <div className="mockup-bar mockup-bar--medium" />
                            </div>
                            <div className="mockup-tags">
                                <div className="mockup-tag mockup-tag--purple" />
                                <div className="mockup-tag mockup-tag--cyan" />
                                <div className="mockup-tag mockup-tag--pink" />
                            </div>
                            <div className="mockup-card mockup-card--ai">
                                <div className="mockup-ai-icon">✦</div>
                                <div className="mockup-ai-lines">
                                    <div className="mockup-bar mockup-bar--wide" />
                                    <div className="mockup-bar mockup-bar--medium" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mockup-glow" />
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="hero__scroll"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.4, duration: 0.6 }}
            >
                <Link to="features" smooth duration={600} offset={-80}>
                    <motion.div
                        className="hero__scroll-icon"
                        animate={{ y: [0, 8, 0] }}
                        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
                    >
                        <RiArrowDownLine size={20} />
                    </motion.div>
                </Link>
            </motion.div>
        </section>
    );
}
