import React, { useState } from 'react';
import Modal from './Modal';

// Import des images depuis le dossier assets
import miabeCert from '../assets/miabe-hackathon.jpg';
import dataCert from '../assets/analyse-donnees.jpg';
import cyberCert from '../assets/cybersecurite.jpg';
import regressionCert from '../assets/regression.jpg';
import machineLearningCert from '../assets/machine-learning.jpg';

const Certifications = () => {
  const [selectedCertification, setSelectedCertification] = useState(null);

  const certifications = [
    {
      id: 1,
      title: "Certification finaliste de MIABE HACKATHON",
      issuer: "DTC",
      date: "Mai 2025",
      description: "Au cours de ce hackathon j'ai dirigé une équipe de 4 personnes pour développer une application de cours en ligne, visant à améliorer l'accès à l'éducation numérique. Nous avons utilisé les technologies différentes pour mettre en place cette solution innovante (Flutter pour le frontend, djangoRest pour le backend et postgresql pour la base de données) Cette expérience m'a permis de renforcer mes compétences en gestion de projet et en développement d'applications mobile.",
      image: miabeCert
    },
    {
      id: 2,
      title: "Certification en Analyse de données",
      issuer: "FORCE-N",
      date: "Novembre 2024 - AVRIL 2025",
      description: "Formation axée sur l'analyse de données, la visualisation et l'utilisation d'outils de data science. J'ai acquis des compétences en Python, SQL et en utilisation de bibliothèques comme Pandas et Matplotlib seaborn et en analyse statistiques avancées pour extraire des insights significatifs des données. Cette formation m'a permis de développer une compréhension approfondie des techniques d'analyse de données et de leur application dans divers domaines.",
      image: dataCert
    },
    {
      id: 3,
      title: "Certification Analyste en Cybersécurité",
      issuer: "Force-N",
      date: "Mai 2025",
      description: "Formation en cybersécurité axée sur la protection des systèmes d'information, la détection des menaces et la réponse aux incidents. J'ai appris à identifier les vulnérabilités, à mettre en œuvre des mesures de sécurité et à analyser les incidents de sécurité pour protéger les données sensibles. Cette formation m'a permis de comprendre les principaux aspects de la cybersécurité et de prendre des mesures appropriées pour protéger les systèmes d'information.",
      image: cyberCert
    },

     {
      id: 4,
      title: "Certification Machine Learning et Régression",
      issuer: "Bakeli",
      date: "juillet 2025",
      description: "cette formation est axee sur le developpement des modeles de machine learning et la regression , j'ai appris a utiliser les differents algorithmes de machine learning pour developper des modeles de prediction , mais aussi a utiliser les differents outils de visualisation de donnees pour mieux comprendre les resultats obtenus .",
      image: regressionCert
    },


    {
      id: 5,
      title: "Certification Machine Learning",
      issuer: "Coursera",
      date: "Avril 2025",
      description: "Formation complète en apprentissage automatique couvrant les algorithmes fondamentaux, l'analyse de données et l'implémentation pratique. J'ai acquis des compétences en Python, scikit-learn et TensorFlow pour développer des modèles prédictifs et résoudre des problèmes complexes de classification et de régression.",
      image: machineLearningCert
    },

    {
      id: 6,
      title: "Certification développeur fullstack",
      issuer: "Orange Digital Center",
      date: "Mars 2025 - Juin 2025",
      description: "Formation intensive en développement mobile fullstack, couvrant les technologies front-end et back-end. J'ai acquis des compétences en langage dart et framework flutter, mais également des compétences significatives dans le développement des API rest avec le framework laravel.",
       
    }
  ];

  return (
    <section id="certifications" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Mes certifications</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((certification) => (
            <div 
              key={certification.id} 
              className="certification-card bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow"
            >
              <div>
                <img
                  src={certification.image}
                  alt={certification.title}
                  className="w-full h-48 object-cover cursor-pointer"
                  onClick={() => setSelectedCertification(certification)}
                />
              </div>
              
              <div className="p-5">
                <h3 className="text-lg font-bold text-gray-800 mb-2">{certification.title}</h3>
                <p className="text-blue-600 text-sm mb-1">{certification.issuer}</p>
                <p className="text-gray-500 text-sm">{certification.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal pour afficher la certification en grand */}
      {selectedCertification && (
        <Modal isOpen={true} onClose={() => setSelectedCertification(null)}>
          <div>
            <img
              src={selectedCertification.image}
              alt={selectedCertification.title}
              className="w-full h-96 object-contain"
            />
          </div>
          
          <h3 className="text-2xl font-bold text-gray-800 mt-6 mb-2">{selectedCertification.title}</h3>
          <p className="text-blue-600 font-medium text-lg mb-1">{selectedCertification.issuer}</p>
          <p className="text-gray-500 mb-4">{selectedCertification.date}</p>
          <p className="text-gray-700">{selectedCertification.description}</p>
        </Modal>
      )}
    </section>
  );
};

export default Certifications;