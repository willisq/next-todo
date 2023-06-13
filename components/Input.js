export default function Input({inputID, label, type = "text", name, ...rest}) {
    return (
        <div className="mb-3">
            <label htmlFor={inputID} className="form-label">
                {label}
            </label>
            <input
                type={type}
                className="form-control"
                id={inputID}
                name={name}
                {...rest}
            />
        </div>
    )
}