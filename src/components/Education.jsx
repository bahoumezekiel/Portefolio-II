import React, { useState } from 'react';
import Modal from './Modal';
import logicielThumb from '../assets/logicielThumb.jpg';
import logicielFull from '../assets/logicielFull.jpg';
import lyceThumb from '../assets/lyceThumb.jpg';
import lyceFull from '../assets/lyceFull.jpg';
import licenceThumb from '../assets/licenceThumb.jpg';
import licenceFull from '../assets/licenceFull.jpg';




const Education = () => {
  const [selectedEducation, setSelectedEducation] = useState(null);

  const educations = [
    {
      id: 1,
      title: "Licence III en Génie logiciel option Analyse de donnees ",
      institution: "Université Virtuelle du BF",
      period: "2024 - ",
      description: "Formation axees sur l'analyse de donnees , la gestion de projets informatique et l'entreprenariat dans le domaine du numerique ",
      details: "Programme couvrant les langages de programmation, les bases de données, les architectures logicielles et la gestion de projet. Spécialisation en développement web et mobile.",
      thumbnail: logicielThumb,
      fullImage: logicielFull,
    },
    {
      id: 2,
      title: "Licence II en genie logiciel",
      institution: "Université Virtuelle du Bf",
      period: "2023 - 2024",
      description: "Niveau DEUG II en genie logiciel , Formation Axées sur le developpement web et mobile , et la gestion de projets",
      details: "Formation axée sur le développement d'applications d'application, la gestion des projets , la securite de l'information , mais aussi la programmation j'ai eu avec mes tuteur differents langages de programmation (java, c++, python , etc). Réalisation des projets tutoret .",
      thumbnail: licenceThumb,
      fullImage: licenceFull
    },
    {
      id: 3,
      title: "Baccalauréat Scientifique",
      institution: "Lycée Municipal de Pô",
      period: "2021 - 2022",
      description: "Baccalauréat Scientifique option Mathematique et science de la nature .",
      details: "Spécialisation en sciences de l'ingénieur avec initiation à la programmation et à la robotique.",
      thumbnail: lyceThumb,
      fullImage: lyceFull
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Ma formation</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {educations.map((education) => (
            <div 
              key={education.id} 
              className="education-card bg-gray-50 rounded-xl shadow-md overflow-hidden border border-gray-200 hover:border-blue-300"
            >
              <div>
                <img 
                  src={education.thumbnail} 
                  alt={education.title} 
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedEducation(education)}
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-2">{education.title}</h3>
                <p className="text-blue-600 font-medium mb-1">{education.institution}</p>
                <p className="text-gray-500 text-sm mb-3">{education.period}</p>
                <p className="text-gray-600">{education.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour afficher les détails de la formation */}
      {selectedEducation && (
        <Modal isOpen={true} onClose={() => setSelectedEducation(null)}>
          <div>
            <img 
              src={selectedEducation.fullImage} 
              alt={selectedEducation.title} 
              className="bg-gray-200 border-2 border-dashed w-full h-50" 
            />
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">{selectedEducation.title}</h3>
          <p className="text-blue-600 font-medium text-lg mb-1">{selectedEducation.institution}</p>
          <p className="text-gray-500 mb-4">{selectedEducation.period}</p>
          <p className="text-gray-700 mb-4">{selectedEducation.description}</p>
          <div className="prose max-w-none">
            <p className="text-gray-700">{selectedEducation.details}</p>
          </div>
        </Modal>
      )}
    </section>
  );
};

export default Education;