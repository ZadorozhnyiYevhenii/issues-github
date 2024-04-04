import { Button } from "antd";

type ButtonType = 'primary' | 'dashed' | 'text' | 'link';
 
export const UIButton = ({
  type = 'primary',
  onClick,
  children
}: {
  type?: ButtonType,
  onClick: () => void,
  children: React.ReactNode
}) => {
  return (
    <Button type={type} onClick={onClick}>{children}</Button>
  );
};