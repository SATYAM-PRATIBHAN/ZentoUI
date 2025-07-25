type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ className, children, onClick }: ButtonProps) {
  return (
    <button onClick={onClick} className={className}>
      {children}
    </button>
  );
}
