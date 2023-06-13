import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" href="/tasks/tasks">Tareas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/projects/projects">Proyectos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/projects/create-project">Crear proyecto</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" href="/tasks/create-task">Crear Tarea</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}