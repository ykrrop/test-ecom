interface CalculatorButtonProps {
  label: string;
  onClick: () => void;
  className?: string;
}

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  label,
  onClick,
  className,
}) => (
  <button
    onClick={onClick}
    className={`rounded-xl p-2 ${className} hover:bg-gray-400`}
  >
    {label}
  </button>
);

export default CalculatorButton;
