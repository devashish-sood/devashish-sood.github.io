import { DetailedExpProps, SingleExp } from "../components/Experience";
import { Link } from "../components/Utils";

const EXP_ARR: DetailedExpProps[] = [
  {
    heading: <Link href="https://www.klaviyo.com/" text="Klaviyo" />,
    duration: "January 2024 - July 2024",
    role: "Software Engineer Co-op",
    description: (
      <div>
        <p>I worked on two major projects at Klaviyo:</p>
        <ol className="list-decimal ml-6 mt-2 space-y-2">
          <li className="pl-2">
            Highly accurate metric benchmarks - I formulated an identification
            mechanism for human vs machine interactions for marking channels,
            which allowed Klaviyo to customer interaction benchmark with a 50%
            increase in accuracy.
          </li>
          <li className="pl-2">
            Asynchronous versioning pipeline: I assisted Klaviyo’s Customer
            Lifetime Value team build an asynchronous pipeline that models and
            predicts a customer’s lifetime value. Clients use this tool to
            isolate and improve areas of significant churn.
          </li>
        </ol>
        <br />
        Some of my other projects -
        <ol className="list-disc ml-6 mt-2 space-y-2">
          <li className="pl-2">
            Helped create a silver medallion datalake layer for low-latency
            dynamic customer configurations.
          </li>
          <li className="pl-2">
            Conducted a zero downtime Django migration for 80+
            routes/queue-workers via load/validation tests.
          </li>
          <li className="pl-2">
            Built a new channel attribution setting page to consolidate customer
            strategy options (Typescript, React).
          </li>
          <li className="pl-2">
            Accelerated internal data search by 3x through simplification of
            Django model relationships.
          </li>
        </ol>
      </div>
    ),
  },
  {
    heading: <Link href="https://pos.toasttab.com/" text="Toast" />,
    duration: "January 2023 - July 2023",
    role: "Software Engineer Co-op",
    description: (
      <div>
        <p>
          RBAC data streaming - I engineered a role-based access control
          architecture for stream data from the data platform using Apache
          Pulsar. This allowed international teams to safely interact with
          Toast's data.
        </p>
        <br />
        Other work -
        <ul className="list-disc ml-6 mt-2 space-y-2">
          <li className="pl-2">
            Reduced build times for the analytics systems by 30%.
          </li>
          <li className="pl-2">
            Created a automated validation pipeline for SQL views provided to
            the data platform by other teams.
          </li>
        </ul>
      </div>
    ),
  },
];

const Experiences = () => {
  return EXP_ARR.map((p) => SingleExp({ props: p }));
};

export default Experiences;
