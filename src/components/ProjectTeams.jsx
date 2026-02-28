import { motion } from 'framer-motion';
import { RiTeamLine, RiLightbulbLine, RiBrainLine, RiGroupLine } from 'react-icons/ri';
import './ProjectTeams.css';

const nodes = [
    { id: 1, label: 'Dev', color: '#7C3AED', x: 50, y: 10, size: 48 },
    { id: 2, label: 'Design', color: '#06B6D4', x: 80, y: 50, size: 44 },
    { id: 3, label: 'ML', color: '#EC4899', x: 55, y: 85, size: 46 },
    { id: 4, label: 'Data', color: '#A78BFA', x: 15, y: 60, size: 42 },
    { id: 5, label: 'PM', color: '#67E8F9', x: 20, y: 22, size: 40 },
];

export default function ProjectTeams() {
    return (
        <section className="pt section" id="project-teams">
            {/* Background gradient */}
            <div className="pt__bg" />

            <div className="container pt__inner">
                {/* Visual */}
                <motion.div
                    className="pt__visual"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                >
                    <div className="pt__diagram">
                        {/* SVG connections */}
                        <svg className="pt__svg" viewBox="0 0 100 100" preserveAspectRatio="none">
                            {nodes.map((n1, i) =>
                                nodes.slice(i + 1).map(n2 => (
                                    <motion.line
                                        key={`${n1.id}-${n2.id}`}
                                        x1={`${n1.x}%`} y1={`${n1.y}%`}
                                        x2={`${n2.x}%`} y2={`${n2.y}%`}
                                        stroke="rgba(124,58,237,0.2)"
                                        strokeWidth="0.5"
                                        initial={{ pathLength: 0, opacity: 0 }}
                                        whileInView={{ pathLength: 1, opacity: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 1, delay: 0.5 }}
                                    />
                                ))
                            )}
                        </svg>
                        {/* Nodes */}
                        {nodes.map((node, i) => (
                            <motion.div
                                key={node.id}
                                className="pt__node"
                                style={{ left: `${node.x}%`, top: `${node.y}%`, width: node.size, height: node.size, background: node.color }}
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{ scale: 1, opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: 0.3 + i * 0.1, type: 'spring', stiffness: 200 }}
                            >
                                <span>{node.label}</span>
                            </motion.div>
                        ))}
                        {/* Center AI badge */}
                        <motion.div
                            className="pt__center-badge"
                            initial={{ scale: 0, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.9, type: 'spring', stiffness: 180 }}
                        >
                            <RiBrainLine size={22} />
                            <span>AI Match</span>
                        </motion.div>
                    </div>
                </motion.div>

                {/* Text */}
                <motion.div
                    className="pt__text"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                >
                    <span className="badge badge-purple">⭐ Key Feature</span>
                    <h2 className="section-title" style={{ marginTop: 12 }}>
                        AI-Powered <span className="gradient-text">Project Teams</span>
                    </h2>
                    <p className="section-subtitle">
                        Students list their skills and project interests. Our AI engine intelligently
                        forms <strong>balanced, cross-functional teams</strong> — your strongest academic differentiator.
                    </p>
                    <div className="pt__cards">
                        {[
                            { icon: <RiLightbulbLine />, title: 'Skill-based Matching', desc: 'AI reads profiles and matches complementary skills for balanced teams.' },
                            { icon: <RiGroupLine />, title: 'Cross-department', desc: 'Teams span departments — CS, Design, Business, Sciences and more.' },
                            { icon: <RiTeamLine />, title: 'Dedicated Group Chat', desc: 'Every project team gets a private group workspace with file sharing.' },
                        ].map(card => (
                            <motion.div
                                key={card.title}
                                className="pt__mini-card glass-card"
                                whileHover={{ y: -4, scale: 1.01 }}
                            >
                                <div className="pt__mini-icon">{card.icon}</div>
                                <div>
                                    <p className="pt__mini-title">{card.title}</p>
                                    <p className="pt__mini-desc">{card.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
