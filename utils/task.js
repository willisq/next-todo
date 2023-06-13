import conn from '../lib/db';
import json from "./sentences.json";
const sentences = json.tasks;

async function getTasks(req, res) {
    try {
        const { rows } = await conn.query(sentences.getTasks);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getTaskById(id) {
    try {
        const { rows } = await conn.query(sentences.getTaskById, [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

async function setTask(projectId, title, description ) {
    try {
        await conn.query(sentences.setTask, [projectId, title, description]);
    } catch (error) {
        throw error;
    }
}

async function updateTask(projectId, title, description, taskId) {
    try {
        await conn.query(sentences.updateTask, [projectId, title, description, taskId]);
    } catch (error) {
        throw error;
    }
}

async function deleteTask(id) {
    try {
        await conn.query(sentences.deleteTask, [id]);
    } catch (error) {
        throw error;
    }
}

export {getTasks, setTask, getTaskById, updateTask, deleteTask}