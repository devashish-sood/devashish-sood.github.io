import Exps from "./Exps";
import { Link } from "./Utils";

const Home = () => {
  return <>
  <p>
    Hi, I’m Devashish, a senior studying Mathematics and Computer Science at Northeastern University. I'm interested in building technology for a better future.
  </p>
   <br/>
    <div>Currently, I'm: </div>
   <ul className="list-disc pl-4">
    <li className="mt-1">writing an operating system in Rust.</li>
    <li className="mt-1">implementing the Raft consensus protocol for distributed systems.</li>
    <li className="mt-1">reading <Link href="https://papl.cs.brown.edu/2020/" text"PAPL"/> to write my own interpreter and compiler.</li>
   </ul>
   <br/>
   <Exps/>
   <br/>
   <p>More information on my projects and work experiences can be found on my <Link href="/resume.pdf" text="resume"/> and <Link href="https://github.com/devashish-sood" text="github"/>. I can also be contacted via <Link href="https://linkedin.com/in/devashishsood9" text="linkedin"/> or <Link href="mailto:devashishsood9@gmail.com" text="email"/>.</p>
  </>
}

export default Home;
