import { StackType, frontend_stack } from "../resources/tech-stack-data";

export default function FrontendStack() {
  return (
    <div className="flex flex-col w-full min-h-dvh h-fit items-center">
      <div className="flex justify-evenly w-full mt-10 text-2xl min-h-20 items-center font-bold">
        <div>Return</div>
        <div>Frontend Stack</div>
        <div>View Backend</div>
      </div>
      <div className=" w-11/12 flex flex-wrap justify-evenly min-h-dvh h-fit mt-10 mb-10">
        {frontend_stack.map((n: StackType, i: number) => {
          return (
            <div className=" outline-custom-main cards-all" key={i}>
              <div>{n.icon}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}