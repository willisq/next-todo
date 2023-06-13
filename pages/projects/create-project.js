import Layout from "../../components/layout";
import Input from "../../components/Input";
import Textarea from "../../components/TextArea";
import Button from "../../components/Button";

export default function CreateProject() {
    return (
        <Layout siteTitle="Crear Proyecto">
            <h1>Crear Proyecto</h1>
            <div className="row">

            </div>
            <form className="row g-3" method = 'post' action="/api/projects">
                <Input required inputID="project-title" label="Titulo" name="title" />
                <Textarea required inputID="project-description" name="description" label="Descripción" />
                <Button label = "Enviar"/>
            </form>
        </Layout>
    );
}