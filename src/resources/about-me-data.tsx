import { ReactElement } from "react";

export const aboutMeData: Record<string, ReactElement>[] = [
  {
    content: (
      <div className="text-sm text-slate-300 mt-10 p-4 intersection-invisible">
        <span className="pl-4"></span>I am a <span className="">dedicated</span>{" "}
        software developer with an education from Bloom Institute of Technology,
        specializing in
        <span className="">Full-stack web development</span>. Additionally, I am
        pursuing a Bachelor's degree in
        <span className="">Accounting</span> with a focus on public accounting
        at GCU.
      </div>
    ),
  },
  {
    content: (
      <div className="text-sm text-slate-300 mt-5 p-4 intersection-invisible-two">
        <span className="pl-4"></span>My passion lies in the dynamic field of
        <span className=""> software engineering</span>. Beyond the technical
        expertise it demands, I relish the opportunity to roll up my sleeves and
        actively contribute to projects that have the power to
        <span className="">impact</span> the world, whether that be on a grand
        scale or a more intimate level. I take great pride in my ability to
        collaborate seamlessly within a team, and my intrinsic motivation drives
        me to consistently surpass expectations and deliver exceptional results.
      </div>
    ),
  },
  {
    content: (
      <div className="text-sm text-slate-300 mt-5 p-4 mb-20 intersection-invisible-three">
        <span className="pl-4"></span>The realm of software engineering and
        development truly fuels my enthusiasm. I am deeply{" "}
        <span className="">committed</span> to this ever-evolving world of web
        development, where each day presents fresh challenges and opportunities
        for growth. I find immense satisfaction in not only meeting customer
        needs but
        <span className="">exceeding</span> their expectations, all while
        cherishing the continuous learning journey that this field provides.
      </div>
    ),
  },
];
