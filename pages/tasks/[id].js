import Layout from "../../components/layout";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import Button from "../../components/Button";
import Select from "../../components/Select";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export default function UpdateTask() {
    const router = useRouter();
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [option, setOption] = useState("");
    const [projects, setProjects] = useState([]);
    const { id } = router.query;
    useEffect(() => {
        fetchOption();
    }, [])

    async function fetchOption() {
        const res = await fetch(`/api/tasks/${id}`);
        const resp = await fetch('/api/projects/');
        const projectData = await resp.json();
        const json = await res.json();
        const p = projectData.map(option => ({ value: option.project_id, option: option.project_title_de }));
        setProjects(p);
        setOption(json.value)
        setTitle(json.title);
        setDescription(json.description);
    }
    return (
        <Layout siteTitle="Actualizar Tarea">
            <h1>Actualizar Tarea</h1>
            <form className="row g-3" method="POST" action={`/api/tasks/${id}`} >
                <Input inputID="task-title" label="Titulo" name="title" value={title} onChange={e=>setTitle(e.target.value)} />
                <Select options={projects} name="project" label="Proyecto" value={option} onChange={e=>setOption(e.target.value)} />
                <Textarea inputID="task-description" name="description" label="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
                <Button label="Enviar" />
            </form>
        </Layout>
    );
}