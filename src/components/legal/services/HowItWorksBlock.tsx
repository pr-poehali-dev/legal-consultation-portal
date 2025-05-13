
import { HowItWorksBlockProps } from "./types";

const HowItWorksBlock = ({ title, children }: HowItWorksBlockProps) => (
  <div className="mt-10 rounded-lg bg-slate-50 p-6">
    <h3 className="text-lg font-semibold">{title}</h3>
    <div className="mt-4 grid gap-6 md:grid-cols-4">
      {children}
    </div>
  </div>
);

export default HowItWorksBlock;
