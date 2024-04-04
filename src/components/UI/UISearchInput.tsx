import Search from "antd/es/input/Search";

export const UISearchInput = ({
  loading,
  placeholder,
  onChange,
  value,
}: {
  loading: boolean;
  placeholder: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
}) => {
  return (
    <Search
      onChange={(e) => onChange(e)}
      value={value}
      placeholder={placeholder}
      loading={loading}
    />
  );
};
