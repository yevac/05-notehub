import css from "./SearchBox.module.css";

interface Props {
  onSearch: (value: string) => void;
}

export default function SearchBox({ onSearch }: Props) {
  return (
    <input
      className={css.input}
      type="text"
      placeholder="Search notes"
      onChange={(e) => onSearch(e.target.value)}
    />
  );
}
