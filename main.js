/* 
1) Creiamo il nostro array di oggetti che rappresentano ciascun membro del team
2)
 */

/* container uteti*/
const teamContainer = document.querySelector('.team-container');

/* nuovi membri */
const newImage= document.getElementById('image');
const newName = document.getElementById('name');
const newRole = document.getElementById('role');
const buttonNewUser = document.getElementById('addMemberButton');

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
generateAllUsers(users, teamContainer);

buttonNewUser.addEventListener('click', ()=>{
    
    const nameNewUser = newName.value;
    const RoleNewUser = newRole.value;
    const newimageUser = newImage.value;

    
    const addNewUser = {
        name: `${nameNewUser}`,
        role: `${RoleNewUser}`,
        imageUser: `${newimageUser}`,
    };

    users.push(addNewUser);

    /*  METODO PER AGGIUNGERE I NUOVI UTENTI SENZA USARE UNA FUNZIONE */
    teamContainer.innerHTML = '';
    generateAllUsers(users,teamContainer)

    /*  METODO PER AGGIUNGERE I NUOVI UTENTI CON UNA FUNZIONE */
    generateNewUsers(users,teamContainer);
});


/* funzioni per stapare i membri gia presenti*/
function generateAllUsers(users,teamContainer) {
    
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


/*  METODO PER AGGIUNGERE I NUOVI UTENTI CON UNA FUNZIONE */
/* funzioni per stapare i nuovi membri */
/* function generateNewUsers(users,teamContainer) {
    teamContainer.innerHTML += 
    `<div class="team-card">
        <div class="card-image">
            <img
            src="${users[users.length -1].imageUser}"
            alt="${users[users.length -1].name}"
            />
        </div>
        <div class="card-text">
            <h3>${users[users.length -1].name}</h3>
            <p>${users[users.length -1].role}</p>
        </div>
    </div>`;
} */