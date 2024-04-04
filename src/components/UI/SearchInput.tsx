import Search from "antd/es/input/Search";

export const SearchInput = ({
  loading,
  placeholder
}: {
  loading: boolean,
  placeholder: string
}) => {
  return <Search placeholder={placeholder} loading={loading} />;
};
