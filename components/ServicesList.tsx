import React from "react";
import Service from "./Service";

const servicesdata = [
  {
    id: 1,
    heading: "COMMUNICATION STRATEGY TO WIN LITIGATION",
    paragraph:
      "In the face of a potential dispute, a communications strategy needs to be as well-planned and disciplined as the litigation strategy",
  },
  {
    id: 2,
    heading: "CORPORATE CULTURE DEPENDS ON WHAT YOUR CEO SAYS",
    paragraph:
      "CEOs are unique personas and the face of their companies and employees. CEOs are powerful. Their management team and employees respond to them",
  },
  {
    id: 3,
    heading: "YOUR BUSINESS NEEDS CHANGE - SEE WHY",
    paragraph:
      "In today's business environment, change is the new normal. Faced with the trends in social and economic change, businesses have to adapt to thrive.",
  },
  {
    id: 4,
    heading:
      "NOW OR NEVER - CREATING THE PROPER BRAND IDENTITY FOR YOUR ORGANIZATION",
    paragraph:
      "In today's competitive business landscape, establishing a strong brand identity has become more crucial than ever. A well—defined brand identity not only sets your organization apart from the competition but also helps build trust and loyalty among your target audience.",
  },
  {
    id: 5,
    heading:
      "WINNING IN COURT AND IN THE COURT OF PUBLIC OPINION — THE IMPORTANCE OF USING COMMUNICATION STRATEGY FOR LITIGATION",
    paragraph:
      "In the realm of litigation, effective communication is paramount.",
  },
  {
    id: 6,
    heading:
      "COMMUNICATING OUT OF CRISIS - THE INDISPENSABLE ROLE OF PROFESSIONAL STRATEGIC COMMUNICATION CONSULTANTS IN CRISIS AND RISK COMMUNICATIONS",
    paragraph:
      "IIn today's fast—paced and interconnected world, effective communication is paramount, especially in times of crisis and uncertainty.",
  },
];

type Props = {};

const ServicesList = (props: Props) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8">
      {servicesdata.map((service) => (
        <Service
          key={service.id}
          heading={service.heading}
          paragraph={service.paragraph}
        />
      ))}
    </ul>
  );
};

export default ServicesList;
