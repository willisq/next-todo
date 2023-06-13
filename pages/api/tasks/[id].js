import { deleteTask, getTaskById, updateTask } from "../../../utils/task";

export default async function handler(req, res) {
   try {
       const { id } = req.query;
       switch (req.method) {
           case "GET": {
               const task = await getTaskById(id);
               return res.status(200).json(task);
               break;
           }
           case "POST": {
               const { project, title, description } = req.body;
               await updateTask(project, title, description, id);
               return res.redirect("/tasks/tasks/");
           }
           case "DELETE": {
               await deleteTask(id);
               return res.json({ sts: true });
               break;
           }
       }
   } catch (error) {
       console.log(error);
       res.status(503).json({ msg: 'ocurrio un error' });
   }
}