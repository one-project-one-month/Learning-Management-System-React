import { Progress } from './ui/progress';

const ProgressDemo = ({ progress }: { progress: number }) => {
  return <Progress value={progress} className="w-[100%]" />;
};

export default ProgressDemo;
