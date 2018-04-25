  'use strict'
const targetElement = document.getElementById('main')

const requetes = [
  {
    id : 1,
    description : "Bonjour, j'ai besoin d'aide sur les fonctions.",
    topic : "JavaScript",
    date : "2018-04-20",
  },

  {
    id : 2,
    description : "Bonjour, j'ai besoin d'aide sur la créations de bases de données.",
    topic : "MySQL",
    date : "2018-04-24",
  }
]


const accueilhtml =
/* @html */`<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  bg-white border-bottom box-shadow" id="navBarAcc">
   <h4 class="my-0 mr-md-auto"></h4>
   <nav class="my-2 my-md-0 mr-md-3">
      <a href='/helper' data-container="body" data-toggle="popover" data-trigger="hover" data-placement="bottom" data-content="Inscris toi pour aider les nouveaux élèves !">Alumni</a>
   </nav>
   <a class="btn" href="/connexion">Connexion</a>
</div>
<!-- barre de recherche -->
<!-- <div class="row background">
   <video class="container-fluid" loop="0" autoplay="true">
      <source src="/image/Projet04.mp4" type="video/mp4"/>
   </video> -->
    <div class="row background">
  <img class ="container-fluid" src="/image/gif1.gif" type="image/gif" height="150%" loop="0" />
   <div class="accInscription">
      <h1>Wild Help</h1>
      <p>Profite de la communauté des développeurs Alumni de la Wild pour t'aider à résoudre les casse-têtes les plus fous durant ta formation !</p>
      <a href="/wilder"><button type="button" class="btn">Inscription</button></a>
   </div>
</div>`


$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
$(document).hover(function(){
       $("[data-toggle='popover']").popover('hide');
   });

const inscriptionHtml = (title, type) =>
/* @html */ `<div class="container">
   <form id="myForm" class="form-horizontal" method="POST" action="/register">
      <input type="hidden" name="account-type" value="${type}" />
      <div class="row">
         <div class="col-md-3"></div>
         <div class="col-md-6">
            <h1>${title}</h1>
            <hr>
         </div>
      </div>
      <div class="col-md-12">
         <div class="card">
            <div class="card-body">
               <div class="row">
                  <div class="col-md-4">
                     <label for="name">Prénom</label>
                     <div class="form-group">
                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                        <input type="text" name="name" class="form-control" id="name" placeholder="John" required>
                     </div>
                     <label for="name">Nom</label>
                     <div class="form-group">
                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-user"></i></div>
                        <input type="text" name="name" class="form-control" id="name" placeholder="Doe" required>
                     </div>
                     <label for="email">E-mail</label>
                     <div class="form-group">
                        <div class="input-group-addon" style="width: 2.6rem"><i class="fa fa-at"></i></div>
                        <input type="text" name="email" class="form-control" id="email" placeholder="wilder@example.com" required>
                     </div>
                     <a href="/languages"><button type="button" class="btn btn-primary">
                     S'inscrire
                     </button></a>
                     <a href="/connexion"><button type="button" class="btn btn-primary ml-5">
                     Déjà inscrit ?
                     </button></a>
                  </div>
                  <div class="container-fluid col-md-8">
                     <div class="ImgInscription">
                        <img class="d-block" src="/image/formInsc.jpg" alt="ImgInscription">
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </form>
</div>`

