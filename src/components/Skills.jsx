import React from 'react';

const Skills = () => {
  const skillsCategories = [
    {
      title: "Programmation",
      skills: ["Python","JavScript","PHP","PL/SQL", "Java", "C++","dart (Android)"]
    },
    {
      title: "Frameworks & Bibliothèques",
      skills: [ "Django","Express","Laravel", "NodeJs & React"," Flutter", "Tailwind CSS & Bootstrap"]
    },
    {
      title: "Base de données",
      skills: [ "PostgreSQL","MongoDB" ,"MySQL", "Neo4j", ]
    },
    {
      title: "Technologies Web",
      skills: ["HTML", "CSS", "JavaScript", "", "WordPress"]
    },
    {
      title: "Outils & Méthodologies",
      skills: ["Git & github","Figma", "Trello" , "UML", "Merise"]
    },
    {
      title: "Outils d'Analyse de données",
      skills: ["Excel", "Power BI", "Tableau", "Python (Librairis)"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">Mes compétences</h2>
        
        {/* Layout en colonnes verticales */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="skill-category bg-gray-50 rounded-xl p-6 border border-gray-200 hover:shadow-lg transition-shadow">
              {/* Titre de la catégorie */}
              <h3 className="text-xl font-bold text-gray-[800] mb-4 text-center bg-blue-500 text-white py-2 rounded-lg">
                {category.title}
              </h3>
              
              {/* Liste verticale des compétences */}
              <div className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex} 
                    className="skill-item bg-white rounded-md p-3 text-center border border-gray-200 hover:border-blue-300 hover:bg-blue-50 cursor-pointer transition-all duration-300"
                  >
                    <div className="text-blue-600 font-medium text-sm">{skill}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;