const H4Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-start my-4 md:mt-0 text-base md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-secondary">
      {children}
    </h3>
  );
};

export default H4Title;
