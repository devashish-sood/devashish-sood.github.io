import { ExpProps } from "./ExpSummary";

type DetailedExpProps = ExpProps & {
  role: string
}

const SingleExp = ({ props }: { props: DetailedExpProps }) => {
  return (
    <div className="flex my-10">
      <div className="flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-l font-semibold">{props.heading}</h2>
          <span className="text-gray-500 text-sm">{props.duration}</span>
        </div>
        <p className="text-m font-medium">{props.role}</p>
        <p className="mt-2">{props.description}</p>
      </div>
    </div>
  );
};

export {SingleExp, type DetailedExpProps}