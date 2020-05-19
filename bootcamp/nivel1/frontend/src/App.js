import React, { useState, useEffect } from 'react';
import api from './services/api';

import './App.css';

import Header from './components/Header';

function App() {
  const [ projects, setProjects ] = useState([]);

  useEffect(() => {
    api.get('projects').then(response => {
      setProjects(response.data);
    })
  }, [])

  function handleAddProject() {
    api.post('projects', {
      "title": `Novo projeto ${Date.now()}`,
      "owner": "Antonio Sousa"
    }).then(response => {
      const project = response.data;
      setProjects([...projects, project]);
    })
  }

  function handleDeleteProject(id) {
    api.delete(`projects/${id}`).then(() => {
      const index = projects.findIndex(project => project.id === id);
      const newProjects = projects;
      newProjects.splice(index, 1);

      if(index >= 0) setProjects([...newProjects]);
    })
  }

  return (
    <>
      <Header title="Projetos">Os projetos listados são:</Header>
 
      <ul>
        {projects.map(project => 
          <li key={project.id}>{project.title} 
            <button type="button" onClick={() => handleDeleteProject(project.id)}>Deletar projeto</button>
          </li>)}
      </ul>

      <button type="button" onClick={handleAddProject}>Adicionar projeto</button>
    </>
  );
}

export default App;
