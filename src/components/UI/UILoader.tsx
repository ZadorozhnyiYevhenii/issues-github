import { LoadingOutlined } from "@ant-design/icons";

const styles = {
  fontSize: "250%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

export const UILoader = () => {
  return <LoadingOutlined style={{ ...styles }} />;
};
