type ButtonProps = {
  className?: string;
  children: React.ReactNode;
  onClick?: () => void;
};

export function Button({ className, children, onClick }: ButtonProps) {
  return (
    <div
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "center",
        gap: "1rem",
      }}
    >
      <button onClick={onClick} className={className}>
        {children}
      </button>
    </div>
  );
}
