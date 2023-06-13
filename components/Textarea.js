import { useState } from "react"
export default function Textarea({ inputID, label, name,...rest }) {
    const [value, setValue] = useState("");
    return (
        <div className="mb-3">
            <label htmlFor={inputID} className="form-label">
                {label}
            </label>
            <textarea
                name = {name}
                className="form-control"
                id={inputID}
                {...rest}
            />
        </div>
    )
}