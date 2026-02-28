import { motion } from 'framer-motion';
import { RiRobotLine, RiBrainLine, RiBarChartLine, RiShieldCheckLine, RiAlertLine } from 'react-icons/ri';
import './AISection.css';

const aiFeatures = [
    { icon: <RiRobotLine size={22} />, title: 'AI Project Team Recommendation', desc: 'Analyzes student profiles to form optimal, balanced project teams automatically.', color: 'purple' },
    { icon: <RiBrainLine size={22} />, title: 'AI Mentor Matching', desc: 'Connects juniors with the most relevant seniors or alumni based on academic background.', color: 'cyan' },
    { icon: <RiBarChartLine size={22} />, title: 'Engagement Prediction', desc: 'Identifies low-activity students early so coordinators can follow up proactively.', color: 'pink' },
    { icon: <RiShieldCheckLine size={22} />, title: 'Discussion Moderation', desc: 'Optional AI moderation in group chats to maintain academic tone and quality.', color: 'purple' },
];

export default function AISection() {
    return (
        <section className="ai section" id="ai-section">
            <div className="container">
                <motion.div
                    className="ai__header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">AI-Powered</span>
                    <h2 className="section-title">
                        Intelligence that <span className="gradient-text">enhances</span> academia
                    </h2>
                    <p className="section-subtitle">
                        Advanced AI features woven into CampUs — from team formation to quality moderation.
                        AI assists; it never replaces faculty.
                    </p>
                </motion.div>

                {/* Orb */}
                <motion.div
                    className="ai__orb-wrapper"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="ai__orb">
                        <div className="ai__orb-inner">
                            <RiBrainLine size={48} className="ai__orb-icon" />
                            <span>CampUs AI</span>
                        </div>
                        <div className="ai__orb-ring ai__orb-ring--1" />
                        <div className="ai__orb-ring ai__orb-ring--2" />
                        <div className="ai__orb-ring ai__orb-ring--3" />
                    </div>
                </motion.div>

                {/* Cards */}
                <div className="ai__grid">
                    {aiFeatures.map((f, i) => (
                        <motion.div
                            key={f.title}
                            className="ai__card glass-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            whileHover={{ y: -5, scale: 1.01 }}
                        >
                            <div className={`ai__card-icon ai__card-icon--${f.color}`}>{f.icon}</div>
                            <h3 className="ai__card-title">{f.title}</h3>
                            <p className="ai__card-desc">{f.desc}</p>
                        </motion.div>
                    ))}
                </div>

                {/* Disclaimer */}
                <motion.div
                    className="ai__disclaimer"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                >
                    <RiAlertLine size={16} />
                    AI assists, never replaces faculty authority — all decisions remain with educators.
                </motion.div>
            </div>
        </section>
    );
}
