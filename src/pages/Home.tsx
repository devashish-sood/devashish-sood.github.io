import { Link } from "../components/Utils";

const Home = () => {
  return (
    <>
      <p>
        Hi, I’m Devashish. I previously worked as a software engineer @ Klaviyo. Before that, I studied Math & Computer Science in Boston. I'm interested
        in building technology for a better future.
      </p>
      <br />
      <div className="flex row">
        <img src="/mountains.jpg" alt="Mountains" className="hidden md:block" style={{ width: "40%" }} />
        <div className="md:pl-10">
          <Link href="https://elevenlabs.io/" text="Currently working on voice models." />
        </div>
      </div>
      <br />
      <p>
        More information on my projects and work experiences can be found on my{" "}
        <Link href="https://drive.google.com/file/d/18WjBBl4938KS-A6ha6iBK-K66BJrh141/view?usp=sharing" text="resume" /> and{" "}
        <Link href="https://github.com/devashish-sood" text="github" />. I can
        also be contacted via{" "}
        <Link href="https://linkedin.com/in/devashishsood9" text="linkedin" />{" "}
        or <Link href="mailto:devashishsood9@gmail.com" text="email" />.
      </p>
    </>
  );
};

export default Home;
