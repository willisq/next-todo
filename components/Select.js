export default function Select({options = [], label = "", name ,...rest}){
    return (
         <div className="mb-3">
            <label htmlFor={label} className="form-label">
                {label}
            </label>
            <select id={label} name={name}className="form-select" {...rest}>
                {options.map(option => (
                    <option key={option.value} value={option.value}>{option.option}</option>
                ))}
            </select>
        </div>
    )

}