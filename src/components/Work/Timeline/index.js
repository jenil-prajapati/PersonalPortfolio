import React, { useState } from 'react';
import './index.scss';

const Timeline = () => {
  const [events, setEvents] = useState([
    {
      date: '09/2024 - Present',
      title: 'META | Psychology & Brain Sciences Lab',
      description: [
        'Developing and fine-tuning an iOS app using <b>Flutter</b> and <b>Firebase</b>, fixing bugs, enhancing <b>UI/UX</b>, and scaling the application. Improving <b>backend</b> performance with <b>Node.js</b> and <b>React</b> to support growing user needs.',
        'Collaborated using <b>Agile methodology</b>, conducting daily stand-ups and sprint planning to prioritize features and bugs.'
      ],
      expanded: false,
    },
    {
      date: '09/2024 - 12/2024',
      title: 'HAL | Human-AI Integration Lab',
      description: [
        'Developed a <b>Virtual Reality</b> Fencing training system using <b>Unity Hub</b>, <b>Meta Quest 3</b>, and <b>C#</b>, integrating Unity\'s physics engine, animation rigging, and <b>machine learning models</b> for motion analysis with real-time feedback. Utilized data visualization to display performance metrics, enhancing the system\'s capability for precise user interaction and evaluation.'
      ],
      expanded: false,
    },
    {
      date: '06/2024 - 09/2024',
      title: 'WORLEY ENGINEERING',
      description: [
        'Collaborated with SMEs and senior managers to analyze <b>Digital Twin</b>, <b>IoT</b>, and <b>AR/VR</b> solutions, leveraging tools like <b>AVEVA</b> and <b>Cognite</b> to optimize project delivery. Additionally, solved complex problem by exploring data centric solution to drive innovation & excellence.',
        'Independently developed predictive maintenance strategies using <b>Python</b>, <b>C#</b>, and <b>Azure</b>, integrating real-time data from IoT sensors and high-resolution <b>3D models</b> to enhance asset monitoring and improve operational efficiency.',
        'Delivered a detailed report proposing innovative <b>cloud-based solutions</b> and integrating <b>CI/CD pipelines</b> for safety protocols and workflow automation, showcasing measurable improvements in system uptime, risk management, and personnel readiness by leveraging <b>Scrum frameworks</b> to coordinate predictive maintenance tasks, ensuring timely deliverables.'
      ],
      expanded: false,
    },
  ]);

  const handleItemClick = (index) => {
    setEvents((prevEvents) => {
      const updatedEvents = prevEvents.map((event, idx) => {
        if (idx === index) {
          return { ...event, expanded: !event.expanded };
        }
        return event;
      });
      return updatedEvents;
    });
  };

  return (
    <div className="timeline-container">
      {events.map((event, index) => (
        <div
          className={`timeline-item ${event.expanded ? 'expanded' : ''}`}
          key={index}
          onClick={() => handleItemClick(index)}
        >
          <div className="timeline-marker"></div>
          <div className="timeline-content">
            <h2>{event.title}</h2>
            {event.expanded ? (
              <div>
                {event.description.map((desc, descIndex) => (
                  <p key={descIndex} dangerouslySetInnerHTML={{ __html: desc }} />
                ))}
              </div>
            ) : (
              <>
                <div className="more">
                  <p>Click for more</p>
                </div>
                <div className="date">{event.date}</div>
              </>
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
