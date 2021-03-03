import { Bar, InnerBar } from './styles/progress';

export const ProgressBar = ({ value, color }) => {
  return (
    <Bar>
      <InnerBar value={value} color={color} />
    </Bar>
  );
};
