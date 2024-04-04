import Search from "antd/es/input/Search";

export const UISearchInput = ({
  loading,
  placeholder,
  onChange,
  value,
}: {
  loading: boolean;
  placeholder: string;
  onChange: () => void;
  value: string;
}) => {
  return (
    <Search
      onChange={onChange}
      value={value}
      placeholder={placeholder}
      loading={loading}
    />
  );
};
