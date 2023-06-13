import Layout from "../../components/layout";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useEffect, useState } from "react";

export default function CreateTask() {

    const [projects, setProjects] = useState([]);

    useEffect(() => { fetchData() }, []);

    async function fetchData() {
        const resp = await fetch('/api/projects/');
        const data = await resp.json();
        const p = data.map(option => ({ value: option.project_id, option: option.project_title_de }));
        setProjects(p);
    }
    return (
        <Layout siteTitle="Crear tarea">
            <h1>Crear Tarea</h1>
            <form className="row g-3" method="post" action="/api/tasks/">
                <Input required inputID="task-title" label="Titulo" name="title" />
                <Select required options={projects} name="project" label="Proyecto" />
                <Textarea required inputID="task-description" name="description" label="Descripción"/>
                <Button label="Enviar" />
            </form>
        </Layout>
    );
}