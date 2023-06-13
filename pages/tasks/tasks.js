import Layout from "../../components/layout";
import { useEffect, useState } from "react";
import Card from "../../components/Card";
import Button from "../../components/Button";

export default function Tasks() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => { fetchData(); }, []);

  async function fetchData() {
    const resp = await fetch('/api/tasks');
    const data = await resp.json();
    setTasks(data);
  }

  async function handleClick(e) {
    const resp = await fetch(`/api/tasks/${e.target.id}`, {
      method: "DELETE",
    })
    const data = await resp.json();
    if (!data.sts) return;
    setTasks(tasks.filter(task => task.task_id !== parseInt(e.target.id)));
  }

  return (
    <Layout siteTitle="Tareas">
      <h1>Tareas</h1>
      {
        tasks.length > 0 &&
        <div className="row">
          {
            tasks.map(task => (
              <div className="col-sm-6 col-lg-4" key={task.task_id}>
                <Card author="William" title={task.task_title_de} description={task.task_de} id={task.task_id} updateTitle="Editar" updateRoute="/tasks/" button={<Button className="btn-danger" label="Eliminar" onClick={handleClick} id={task.task_id} />} />
              </div>
            ))
          }
        </div>
      }
    </Layout>
  );
}