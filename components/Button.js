export default function Button({ label, className = "", ...rest }) {
    return (
        <button {...rest} type="submit" className={"btn btn-primary" + " "+className}>
            {label}
        </button>
    )
} 