import Link from "next/link";
import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";

export default function Navbar({ }) {
    const session = useSession();
    console.log("session desde el navbar: ",session);
    // const { name, image } = session.data.user;
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Inicio</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse d-flex justify-content-between" id="navbarNav">
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
                    <button className="btn btn-outline-danger my-2 my-sm-0" onClick={()=>signOut()}>Salir</button>
                </div>
            </div>
        </nav>
    )
}