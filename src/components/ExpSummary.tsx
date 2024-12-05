import { ReactNode } from "react";
import { Link, Tooltip } from "./Utils";

const EXPERIENCES: ExpProps[] = [
  {
    heading: <Link href="https://www.klaviyo.com/" text="Klaviyo" />,
    duration: "January 2024 - July 2024",
    description: (
      <>
        Improved benchmark accuracy by <strong>&gt;50%</strong> through bot
        exclusion, expanded attribution framework offerings, and increased
        robustness for the{" "}
        <Tooltip base="CLV" hover="Customer Lifetime Value" /> prediction
        pipeline.
      </>
    ),
  },
  {
    heading: <Link href="https://pos.toasttab.com/" text="Toast" />,
    duration: "January 2023 - July 2023",
    description: (
      <>
        Helped scale analytics and archiving services on the{" "}
        <strong>Data Platforms</strong> team.
      </>
    ),
  },
  {
    heading: (
      <Link href="https://github.com/sandboxnu/nucarpool" text="CarpoolNU" />
    ),
    duration: "September 2022 - January 2024",
    description: (
      <>
        Built and launched a carpooling app for Northeastern's{" "}
        <Tooltip
          base="co-op"
          hover="4-6 month internships during the academic semester"
        />{" "}
        program. The application serves <strong>~1000</strong> students every
        semester and is now maintained by the university.
      </>
    ),
  },
];

interface ExpProps {
  heading: ReactNode;
  duration: string;
  description: ReactNode;
}

const SingleExpSummary = (props: ExpProps) => {
  return (
    <div className="flex mt-3">
      <div className="w-1 flex-shrink-0 bg-black rounded-lg" />
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-l font-semibold">{props.heading}</h2>
          <span className="text-gray-500 text-sm">{props.duration}</span>
        </div>
        <p className="mt-2">{props.description}</p>
      </div>
    </div>
  );
};

const SummarizedExperiences = () => {
  return (
    <div>
      <h2 className="text-xl font-bold">Past Experiences</h2>
      {EXPERIENCES.map((exp) => (
        <SingleExpSummary
          heading={exp.heading}
          duration={exp.duration}
          description={exp.description}
        />
      ))}
    </div>
  );
};

export { SummarizedExperiences, type ExpProps };
