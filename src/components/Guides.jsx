import React from "react";

const guides = [

  {
    title: "Robotics Systems",
    description:
      "Custom robotic platforms built for education, research, and industrial deployment.",

    icon: (
      <svg className="guide-svg" viewBox="0 0 24 24" fill="none">
        <rect x="3" y="8" width="18" height="8" rx="2" />
        <path d="M12 2v6" />
        <circle cx="8" cy="12" r="1" />
        <circle cx="16" cy="12" r="1" />
      </svg>
    ),
  },

  {
    title: "IoT Solutions",
    description:
      "End-to-end connected device ecosystems – sensors, dashboards, and automation.",

    icon: (
      <svg className="guide-svg" viewBox="0 0 24 24" fill="none">
        <path d="M4 8c4-4 12-4 16 0" />
        <path d="M7 11c3-3 7-3 10 0" />
        <path d="M12 20v-6" />
        <path d="M8 20v-2" />
        <path d="M16 20v-4" />
      </svg>
    ),
  },

  {
    title: "Bionic & Biomedical",
    description:
      "Precision bionic arms and wearable rehabilitation trackers powered by AI.",

    icon: (
      <svg className="guide-svg" viewBox="0 0 24 24" fill="none">
        <path d="M12 21s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z" />
        <circle cx="12" cy="11" r="2" />
      </svg>
    ),
  },

  {
    title: "Bootcamp Training",
    description:
      "Hands-on student programs covering electronics, robotics, and embedded systems.",

    icon: (
      <svg className="guide-svg" viewBox="0 0 24 24" fill="none">
        <path d="M22 10L12 4 2 10l10 6 10-6z" />
        <path d="M6 12v5c3 2 9 2 12 0v-5" />
      </svg>
    ),
  },

];

export default function Guides() {

  return (

    <section className="guides-section">

      <div className="container">

        <h4 className="section-subtitle">

          What We Do

        </h4>

        <h2 className="section-title text-center">

          Our Expertise

        </h2>



        <div className="guides-stack-container">

          {guides.map((item, index) => (

            <div
              className="guide-stack-card"
              key={item.title}
              style={{ "--index": index }}
            >
              <div className="premium-card guide-card">

                <div className="guide-icon">

                  {item.icon}

                </div>



                <h3 className="guide-title">

                  {item.title}

                </h3>



                <p className="guide-desc">

                  {item.description}

                </p>

              </div>
            </div>

          ))}

        </div>

      </div>

    </section>

  );

}