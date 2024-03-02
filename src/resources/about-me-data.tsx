import { ReactElement } from "react";

export const aboutMeData: Record<string, ReactElement>[] = [
  {
    content: (
      <div
        key={1}
        className="xxs:text-sm md:text-lg intersection-invisible xxs:mt-10 xxs:mb-7 md:mb-0 md:mt-4 "
      >
        I am a <span className={`font-bold h-one`}>dedicated</span> software
        developer with an education from Bloom Institute of Technology,
        specializing in<> </>
        <span className={`font-bold h-two`}>Full Stack Web Development</span>.
        Additionally, I am pursuing a Bachelor's degree in<> </>
        <span className={`font-bold h-three`}>accounting </span>
        with a focus on public accounting at GCU.
      </div>
    ),
  },
  {
    content: (
      <div
        key={2}
        className="xxs:text-sm md:text-lg intersection-invisible-two xxs:mb-7 md:mb-4 md:mt-4 lg:mt-4 lg:mb-4"
      >
        My passion lies in the dynamic field of<> </>
        <span className={`font-bold h-four`}>software engineering</span>. Beyond
        the technical expertise it demands, I relish the opportunity to roll up
        my sleeves and actively contribute to projects that have the power to
        <> </>
        <span className={`font-bold h-five`}>impact</span> the world, whether
        that be on a grand scale or a more intimate level. I take great pride in
        my ability to collaborate seamlessly within a team, and my intrinsic
        motivation drives me to consistently surpass expectations and deliver
        exceptional results.
      </div>
    ),
  },
  {
    content: (
      <div
        key={3}
        className="xxs:text-sm md:text-lg  intersection-invisible-three xxs:mb-10 md:mb-0 md:mt-0"
      >
        The realm of software engineering and development truly fuels my
        enthusiasm. I am deeply{" "}
        <span className={`font-bold h-six`}>committed</span> to this
        ever-evolving world of web development, where each day presents fresh
        challenges and opportunities for growth. I find immense satisfaction in
        not only meeting customer needs but<> </>
        <span className={`font-bold h-seven`}>exceeding </span>
        their expectations, all while cherishing the continuous learning journey
        that this field provides.
      </div>
    ),
  },
];
