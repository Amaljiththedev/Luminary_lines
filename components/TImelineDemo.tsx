import React from "react";
import { Timeline } from "./timeline";

export function TimelineDemo() {
  const data = [
    {
      title: "Client Pitching",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Initiated the client engagement process by researching potential clients and their branding needs. 
            Developed tailored pitches that highlight the unique value of video content in enhancing their brand presence.
          </p>
        </div>
      ),
    },
    {
      title: "Needs Assessment",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Conducted in-depth discussions with clients to understand their objectives, target audience, and key messages.
            This step ensures that all video content aligns with the client’s brand identity and goals.
          </p>
        </div>
      ),
    },
    {
      title: "Project Planning",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Created a detailed project plan outlining timelines, milestones, and responsibilities for both the agency and the client. 
            Established a clear communication strategy to facilitate ongoing collaboration throughout the project.
          </p>
        </div>
      ),
    },
    {
      title: "Content Creation",
      content: (
        <div>
          <p className="text-white text-base md:text-lg font-normal mb-8">
            Developed a comprehensive content strategy that includes themes, messaging, and visual style. 
            Executed filming and editing processes, incorporating client feedback at every stage to refine the final product.
          </p>
        </div>
      ),
    },
    {
      title: "Final Delivery and Review",
      content: (
        <div>
          <p className="text-neutral-200 text-base md:text-lg font-normal mb-8">
            Delivered the final video content to the client, ensuring it meets all specifications and quality standards. 
            Conducted a review meeting to gather feedback and discuss the impact of the videos on their branding efforts.
          </p>
        </div>
      ),
    },
  ];

  return (
    <div className="w-full -mt-14">
      <Timeline data={data} />
    </div>
  );
}
