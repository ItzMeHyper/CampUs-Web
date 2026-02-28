import { RiGithubLine, RiTwitterXLine } from 'react-icons/ri';
import './Footer.css';

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer className="footer">
            <div className="container footer__inner">
                {/* Brand */}
                <div className="footer__brand">
                    <div className="footer__logo">
                        <span className="logo-text">Camp</span>
                        <span className="logo-accent">Us</span>
                        <span className="logo-dot" style={{ width: 5, height: 5, marginBottom: 10 }} />
                    </div>
                    <p className="footer__tagline">Your Academic World, Unified.</p>
                    <div className="footer__social">
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="GitHub">
                            <RiGithubLine size={18} />
                        </a>
                        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter">
                            <RiTwitterXLine size={18} />
                        </a>
                    </div>
                </div>

                {/* Links */}
                <div className="footer__links">
                    <div className="footer__col">
                        <h4 className="footer__col-title">Product</h4>
                        <a href="#features" className="footer__link">Features</a>
                        <a href="#ai-section" className="footer__link">AI Engine</a>
                        <a href="#project-teams" className="footer__link">Project Teams</a>
                        <a href="#tech-stack" className="footer__link">Tech Stack</a>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__col-title">Platform</h4>
                        <a href="#roles" className="footer__link">User Roles</a>
                        <a href="#features" className="footer__link">Campus Feed</a>
                        <a href="#features" className="footer__link">Events</a>
                        <a href="#features" className="footer__link">Mentoring</a>
                    </div>
                    <div className="footer__col">
                        <h4 className="footer__col-title">Developer</h4>
                        <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="footer__link">GitHub</a>
                        <a href="#" className="footer__link">Documentation</a>
                        <a href="#" className="footer__link">Changelog</a>
                    </div>
                </div>
            </div>

            <div className="footer__bottom">
                <div className="container">
                    <p>© {year} CampUs. Built with ♥ for academic communities.</p>
                </div>
            </div>
        </footer>
    );
}