const languageHtml = /* @html */`<div class="nav-side-menu">
   <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <a class="p-2 text-dark" href="/">
         <h5 class="my-0 mr-md-auto font-weight-normal">Accueil</h5>
      </a>
      <a class="btn btn-log-out" href="/"><span class="glyphicon glyphicon-log-out">Deconnexion </span> </a>
   </div>
</div>
<div class="titleLanguages">
   <h1>Langages proposés</h1>
</div>
<div class="container">
   <div class="row" id="languages">
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete"><img src="https://developer.akamai.com/blog/wp-content/uploads/2017/03/android-logo.png" alt="Android Logo" id="logoLanguages"/></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete"><img src="http://blog.zenika.com/wp-content/uploads/2016/04/java-logo.png" alt="Java Logo" id="logoLanguages"/></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete"><img src="http://edmundtian.com/images/nodejs.ico" alt="JavaScript Logo" id="logoLanguages"/></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete"><img src="http://nikhilnanjappa.github.io/img/react-logo.png" alt="React Logo" id="logoLanguages"/></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete">
         <img src="https://camo.githubusercontent.com/0f946287c3cbcdd7d71f99ef18dcc506ba2e2186/687474703a2f2f7777772e69636f6e61747469747564652e636f6d2f69636f6e732f6f70656e5f69636f6e5f6c6962726172792f617070732f706e672f3235362f707974686f6e322e352e706e67" alt="Python Logo" id="logoLanguages" /></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete"><img src="http://muchocodigo.com/wp-content/uploads/2013/11/php.jpg" alt="Php Logo" id="logoLanguages" /></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete">
         <img src="http://rodrigovenancio.info/wp-content/uploads/2017/04/1491199643_angular.png" alt="Angular Logo" id="logoLanguages" /></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete"><img src="http://onusinfotech.com/wp-content/uploads/2_0.png" alt="Symfony Logo" id="logoLanguages" /></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete">
         <img src="https://silentbedlam.gallerycdn.vsassets.io/extensions/silentbedlam/vuejs-jquery-bootstrapprojecttemplate/1.0/1491418503089/257278/1/thumbnail.png" alt="VueJs Logo" id="logoLanguages" /></a>
      </div>
      <div class="col-md-3 col-xs-6 logo">
         <a href="/requete"><img src="http://www.flook.co/img/skills/nodejs.ico" alt="NodeJs Logo" id="logoLanguages" /></a>
      </div>
   </div>
</div>`

const connexionHtml = /* @html */ `<section class="login-block">
   <div class="container" id="loginco">
      <div class="row">
         <div class="col-md-4 login-sec">
            <h2 class="text-center">Connexion</h2>
            <form class="login-form">
               <div class="form-group">
                  <label for="exampleInputEmail1" class="text-uppercase">E-mail</label>
                  <input id="exampleInputEmail1" type="text" class="form-control" placeholder="">
               </div>
               <div class="form-group">
                  <label for="exampleInputPassword1" class="text-uppercase">Mot de Passe</label>
                  <input id="exampleInputPassword1" type="password" class="form-control" placeholder="">
               </div>
               <div class="form-check">
                  <label class="form-check-label">
                  <input type="checkbox" class="form-check-input">
                  <small>Se souvenir de moi</small>
                  </label>
                  <button type="submit" class="btn btn-login float-right">Envoyer</button>
               </div>
            </form>
         </div>
         <div class="col-md-8 banner-sec">
            <div id="carousel" class="carousel slide" data-ride="carousel">
               <div class="carousel-inner" role="listbox">
                  <div class="carousel-item active">
                     <img class="d-block img-fluid" src="https://images.unsplash.com/photo-1497171156029-51dfc973e5f9?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=c8e7ca2e7514a9e0e66fcc2091dc2ad5&auto=format&fit=crop&w=1050&q=80" alt="First slide">
                  </div>
                  <div class="carousel-item">
                     <img class="d-block img-fluid" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=37c91c8e3f63462e0739c676dfe8fee8&auto=format&fit=crop&w=1050&q=80" alt="Second slide">
                  </div>
                  <div class="carousel-item">
                     <img class="d-block img-fluid" src="https://images.unsplash.com/photo-1506452819137-0422416856b8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=35c3a22e647b11004efd8135de82164c&auto=format&fit=crop&w=966&q=80" alt="Third slide">
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</section>`

const coursproposeHtml = /* @html */ `<div class="nav-side-menu">
   <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <a class="p-2 text-dark" href="/">
         <h5 class="my-0 mr-md-auto font-weight-normal">Accueil</h5>
      </a>
      <nav class="my-2 my-md-0 mr-md-3">
         <a href="/" class="btn">
         <span class="glyphicon glyphicon-log-out"></span> Deconnexion </a>
      </nav>
    </div>
    </div>
    <div class="container">
       <div class="row">
          <div class="col-xs-8">
             <h3>Proposition de cours</h3>
             <h4>Sujet traité</h4>
             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas neque justo, pellentesque quis sagittis sed, placerat nec justo. Maecenas pulvinar lobortis lacus, vitae malesuada turpis mollis quis. Praesent sit amet nulla vitae velit luctus mollis. Aenean rhoncus aliquam viverra. Sed sed leo ligula.</p>
          </div>
          <div class="col-xs-3 col-xs-offset-1">
             <h4>Profil helper</h4>
             <p>Lorem ipsum dolor sit amet</p>
          </div>
       </div>
       <div class="row">
          <div class="col-xs-12">
             <h4>Infos diverses</h4>
             <p>Date : ## </p>
             <p>Lieu : ## </p>
             <p>Places: ## </p>
          </div>
       </div>
       <div class="row">
          <div class="col-xs-12 mb-2">
             <button type="button" class="btn btn-warning btn-lg">Save me too !!!</button>
          </div>
       </div>
    </div>`

