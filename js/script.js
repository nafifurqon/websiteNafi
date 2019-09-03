const menu = document.querySelector('.menu');
const nav = document.querySelector('.navigasi');
const navigasi = document.querySelectorAll('.navigasi li');
const idPersonal = document.getElementById("kotak-personal");
const idExperience = document.getElementById("kotak-experience");
const idEducation = document.getElementById("kotak-education");
const idOrganization = document.getElementById("kotak-organization");
const idCommitee = document.getElementById("kotak-commitee");
const idKnowledge = document.getElementById("kotak-knowledge");
const idInterest = document.getElementById("kotak-interest");

const navSlide = () => {

    menu.addEventListener('click', () => {
        //Toggle nav
        nav.classList.toggle('nav-active');
        
        //Animasi links
        navigasi.forEach((link, index) =>{
            if(link.style.animation){
                link.style.animation = '';
            } else {
                link.style.animation = `navigasiFade 0.5s ease forwards ${index/5}s`;
            }
        });

        //Animasi menu
        menu.classList.toggle('toggle');
    }); 
}

navSlide();

//Muncul tombol menu dan transisi kotak khusus tampilan desktop
window.onscroll = () => {
    if(window.screen.width > 768){
        if(document.documentElement.scrollTop > 53){
            idPersonal.style.animation = "animasiKotak 2s ease";
            idExperience.style.animation = "animasiKotak 2s ease";    
        } if(document.documentElement.scrollTop > 405){
            idEducation.style.animation = "animasiKotak 2s ease";
            idOrganization.style.animation = "animasiKotak 2s ease";    
        } if(document.documentElement.scrollTop > 718){
            idCommitee.style.animation = "animasiKotak 2s ease";
            idKnowledge.style.animation = "animasiKotak 2s ease";    
        } if(document.documentElement.scrollTop > 1137) {
            idInterest.style.animation = "animasiKotak 2s ease";    
        } if (document.documentElement.scrollTop > 100) {
            menu.style.display = "block";
        } else  {
            menu.style.display = "none";
        }
    }
}

