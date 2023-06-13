import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function Projects() {
	const [projects, setProjects] = useState([]);

	useEffect(() => { fetchData() }, []);

	async function fetchData() {
		const resp = await fetch('/api/projects');
		const data = await resp.json();
		setProjects(data);
	}

	async function handleClick(e) {
		const resp = await fetch(`/api/projects/${e.target.id}`, {
			method: "DELETE",
		})
		const data = await resp.json();
		if (!data.sts) return;
		setProjects(projects.filter(project => project.project_id !== parseInt(e.target.id)));
	}

	return (
		<Layout siteTitle="Proyectos">
			<h1>Proyectos</h1>
			{
				projects.length > 0 &&
				<div className="row">
					{
						projects.map(project => (
							<div className="col-sm-6 col-lg-4" key={project.project_id}>
								<Card author="William" title={project.project_title_de} description={project.project_de} id={project.project_id} updateTitle="Editar" updateRoute="/projects/"
									button={<Button className="btn-danger" label="Eliminar" onClick={handleClick} id={project.project_id} />} />
							</div>
						))
					}
				</div>
			}
		</Layout>
	);
}