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
                            <p className="cta__apps-label">Coming soon to</p>
                            <div className="cta__buttons">
                                <button className="btn btn-secondary cta__store-btn" disabled>
                                    <RiGooglePlayLine size={20} />
                                    Play Store
                                </button>
                                <button className="btn btn-secondary cta__store-btn" disabled>
                                    <RiAppleLine size={20} />
                                    App Store
                                </button>
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
