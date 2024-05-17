const FormInput = ({
  label,
  name,
  type,
  defaultValue,
  size,
  handleChange
}: {
  label: string;
  name: string;
  type: string;
  defaultValue?: any;
  size?: string|'';
  handleChange?:any
}) => {
  return (
    <div className="form-control">
      <label htmlFor={name} className="label">
        <span className="label-text capitalize">{label}</span>
      </label>
      <input
      onChange={handleChange}
        type={type}
        name={name}
        defaultValue={defaultValue}
        className={`input input-bordered ${size}`}
      />
    </div>
  );
};
export default FormInput;
