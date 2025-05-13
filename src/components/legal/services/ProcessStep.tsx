
import Icon from "@/components/ui/icon";
import { ProcessStepProps } from "./types";

const ProcessStep = ({ icon, title, description }: ProcessStepProps) => (
  <div className="text-center">
    <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-900">
      <Icon name={icon} className="h-6 w-6" />
    </div>
    <h4 className="mt-2 font-medium">{title}</h4>
    <p className="mt-1 text-sm text-slate-600">
      {description}
    </p>
  </div>
);

export default ProcessStep;
