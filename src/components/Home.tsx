import Exps from "./Exps";
import { Link } from "./Utils";

const Home = () => {
  return <>
  <p>
    Hi, I’m Devashish, a senior studying Mathematics and Computer Science at Northeastern University. I'm interested in building technology for a better future.
  </p>
   <br/>
    <div>This summer, I'm: </div>
   <ul className="list-disc pl-4">
    <li>working my way through LLM101n.</li>
    <li className="mt-1">writing an operating system in Rust.</li>
    <li className="mt-1">exploring the Balkans!</li>
    <li className="mt-1">doing some light Colorado backpacking &#127956;</li>
   </ul>
   <br/>
   <Exps/>
   <br/>
   <p>More information on my projects and work experiences can be found on my <Link href="/resume.pdf" text="resume"/> and <Link href="https://github.com/devashish-sood" text="github"/>. I can also be contacted via <Link href="https://linkedin.com/in/devashishsood9" text="linkedin"/> or <Link href="mailto:devashishsood9@gmail.com" text="email"/>.</p>
  </>
}

export default Home;