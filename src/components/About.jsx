
import maPhoto from "../assets/maPhoto.jpg";


const About = () => {
  return (
    <section id="about" className="pt-32 pb-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <h2 className="section-title">À propos de moi</h2>
        
        <div className="flex flex-col md:flex-row items-center gap-10">
          {/* Biographie à gauche */}
          <div className="md:w-1/2">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-800 mb-4">BAHOUM Wépadan Izekiel</h3>
              <p className="text-gray-600 mb-4">
               Étudiant en génie logiciel option Analyse de données à l'Université Virtuelle du Burkina Faso. Développeur passionné 
               par la création d'applications web et mobiles innovantes, avec une expertise croissante en data science.
              </p>
              <p className="text-gray-600 mb-4">
                Fort d'une solide formation en programmation (Python, Java, JavaScript etc) et en conception de bases de données, 
                je maîtrise le développement full-stack et les technologies modernes (React, Flutter, Django, etc).
              </p>
              <p className="text-gray-600">
                Actuellement à la recherche d'un stage pour mettre en pratique mes compétences techniques et contribuer 
                à des projets d'envergure dans le développement web, mobile ou l'analyse de données.
              </p>
            </div>
          </div>
          
          {/* Photo à droite */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative">
               <img
                    src={maPhoto}
                    alt="Photo de BAHOUM Izekiel"
                    className="rounded-xl w-64 h-64 md:w-80 md:h-80 object-cover shadow-lg border-4 border-white"
                />
              <div className="absolute -bottom-4 -right-4 bg-blue-600 text-white px-4 py-2 rounded-lg shadow-lg">
                Développeur web/mobile 
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;