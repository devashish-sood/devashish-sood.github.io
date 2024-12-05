import { ReactNode } from "react";

interface ProjectProps {
  heading: ReactNode;
  tech: string;
  description: ReactNode;
}

const SingleProject = ({ props }: { props: ProjectProps }) => {
  return (
    <div className="flex my-10">
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-l font-semibold">{props.heading}</h2>
          <span className="text-gray-500 text-sm">{props.tech}</span>
        </div>
        <p className="mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export { SingleProject, type ProjectProps };
