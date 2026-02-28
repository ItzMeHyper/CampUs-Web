import { motion } from 'framer-motion';
import { RiGooglePlayLine, RiAppleLine, RiArrowRightLine } from 'react-icons/ri';
import './CTASection.css';

export default function CTASection() {
    return (
        <section className="cta section">
            {/* Background effects */}
            <div className="cta__blob cta__blob--1" />
            <div className="cta__blob cta__blob--2" />

            <div className="container cta__inner">
                <motion.span
                    className="section-label"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                >
                    Coming Soon
                </motion.span>

                <motion.h2
                    className="section-title cta__title"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.1 }}
                >
                    The Future of <span className="gradient-text">Academic Collaboration</span>{' '}
                    is Almost Here
                </motion.h2>

                <motion.p
                    className="section-subtitle cta__subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    CampUs is in active development — production-grade, AI-powered, and built with students at heart.
                    Join the journey.
                </motion.p>

                <motion.div
                    className="cta__buttons"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.35 }}
                >
                    <button className="btn btn-primary cta__store-btn" disabled>
                        <RiGooglePlayLine size={20} />
                        Play Store Soon
                    </button>
                    <button className="btn btn-secondary cta__store-btn" disabled>
                        <RiAppleLine size={20} />
                        App Store Soon
                    </button>
                </motion.div>

                <motion.a
                    href="https://github.com/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta__link"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                >
                    View Source Code <RiArrowRightLine size={16} />
                </motion.a>
            </div>
        </section>
    );
}
