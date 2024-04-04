import { Button } from "antd";

type ButtonType = "primary" | "dashed" | "text" | "link";

export const UIButton = ({
  type = "primary",
  onClick,
  children,
  loading
}: {
  type?: ButtonType;
  onClick: () => void;
  children: React.ReactNode;
  loading?: boolean
}) => {
  return (
    <Button type={type} onClick={onClick} loading={loading}>
      {children}
    </Button>
  );
};
