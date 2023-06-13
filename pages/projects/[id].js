import { useRouter } from "next/router";
import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import Input from "../../components/Input";
import Button from "../../components/Button";
import Textarea from "../../components/TextArea";

export default function UpdateTask() {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    
    const router = useRouter();
    const { id } = router.query;
    useEffect(() => {
        fetchOption();
    }, []);

    async function fetchOption() {
        const res = await fetch(`/api/projects/${id}`);
        const json = await res.json();
        setTitle(json.project_title_de);
        setDescription(json.project_de);
    }

    return (
        <Layout siteTitle="Actualizar Proyecto">
            <h1>Actualizar Proyecto</h1>
            <form className="row g-3" method="POST" action={`/api/projects/${id}`} >
                <Input inputID="task-title" label="Titulo" name="title" value={title} onChange={e => setTitle(e.target.value)} />
                <Textarea inputID="task-description" name="description" label="Descripción" value={description} onChange={e => setDescription(e.target.value)} />
                <input type="hidden" name="id" value={id}/>
                <Button label="Enviar" />
            </form>
        </Layout>
    );
}