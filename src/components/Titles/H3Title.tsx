const H3Title = ({ children }: { children: React.ReactNode }) => {
  return (
    <h3 className="text-start my-4 md:mt-0 text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-500">
      {children}
    </h3>
  );
};

export default H3Title;
