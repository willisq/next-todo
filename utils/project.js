import conn from '../lib/db';
import json from "./sentences.json";

async function getProjects(req) {
    try {
        const { rows } = await conn.query(json.projects.getProjects);
        return rows;
    } catch (error) {
        throw error;
    }
}

async function getProjectById(id) {
    try {
        const { rows } = await conn.query(json.projects.getProjectById, [id]);
        return rows[0];
    } catch (error) {
        throw error;
    }
}

async function setProject(title, description) {
    try {
        await conn.query(json.projects.setProject, [1, title, description]);
    } catch (error) {
        throw error;
    }
}

async function updateProject(id, title, description){
    try {
        await conn.query(json.projects.updateProject,  [title, description, id]);
    } catch (error) {
        throw error;
    }
}

async function deleteProject(id) {
    try {
        await conn.query(json.projects.deleteProject, [id]);
    } catch (error) {
        throw error;
    }
}

export {getProjects, setProject, getProjectById, deleteProject, updateProject}