import { Link } from "../components/Utils";

const Home = () => {
  return (
    <>
      <p>
        Hi, I’m Devashish, a software engineer working on product @ Klaviyo.
        Previously, I studied Math & Computer Science in Boston. I'm interested
        in building technology for a better future.
      </p>
      <br />
      <div className="flex row">
        <img src="/mountains.jpg" alt="Mountains" className="hidden md:block" style={{ width: "40%" }} />
        <div className="md:pl-10">
          Currently, I'm:
          <ul className="list-disc pl-4">
            <li className="my-2">
              reading some Roberto Bolaño, Schopenhauer, and Robert Caro books.
            </li>
            <li className="my-2">writing an operating system in Rust.</li>
            <li className="my-2">implementing some AI papers.</li>
            <li className="my-2">
              optimizing my burnt basque cheesecake recipe.
            </li>
            <li className="my-2">
              and just generally catching up on my technical project todo list
              :)
            </li>
          </ul>
        </div>
      </div>
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
