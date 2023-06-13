import Link from "next/link"
export default function Card({ title, author = 'William Suarez', description, updateTitle = "  Card link", updateRoute = "/", id = "", button }) {

    
    return (
        <div className="card w-100 mb-4" style={{ width: "18rem" }}>
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-body-secondary">{ author}</h6>
                <p className="card-text">
                    {description}
                </p>
                <div className="d-flex justify-content-around">
                <Link href={{
                    pathname: `${updateRoute}${id}`,
                    query: { id }
                }} className="btn btn-warning">
                    {updateTitle}
                </Link>
                {button && button}
                    
                </div>
            </div>
        </div>
    )
}