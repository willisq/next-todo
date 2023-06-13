import { deleteProject, getProjectById, updateProject } from "../../../utils/project";

export default async function handler(req, res) {
    try {
        const { id } = req.query;
        switch (req.method) {
            case "GET": {
                const project = await getProjectById(id);
                return res.status(200).json(project);
                break;
            }
            case "POST": {
                const { title, description } = req.body;
                await updateProject(id,title, description, );
                return res.redirect("/projects/projects/");
            }
            case "DELETE": {
                await deleteProject(id);
                return res.json({ sts: true });
                break;
            }
        }
    } catch (error) {
        console.log(error);
        res.status(503).json({ msg: 'ocurrio un error' })
    }
}