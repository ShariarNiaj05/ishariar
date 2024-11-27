const H2Titles = ({ children }: { children: React.ReactNode }) => {
  return (
    <h2 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
      {children}
    </h2>
  );
};

export default H2Titles;
