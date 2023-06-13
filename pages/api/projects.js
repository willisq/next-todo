import { getProjects, setProject } from "../../utils/project";

export default async function handler(req, res) {
    try {
        const { method } = req;
        let rows;
        switch (method) {
            case 'GET': {
                rows = await getProjects(req, res);
                break;
            }
            case 'POST': {
                const { title, description } = req.body;
                await setProject(title, description);
                return res.redirect("/projects/projects");
                break;
            }
            case 'UPDATE': {
                res.status(200).json(rows);
                break;
            }
            case 'DELETE': {
                res.status(200).json(rows);
                break;
            }
        }
        return res.status(200).json(rows);
    } catch (error) {
        console.log(error);
        res.status(503).json({ msg: 'ocurrio un error' })
    }
}