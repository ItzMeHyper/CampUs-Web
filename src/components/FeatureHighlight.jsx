import { motion } from 'framer-motion';
import './FeatureHighlight.css';

export default function FeatureHighlight({ label, title, titleAccent, description, bullets, icon, reverse, accentColor = 'purple', id }) {
    return (
        <section className="fh section" id={id}>
            <div className="container">
                <motion.div
                    className={`fh__inner ${reverse ? 'fh__inner--reverse' : ''}`}
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Visual */}
                    <motion.div
                        className="fh__visual"
                        initial={{ opacity: 0, x: reverse ? 60 : -60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <div className={`fh__visual-card fh__visual-card--${accentColor}`}>
                            <div className="fh__visual-icon">{icon}</div>
                            <div className="fh__visual-lines">
                                {[90, 65, 80, 50].map((w, i) => (
                                    <motion.div
                                        key={i}
                                        className="fh__visual-line"
                                        style={{ width: `${w}%` }}
                                        initial={{ scaleX: 0, originX: 0 }}
                                        whileInView={{ scaleX: 1 }}
                                        viewport={{ once: true }}
                                        transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
                                    />
                                ))}
                            </div>
                        </div>
                        <div className={`fh__glow fh__glow--${accentColor}`} />
                    </motion.div>

                    {/* Text */}
                    <motion.div
                        className="fh__text"
                        initial={{ opacity: 0, x: reverse ? -60 : 60 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <span className="section-label">{label}</span>
                        <h2 className="section-title">
                            {title} <span className="gradient-text">{titleAccent}</span>
                        </h2>
                        <p className="section-subtitle" style={{ marginBottom: 24 }}>{description}</p>
                        <ul className="fh__bullets">
                            {bullets.map(b => (
                                <li key={b} className="fh__bullet">
                                    <span className={`fh__bullet-dot fh__bullet-dot--${accentColor}`} />
                                    {b}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </motion.div>
            </div>
        </section>
    );
}
