import './input.css'
function Input({
  password = false,
  placeholder,
  title,
  maxLength ,
  value,
}) {


  return (
    <div className="input-container">
      <label>{title}</label>
      <input
        value={value}
        type={password ? 'password' : 'text'}
        placeholder={placeholder}
        title={title}
        maxLength={maxLength || undefined}
        required
      />
    </div>
  );
}


export default Input;
