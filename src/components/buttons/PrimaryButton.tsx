import { Button } from "../ui/moving-border";

const PrimaryButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <Button
      borderRadius="1.75rem"
      className="bg-white dark:bg-secondary text-black dark:text-white font-bold border-neutral-200 dark:border-background"
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
