import { ReactNode } from "react";

const Home = () => {
  return <>
  <p>
    Hi, I’m Devashish, a senior studying Mathematics and Computer Science at Northeastern University. I'm interested in building technology for a better future.
   </p>
   <br/>
    This summer, I'm: 
   <ul className="list-disc pl-4 py-2">
    <li className="my-1">working my way through LLM101n.</li>
    <li className="my-1">writing an operating system in Rust.</li>
    <li className="my-1">chipping away at my reading list.</li>
   </ul>
   <br/>
   <Exps/>
  </>
}

interface ExpProps {
  heading: ReactNode, 
  duration: string, 
  description: ReactNode
}

const Exp = (props: ExpProps) => {
  return (
    <div className="flex my-4">
      <div className="w-1 flex-shrink-0 bg-black rounded-lg"></div>
      <div className="ml-4 flex-grow">
        <div className="flex justify-between items-center mb-2">
          <h2 className="text-l font-semibold">{props.heading}</h2>
          <span className="text-gray-500 text-sm">{props.duration}</span>
        </div>
        <p className="mt-2">{props.description}</p>
      </div>
    </div>
  );
}

const Exps = () => {
  return (
  <div>
    <h2 className="text-xl font-bold">
      Past Experiences
    </h2>
    <Exp 
      heading={<a href="https://www.klaviyo.com/" className="hover:underline">Klaviyo</a>}
      duration="January 2024 - July 2024"
      description={<>Improved benchmark accuracy by <strong>&gt;50%</strong> through bot exclusion, expanded attribution framework offerings and increased <span className='relative group inline-block'>CLV
        <span className="absolute left-1/2 transform -translate-x-1/2 bottom-full mb-1 text-xs text-white bg-black rounded px-2 py-1 whitespace-nowrap opacity-0 group-hover:opacity-100 group-hover:visible">
          Customer Lifetime Value
        </span>
      </span> prediction robustness.</>}
      />
    <Exp 
      heading={<a href="https://pos.toasttab.com/" className="hover:underline">Toast</a>}
      duration="January 2023 - July 2023" 
      description={<>Helped scale analytics and archiving services on the <strong>Data Platforms</strong> team.</>}
      />
    <Exp
      heading={<a href="https://github.com/sandboxnu/nucarpool" className="hover:underline">CarpoolNU</a>}
      duration="September 2022 - January 2024"
      description={<>Built and launched a carpooling app for Northeastern's co-op program. The application serves <strong>~1000</strong> students every semester. The app is now maintained by the university.</>}
      />
  </div>
  )
}


export default Home;