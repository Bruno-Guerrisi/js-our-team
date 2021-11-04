// 1) Creiamo il nostro array di oggetti che rappresentano ciascun membro del team



const teamContainer = document.querySelector('.team-container');

const users = [

    {
        name: 'Wayne Barnett',
        role: 'Founder & CEO',
        imageUser: 'img/wayne-barnett-founder-ceo.jpg',
    },
    {
        name: 'Walter Gordon',
        role: 'Office Manager',
        imageUser: 'img/walter-gordon-office-manager.jpg',
    },
    {
        name: 'Scott Estrada',
        role: 'Developer',
        imageUser: 'img/scott-estrada-developer.jpg',
    },
    {
        name: 'Barbara Ramos',
        role: 'Graphic Designer',
        imageUser: 'img/barbara-ramos-graphic-designer.jpg',
    },
    {
        name: 'Angela Lopez',
        role: 'Social Media Manager',
        imageUser: 'img/angela-lopez-social-media-manager.jpg',
    },
    {
        name: 'Angela Caroll',
        role: 'Chief Editor',
        imageUser: 'img/angela-caroll-chief-editor.jpg',
    },

];

/* stampa membri */
generateUsers(users, teamContainer);

/* funzioni per stapare i membri */
function generateUsers(users) {
    
    for (let i = 0; i < users.length; i++) {

        const userAccount = users[i];

        teamContainer.innerHTML += 
        `<div class="team-card">
            <div class="card-image">
              <img
                src="${userAccount.imageUser}"
                alt="${userAccount.name}"
              />
            </div>
            <div class="card-text">
              <h3>${userAccount.name}</h3>
              <p>${userAccount.role}</p>
            </div>
          </div>`;
    }
}