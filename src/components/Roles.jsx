import { motion } from 'framer-motion';
import {
    RiUserLine, RiUserStarLine, RiUserHeartLine,
    RiTeamLine
} from 'react-icons/ri';
import './Roles.css';

const roles = [
    { icon: <RiUserLine size={24} />, title: 'Student', desc: 'Core members with academic profiles, skills, and project interests.', color: 'cyan', badge: 'Core' },
    { icon: <RiUserStarLine size={24} />, title: 'Coordinator', desc: 'Club leads who create events, manage members, and post announcements.', color: 'purple', badge: 'Leader' },
    { icon: <RiUserHeartLine size={24} />, title: 'Alumni', desc: 'Senior mentors who guide current students through career and academics.', color: 'cyan', badge: 'Mentor' },
    { icon: <RiTeamLine size={24} />, title: 'Faculty', desc: 'Academic supervisors who moderate content and oversee team projects.', color: 'purple', badge: 'Supervisor' },
];

export default function Roles() {
    return (
        <section className="roles section" id="roles">
            <div className="container">
                <motion.div
                    className="roles__header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Access Control</span>
                    <h2 className="section-title">
                        Built for every <span className="gradient-text">stakeholder</span>
                    </h2>
                    <p className="section-subtitle">
                        Four distinct roles, each with tailored permissions and a unique experience inside CampUs.
                    </p>
                </motion.div>

                <div className="roles__grid">
                    {roles.map((role, i) => (
                        <motion.div
                            key={role.title}
                            className="roles__card glass-card"
                            initial={{ opacity: 0, scale: 0.92 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.45, delay: i * 0.08 }}
                            whileHover={{ y: -5, scale: 1.02 }}
                        >
                            <div className="roles__card-top">
                                <div className={`roles__icon roles__icon--${role.color}`}>{role.icon}</div>
                                <span className={`badge badge-${role.color === 'cyan' ? 'cyan' : role.color === 'pink' ? 'pink' : 'purple'}`}>{role.badge}</span>
                            </div>
                            <h3 className="roles__title">{role.title}</h3>
                            <p className="roles__desc">{role.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
