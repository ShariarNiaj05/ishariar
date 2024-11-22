import { Button } from "../ui/moving-border";

const SecondaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      borderRadius="1.75rem"
      className="bg-white dark:bg-primary text-black dark:text-black font-bold border-neutral-200 dark:border-secondary"
    >
      {children}
    </Button>
  );
};

export default SecondaryButton;