function getRequestItem(requete) {
  return `<li class="list-group-item list-group-item-warning justify-content-between">${requete.description}</li>`
}

const listerequeteHtml = (requetes) => /* @html */ `<div class="nav-side-menu">
   <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom box-shadow">
      <a class="p-2 text-dark" href="/">
         <h5 class="my-0 mr-md-auto font-weight-normal">Accueil</h5>
      </a>
      <nav class="my-2 my-md-0 mr-md-3">
         <a href="/" class="btn">
         <span class="glyphicon glyphicon-log-out"></span> Deconnexion </a>
      </nav>
   </div>
</div>
<div class="container">
   <h1>Wild Help</h1>
</div>


<!-- Ajout icônes technologies proposées. -->

<div class="container">
      <h3>Technologies proposées</h3>
        <div class="row">
            <div class="col-md-1 offset-md-3 col-sm-2 logo">
                <a href="/requete" target="_blank">
                <img class="img-fluid" src="http://rodrigovenancio.info/wp-content/uploads/2017/04/1491199643_angular.png" alt="Angular Logo" />
                <p>Angular</p>
            </div>

            <div class="col-md-1 col-sm-2 logo">
                <a href="/requete" target="_blank">
                <img class="img-fluid" src="http://www.flook.co/img/skills/nodejs.ico" alt="NodeJs Logo" />
                <p>NodeJs</p>
            </div>

            <div class="col-md-1 col-sm-2 logo">
                <a href="/requete" target="_blank">
                <img class="img-fluid" src="http://nikhilnanjappa.github.io/img/react-logo.png" alt="React Logo" />
                <p>React</p>
            </div>

            <div class="col-md-1 col-sm-2 logo">
                <a href="/requete" target="_blank">
                <img class="img-fluid" src="https://silentbedlam.gallerycdn.vsassets.io/extensions/silentbedlam/vuejs-jquery-bootstrapprojecttemplate/1.0/1491418503089/257278/1/thumbnail.png" alt="VueJs Logo" />
                <p>VueJs</p>
            </div>

            <div class="col-md-1 col-sm-2 logo">
                <a href="/requete" target="_blank">
                <img class="img-fluid" src="http://onusinfotech.com/wp-content/uploads/2_0.png" alt="Symfony Logo" />
                <p>Symfony</p>
            </div>

            <div class="col-md-1 col-sm-2 logo">
                <a href="/requete" target="_blank">
                <img class="img-fluid" src="https://developer.akamai.com/blog/wp-content/uploads/2017/03/android-logo.png" alt="Android Logo" />
                <p>Android</p>
                </a>
            </div>
    </div>
</div>


<div class="container">
   <div class="row">
      <div class="col-xs-12">
         <h3>Liste des requêtes</h3>
         <ul class="list-group">
            ${
            requetes.map(getRequestItem).join("")
            }
         </ul>
      </div>
   </div>
   <div class="row">
      <div class="col-xs-12">
         <a href="/aide"><button class="btn btn-warning btn-lg">Help Me !!!</button></a>
      </div>
   </div>
</div>`


// PAGE DEMANDE AIDE

