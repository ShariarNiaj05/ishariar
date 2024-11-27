const H3Title = ({ title }: { title: string }) => {
  return (
    <h3 className="mt-20 md:mt-0 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-700">
      {title}
    </h3>
  );
};

export default H3Title;
