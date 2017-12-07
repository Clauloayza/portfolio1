import createStore from 'redux-zero';
import asientos from '../Img/Projects/reserva.png';
import whatsapp from '../Img/Projects/whatsapp.png';
import invitations from '../Img/Projects/registrationApp.png';
import bicilocas from '../Img/Projects/biciLocas.png';
import firtsportfolio from '../Img/Projects/portfolio.png';
import hackerapi from '../Img/Projects/hackerApi.png';
import lyft from '../Img/Projects/lyft.png';
import scoreboard from '../Img/Projects/scoreboard.png';
import routing from '../Img/Projects/routing.png';


//const portfolio = ['a','b','c']
//const initialState = {
  // portfolio: portfolio,
//};

//const store = createStore(initialState);
//export default store;
//const portfolio = ['a','b','c']

const initialState = {
    info:[
        {
            projects: {
                imgs : [asientos, whatsapp, invitations, bicilocas, firtsportfolio, hackerapi, lyft, scoreboard, routing],
                demo : ["https://clauloayza.github.io/seatsReserve/", "https://clauloayza.github.io/ProyectoWhatsapp/", "https://clauloayza.github.io/RegistrationAppMVC/", "https://clauloayza.github.io/bicis-locas-lvl2/", "https://clauloayza.github.io/proyectoPortfolio/", "https://clauloayza.github.io/hacker/", "https://clauloayza.github.io/lyft-jquery-map/", "https://clauloayza.github.io/proyectoSass", "https://clauloayza.github.io/router/" ],
                github : ["https://github.com/Clauloayza/seatsReserve", "https://github.com/Clauloayza/ProyectoWhatsapp", "https://github.com/Clauloayza/RegistrationAppMVC", "https://github.com/Clauloayza/bicis-locas-lvl2", "https://github.com/Clauloayza/proyectoPortfolio", "https://github.com/Clauloayza/hacker", "https://github.com/Clauloayza/lyft-jquery-map", "https://github.com/Clauloayza/proyectoSass", "https://github.com/Clauloayza/router"],
                titles : ["Reserva de Asientos", "Whatsapp", "Invitados", "Registro para elegir una bicicleta", "mi primer portfolio", "Hacker api", "modo movil lyft", "Scoreboard", "Rounter" ],
                description : ["Reservar asientos, nunca había sido más sencillo (model)", "Mensajea con tus amigos", "Checklist para los invitados de una boda", "Elige un tipo de bicicleta, muy necesarios!", "Conóceme un poco", "Encuentra por nombre de author", "Pide un taxi y el modelo para que puedan recogerte, aplicación", "Controla y agrega a jugadores en sus partidas", "Platarforma más completa"]
            }
       
        }
    ]
            
};

const store = createStore(initialState);
export default store;