const aideHtml = /* @html */ `
   <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4  bg-white border-bottom box-shadow" id="navBarAide">
      <h5 class="my-0 mr-md-auto">WildHelp</h5>
      <nav class="my-2 my-md-0 mr-md-3">
        <a class="p-2 text-dark" href="/">
           <h5 class="my-0 mr-md-auto font-weight-normal">Accueil</h5>
        </a>
      </nav>
      <a href="/" class="btn btn-info btn-lg">
        <span class="glyphicon glyphicon-log-out">
        </span> Deconnexion
      </a>
   </div>
   <div class="container">
     <form id="formHelp" class="form-horizontal" method="POST" action="/aide">
       <div class="bodyHelp">
         <div class="row">
           <div class="col-md-12">
             <h2>Demande d'aide</h2>
           </div>
         </div>
         <div class="row">
           <div class="col-md-9 offset-md-3">
             <div class="input-group">
               <select id="subject" name="langage" class="form-control" required="required">
                 <option value="" selected="">Selectionnez le langage</option>
                 <option value="1">JavaScript</option>
                 <option value="2">JAVA</option>
                 <option value="3">PHP</option>
               </select>
             </div>
           </div>
         </div>
         <div class="row">
           <div class="col-md-12">
             <p>
               <label for="topic">Sujet requête :</label>
               <input type="text" class="form-control" name="topic" id="topic" placeholder="Ex : Algorithme" size="40" maxlength="50" required="required" />
             </p>
           </div>
         </div>
         <div class="row">
           <div class="col-md-12">
             <p>
               <textarea name="description" id="description" class="form-control" rows="10" cols="50" required="required"
        placeholder="Décris ici en détail ton problème"></textarea>
            </p>
          </div>
        </div>
        <div class="row buttonHelp">
          <div class="col-md-6 mb-2">
            <input class="btn btn-outline" type="submit" value="Save me !"/>
          </div>
          <div class="col-md-6">
            <a href="/"><button type="reset" class="btn btn-outline-danger">Annuler</button></a>
          </div>
        </div>
      </div>
    </form>
</div>
    </div>`

const footerForAllPage = /* @html */ `<footer>
   <div class="reseaux col-mg-6">
    <a href="https://www.facebook.com/wildcodeschool/" target="_blank"><img class="imgbtn" src="logofooter/fb.png" alt="imgbtn"></a>
    <a href="https://www.instagram.com/wildcodeschool/" target="_blank"><img class="imgbtn" src="logofooter/insta.png" alt="imgbtn"></a>
    <a href="https://twitter.com/wildcodeschool" target="_blank"><img class="imgbtn" src="logofooter/twitter.png" alt="imgbtn"></a>
    <a href="https://www.twitch.tv/khanaeleff" target="_blank"><img class="imgbtn" src="logofooter/twitch.png" alt="imgbtn"></a>
    <a href="https://wild4ever.slack.com/" target="_blank"><img class="imgbtn" src="logofooter/slack.png" alt="imgbtn"></a>
   </div>

</footer>`


// popup page accueil

// $(function () {
//   $('[data-toggle="popover"]').popover({
//     html:true,
//
//   })
// })
$(function () {
$('[data-toggle="popover"]').popover({html:true})
})


// DEBUT PAGE HELP
const showAide = () => {
    render(aideHtml)

    const formCours = document.getElementById('formHelp')
    formCours.addEventListener('submit', event => {

      let data = {}

      event.preventDefault()
      const formControls = formCours.getElementsByClassName('form-control')
      for(let formControl of formControls) {
      if(formControl.name !== '') {
        data[formControl.name] = formControl.value
        }
      }

      const body = JSON.stringify(data)
      console.log(body)

      fetch('/aide', {
        method: 'POST',
        body: body,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
    })
  }
// FIN PAGE HELP


  const render = htmlContent => {
    targetElement.innerHTML =  htmlContent + footerForAllPage
  }

  const showInscriptionWilder = () => {
    render(inscriptionHtml('Inscription Wilder', 'Wilder'))
  }

  const showInscriptionHelper = () => {
    render(inscriptionHtml('Inscription Alumni', 'Helper'))
  }

  const showLanguages = () => {
    render(languageHtml)
  }

  const showConnexion = () => {
    render(connexionHtml)
  }

  const showAccueil = () => {
    render(accueilhtml)
  }

  const showCoursPropose = () => {
    render(coursproposeHtml)
  }

  const showListeRequete = () => {
    render(listerequeteHtml(requetes))
  }




page('/', showAccueil)
page('/connexion', showConnexion)
page('/wilder', showInscriptionWilder)
page('/helper', showInscriptionHelper)
page('/languages', showLanguages)
page('/cours', showCoursPropose)
page('/requete', showListeRequete)
page('/aide', showAide)
page()
