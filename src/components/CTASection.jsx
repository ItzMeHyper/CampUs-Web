import { motion } from 'framer-motion';
import { RiGooglePlayLine, RiAppleLine, RiSendPlaneLine, RiMailLine, RiUserLine, RiMessage2Line } from 'react-icons/ri';
import './CTASection.css';

export default function CTASection() {
    return (
        <section className="cta section" id="contact">
            {/* Background effects */}
            <div className="cta__blob cta__blob--1" />
            <div className="cta__blob cta__blob--2" />

            <div className="container">
                <div className="cta__grid">
                    {/* Left side: Info */}
                    <motion.div
                        className="cta__info"
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <span className="section-label">Get In Touch</span>
                        <h2 className="section-title cta__title">
                            Let's Build the <span className="gradient-text">Future of Campus</span> Together
                        </h2>
                        <p className="section-subtitle cta__subtitle">
                            Have questions about CampUs? Want to collaborate or bring it to your institution?
                            Our team is here to help you revolutionize academic collaboration.
                        </p>

                        <div className="cta__apps">
                            <p className="cta__apps-label">Test the Android Beta</p>
                            <div className="cta__buttons" style={{ flexDirection: 'column', gap: '16px', alignItems: 'flex-start' }}>
                                <a
                                    href="https://expo.dev/accounts/sree444/projects/CampUs/builds/30da89e9-c44b-4e24-a87a-616a95dc62b1"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="btn btn-primary cta__store-btn"
                                    style={{ textDecoration: 'none' }}
                                >
                                    <RiGooglePlayLine size={20} />
                                    Download APK
                                </a>

                                <div className="glass-card" style={{ padding: '16px', borderRadius: '12px', width: '100%', border: '1px solid rgba(124, 58, 237, 0.3)' }}>
                                    <span style={{ display: 'block', marginBottom: '8px', fontWeight: '600', color: 'var(--text-primary)' }}>
                                        Demo Login Details
                                    </span>
                                    <div style={{ color: 'var(--text-secondary)', fontSize: '14px', lineHeight: '1.6' }}>
                                        Email: <strong style={{ color: 'var(--accent-cyan-light)' }}>student@sjcetpalai.ac.in</strong><br />
                                        Password: <strong style={{ color: 'var(--accent-cyan-light)' }}>123456</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right side: Contact Form */}
                    <motion.div
                        className="cta__form-container"
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <form className="cta__form" onSubmit={(e) => e.preventDefault()}>
                            <div className="form__group">
                                <label htmlFor="name" className="form__label">
                                    <RiUserLine /> Full Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="form__input"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <label htmlFor="email" className="form__label">
                                    <RiMailLine /> Email Address
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="form__input"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>

                            <div className="form__group">
                                <label htmlFor="message" className="form__label">
                                    <RiMessage2Line /> Your Message
                                </label>
                                <textarea
                                    id="message"
                                    className="form__input form__textarea"
                                    placeholder="How can we help you?"
                                    rows="4"
                                    required
                                ></textarea>
                            </div>

                            <button type="submit" className="btn btn-primary cta__submit">
                                Send Message <RiSendPlaneLine />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
