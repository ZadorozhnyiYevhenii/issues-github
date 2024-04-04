import Search from "antd/es/input/Search";

export const UISearchInput = ({
  loading,
  placeholder
}: {
  loading: boolean,
  placeholder: string
}) => {
  return <Search placeholder={placeholder} loading={loading} />;
};
