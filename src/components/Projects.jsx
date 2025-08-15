import React, { useState } from 'react';
import Modal from './Modal';
import jungleThumb from '../assets/jungleThumb.jpg';
import jungleFull from '../assets/jungleFull.jpg';
import zamaThumb from '../assets/zamaThumb.png';
import zamaFull from '../assets/zamaFull.png';
import hotelThumb from '../assets/hotelThumb.JPG';
import hotelFull from '../assets/hotelFull.JPG';
import oriThumb from '../assets/oriThumb.JPG';
import oriFull from '../assets/oriFull.JPG';



const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "La maison Jungle",
      description: "un site web de vente des plantules locale.",
      technologies: ["Postegresql", "DjangoRest", "React js +Tailwind css"],
      details: "La maison jungle est un projet en cour de developpement . ce projet a pour but de mettre en contact les vendeur des plantules avec leur clients , mais egalement eclairer au client sur les condition=n de vie de certains plantes pour mieuxx entretenir leur plantules  ",
      thumbnail: jungleThumb,
      fullImage: jungleFull,
      detaille :"..."
    },
    {
      id: 2,
      title: "OriBF",
      description: "une application mobile mobile d'information et de conseils sur les differents formations academiques.",
      technologies: ["Postgresql", "DjangoRest", "Flutter"],
      details: "Oribf est une application mobile developper lors de ma formation en Flutter a Orange Digital Center , cette application detailles les differents formations academiques , les conditions d'admission , les debouches de chaque formation , les modalites d'inscription et bien plus encore . en plus des detailles des differents formations academique  l'application permet egalement la geolocalisation des differents universites et ecoles de formation",
      thumbnail: oriThumb,
      fullImage: oriFull,
    },
    {
      id: 3,
      title: "ZamaEdu",
      description: "Application mobile de cours en ligne avec une partie hors line ",
      technologies: ["Flutter", "dart", "firebase"],
      details: "Plateforme Numerique permettant un accees facile au ressources pedagogique , avec une bibiotheque integrer , developper lors d'un hackathon ",
      thumbnail: zamaThumb,
      fullImage: zamaFull,
      detaille : "..."
    },
    {
      id: 4,
      title: "Dashbord de gestion des hotels",
      description: "une solution complete pour une meilleur gestions des hotels d'une ville donnees ",
      technologies: ["MongoDb", "Express", "React js +Taillwind css"],
      details: "uce Dashbord permet a l'utilisateur connecter de pouvoir ajouter un hotel de visualiser la listes des hotels disponible , de pouvoir supprimer un hotel, de mettre a jour un hotel , de pouvoir egalement voir les details d'un hotel ,ce Dashbord est responsive  ",
      thumbnail : hotelThumb,
      fullImage: hotelFull
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Mes projets</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="project-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            > 

            <div>
              <img
                src={project.thumbnail}
                alt={project.title}
                className="w-full h-60 object-cover cursor-pointer"
                onClick={() => setSelectedProject(project)}
              />

           </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index} 
                      className="bg-blue-100 text-blue-800 text-xs px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour afficher le projet en détail */}
      {selectedProject && (
        <Modal isOpen={true} onClose={() => setSelectedProject(null)}>
           <div>
            <img
              src={selectedProject.fullImage}
              alt={selectedProject.title}
              className="w-full h-50 object-cover"
            />

           </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">{selectedProject.title}</h3>
          <p className="text-gray-600 mb-4">{selectedProject.description}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {selectedProject.technologies.map((tech, index) => (
              <span 
                key={index} 
                className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full"
              >
                {tech}
              </span>
            ))}
          </div>
          <p className="text-gray-700">{selectedProject.details}</p>
        </Modal>
      )}
    </section>
  );
};

export default Projects;