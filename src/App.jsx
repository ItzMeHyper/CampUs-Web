import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import Features from './components/Features';
import AppPreviews from './components/AppPreviews';
import FeatureHighlight from './components/FeatureHighlight';
import ProjectTeams from './components/ProjectTeams';
import AISection from './components/AISection';
import TechStack from './components/TechStack';
import Roles from './components/Roles';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

// Icons for feature highlights (inline emoji for simplicity)
const feedIcon = '📰';
const eventsIcon = '📅';
const chatIcon = '💬';
const mentorIcon = '🧑‍🏫';

export default function App() {
    return (
        <>
            <Navbar />

            <main>
                {/* Hero */}
                <Hero />

                {/* Stats bar */}
                <Stats />

                {/* Features Overview Grid */}
                <Features />

                <div className="divider" />

                {/* App Previews Gallery */}
                <AppPreviews />

                <div className="divider" />

                {/* Campus Feed */}
                <FeatureHighlight
                    id="campus-feed"
                    label="Campus Feed"
                    title="Academic"
                    titleAccent="Announcements"
                    description="A faculty-moderated academic feed — not social media. Key updates, exam details, events, and institutional notices surface where they belong."
                    bullets={[
                        'Exam schedules and academic notices',
                        'Club and institutional event posts',
                        'Like, comment, and engage with announcements',
                        'Admin and faculty moderation built-in',
                    ]}
                    icon={feedIcon}
                    accentColor="cyan"
                    reverse={false}
                />

                {/* Events */}
                <FeatureHighlight
                    id="events"
                    label="Events & Activities"
                    title="Campus Events"
                    titleAccent="Reimagined"
                    description="Create hackathons, workshops, and seminars. Students register, get reminders, and collaborate before and after."
                    bullets={[
                        'Hackathon, seminar, and workshop support',
                        'Calendar view with event add option',
                        'Automated FCM push reminders',
                        'Pre-event discussion & post-event collaboration',
                    ]}
                    icon={eventsIcon}
                    accentColor="purple"
                    reverse={true}
                />

                {/* Communication */}
                <FeatureHighlight
                    id="communication"
                    label="Communication"
                    title="Meaningful"
                    titleAccent="Connections"
                    description="Academic discussions and collaborative chat — not casual social chat. Every conversation is purposeful."
                    bullets={[
                        'Topic-based academic discussion forums',
                        '1-to-1 mentoring and private chat',
                        'Project and study group chats',
                        'Typing indicators, read receipts, message deletion',
                    ]}
                    icon={chatIcon}
                    accentColor="pink"
                    reverse={false}
                />

                {/* Mentor-Mentee */}
                <FeatureHighlight
                    id="mentoring"
                    label="Mentoring System"
                    title="Guided"
                    titleAccent="Growth"
                    description="Alumni and seniors register as mentors. Juniors request guidance. All supervised responsibly by faculty."
                    bullets={[
                        'Alumni and senior mentors with profiles',
                        'Mentoring session scheduling',
                        'AI-based mentor recommendation engine',
                        'Faculty supervision at platform level',
                    ]}
                    icon={mentorIcon}
                    accentColor="cyan"
                    reverse={true}
                />

                <div className="divider" />

                {/* Project Teams – Key Feature */}
                <ProjectTeams />

                <div className="divider" />

                {/* AI Section */}
                <AISection />

                <div className="divider" />

                {/* Tech Stack */}
                <TechStack />

                <div className="divider" />

                {/* Roles */}
                <Roles />

                {/* CTA */}
                <CTASection />
            </main>

            <Footer />
        </>
    );
}
