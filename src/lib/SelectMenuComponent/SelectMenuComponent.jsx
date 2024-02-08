import s from "./style.module.css";

export default function SelectMenuComponent({ options, value, onChange }) {
  return (
    <select className={s.select} value={value} onChange={onChange}>
      {options.map((option, index) => (
        <option key={index} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
}