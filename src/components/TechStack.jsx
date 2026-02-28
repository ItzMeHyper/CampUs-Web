import { motion } from 'framer-motion';
import './TechStack.css';

const stack = [
    { name: 'React Native', sub: 'Mobile', emoji: '📱', color: '#61DAFB' },
    { name: 'Expo', sub: 'Build', emoji: '🚀', color: '#4630EB' },
    { name: 'Supabase', sub: 'Backend', emoji: '🟢', color: '#3ECF8E' },
    { name: 'Firebase', sub: 'Storage', emoji: '🔥', color: '#FFA611' },
    { name: 'OpenAI', sub: 'AI Core', emoji: '✦', color: '#A78BFA' },
    { name: 'Play Store', sub: 'Deploy', emoji: '▶', color: '#34D399' },
];

export default function TechStack() {
    return (
        <section className="tech section" id="tech-stack">
            <div className="container">
                <motion.div
                    className="tech__header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">Production Grade</span>
                    <h2 className="section-title">
                        Built with the <span className="gradient-text">best tools</span>
                    </h2>
                    <p className="section-subtitle">
                        A modern, scalable tech stack chosen for reliability, speed, and real-world production deployment.
                    </p>
                </motion.div>

                <div className="tech__grid">
                    {stack.map((item, i) => (
                        <motion.div
                            key={item.name}
                            className="tech__card glass-card"
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.5, delay: i * 0.08 }}
                            whileHover={{ y: -6, scale: 1.03 }}
                        >
                            <div className="tech__emoji" style={{ color: item.color }}>{item.emoji}</div>
                            <div className="tech__name">{item.name}</div>
                            <div className="tech__sub">{item.sub}</div>
                            <div className="tech__bar" style={{ background: `${item.color}30`, boxShadow: `0 0 12px ${item.color}40` }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
