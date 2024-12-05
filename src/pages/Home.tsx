import { SummarizedExperiences } from "../components/ExpSummary";
import { Link } from "../components/Utils";

const Home = () => {
  return (
    <>
      <p>
        Hi, I’m Devashish, a senior studying Mathematics and Computer Science at
        Northeastern University. I'm interested in building technology for a
        better future.
      </p>
      <br />
      <div className="flex row">
        <img src="/mountains.jpg" alt="Mountains" style={{ width: "40%" }} />
        <div className="pl-10">
          Currently, I'm:
          <ul className="list-disc pl-4">
            <li className="my-2">writing an operating system in Rust.</li>
            <li className="my-2">
              implementing the Raft consensus protocol for distributed systems.
            </li>
            <li className="my-2">
              reading{" "}
              <Link href="https://papl.cs.brown.edu/2020/" text="PAPL" /> to
              write my own interpreter and compiler.
            </li>
            <li className="my-2">
              attempting to become a functional bro by learning some OCaml.
            </li>
            <li className="my-2">
              optimizing my burnt basque cheesecake recipe.
            </li>
          </ul>
        </div>
      </div>
      <br />
      <SummarizedExperiences />
      <br />
      <p>
        More information on my projects and work experiences can be found on my{" "}
        <Link href="/resume.pdf" text="resume" /> and{" "}
        <Link href="https://github.com/devashish-sood" text="github" />. I can
        also be contacted via{" "}
        <Link href="https://linkedin.com/in/devashishsood9" text="linkedin" />{" "}
        or <Link href="mailto:devashishsood9@gmail.com" text="email" />.
      </p>
    </>
  );
};

export default Home;
