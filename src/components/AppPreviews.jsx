import './AppPreviews.css';

const screenshots = [
  '01-splash.jpeg',
  '02-dashboard.jpeg',
  '03-feed.jpeg',
  '04-discussions.jpeg',
  '05-chat.jpeg',
  '06-projects.jpeg',
  '07-project-detail.jpeg',
  '08-calendar.jpeg',
  '09-event.jpeg',
  '10-discover.jpeg',
  '11-profile.jpeg',
  '12-admin.jpeg',
  '13-create-post.jpeg',
  '14-edit-profile.jpeg',
  '15-event-detail.jpeg',
  '16-calendar-detail.jpeg',
  '17-settings.jpeg',
];

export default function AppPreviews() {
  return (
    <section className="section app-previews" id="previews">
      <div className="container previews-header">
        <span className="section-label">Gallery</span>
        <h2 className="section-title">
          <span className="gradient-text">CampUs</span> In Action
        </h2>
        <p className="section-subtitle" style={{ margin: '0 auto 40px auto' }}>
          Explore the premium native interface built for students and faculty. Swipe to see the beautiful dark aesthetic across different modules.
        </p>
      </div>

      <div className="previews-scroll-container">
        <div className="previews-track">
          {screenshots.map((src, idx) => (
            <div className="preview-card" key={src}>
              <img 
                src={`/previews/${src}`} 
                alt={`CampUs App Screenshot ${idx + 1}`} 
                loading="lazy" 
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
