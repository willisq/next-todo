import { getTasks, setTask } from "../../utils/task";

export default async function handler(req, res) {
    try {
        const { method } = req;
        let rows;
        switch (method) {
            case 'GET': {
                rows = await getTasks(req, res);
                break;
            }
            case 'POST': {
                const { title, description, project } = req.body;
                await setTask(project, title, description);
                return res.redirect("/tasks/tasks/");
                break
            }
        }
        res.status(200).json(rows); 
    } catch (error) {
        console.log(error);
        res.status(503).json({msg: 'ocurrio un error'})
    }
}