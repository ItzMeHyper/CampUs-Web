import { motion } from 'framer-motion';
import {
    RiShieldUserLine, RiNewspaperLine, RiCalendarEventLine, RiMessage3Line,
    RiTeamLine, RiUserStarLine, RiRobotLine, RiSettings3Line,
    RiBellLine, RiSearchLine
} from 'react-icons/ri';
import './Features.css';

const features = [
    {
        icon: <RiShieldUserLine size={26} />,
        title: 'Auth & Roles',
        desc: 'Email, Google SSO, and 4 role types — Student, Coordinator, Alumni, Faculty.',
        color: 'purple',
    },
    {
        icon: <RiNewspaperLine size={26} />,
        title: 'Campus Feed',
        desc: 'Faculty-moderated academic announcements, exam details, events, and institutional notices.',
        color: 'cyan',
    },
    {
        icon: <RiCalendarEventLine size={26} />,
        title: 'Events & Activities',
        desc: 'Create workshops, hackathons, seminars. Calendar view, registration, and automated reminders.',
        color: 'pink',
    },
    {
        icon: <RiMessage3Line size={26} />,
        title: 'Academic Discussions',
        desc: 'Topic-based forums, doubt threads, 1-to-1 & group chat for mentoring and teams.',
        color: 'purple',
    },
    {
        icon: <RiSearchLine size={26} />,
        title: 'Smart Matching',
        desc: 'AI matches students by skills, interests, and goals. Cross-department collaboration.',
        color: 'cyan',
    },
    {
        icon: <RiUserStarLine size={26} />,
        title: 'Mentor–Mentee',
        desc: 'Senior & alumni mentors, scheduled chats, AI-based mentor recommendations, faculty supervision.',
        color: 'pink',
    },
    {
        icon: <RiTeamLine size={26} />,
        title: 'Project Teams ⭐',
        desc: 'AI forms balanced project teams from student profiles. Dedicated group chats and faculty visibility.',
        color: 'purple',
        highlight: true,
    },
    {
        icon: <RiRobotLine size={26} />,
        title: 'AI Assistant',
        desc: 'Academic concept help, campus FAQs, event info, and in-app navigation guidance.',
        color: 'cyan',
    },
    {
        icon: <RiBellLine size={26} />,
        title: 'Smart Notifications',
        desc: 'FCM push notifications for events, collaboration, and mentoring. No marks or timetables.',
        color: 'pink',
    },
    {
        icon: <RiSettings3Line size={26} />,
        title: 'Admin Panel',
        desc: 'Manage users, approve posts, moderate discussions, broadcast messages, and view analytics.',
        color: 'purple',
    },
];

const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] },
    }),
};

export default function Features() {
    return (
        <section className="features section" id="features">
            <div className="container">
                <motion.div
                    className="features__header"
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-80px' }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-label">What's Inside</span>
                    <h2 className="section-title">
                        Everything in one <span className="gradient-text">platform</span>
                    </h2>
                    <p className="section-subtitle">
                        CampUs brings together every aspect of academic life — collaboration, learning, events,
                        and mentoring — into a unified, AI-powered mobile experience.
                    </p>
                </motion.div>

                <div className="features__grid">
                    {features.map((feature, i) => (
                        <motion.div
                            key={feature.title}
                            className={`features__card glass-card ${feature.highlight ? 'features__card--highlight' : ''}`}
                            custom={i}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: '-60px' }}
                            variants={cardVariants}
                            whileHover={{ y: -6, scale: 1.01 }}
                            transition={{ duration: 0.25 }}
                        >
                            {feature.highlight && (
                                <span className="badge badge-purple features__highlight-badge">Key Feature</span>
                            )}
                            <div className={`features__icon features__icon--${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="features__card-title">{feature.title}</h3>
                            <p className="features__card-desc">{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
