
type ButtonProps = {
  className?: string;
  appName: string;
  children: React.ReactNode;
};

export function Button({ className, appName, children }: ButtonProps){
  return (
    <button
      className={className}
      onClick={() => alert(appName)}
    >
      {children}
    </button>
  );
}
