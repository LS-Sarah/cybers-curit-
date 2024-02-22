document.addEventListener('DOMContentLoaded', function() {
    var openModalBtn = document.getElementById('openModalBtn');
    var modal = document.getElementById('myModal');
    var closeModalBtn = document.querySelector('.close');
  
    openModalBtn.addEventListener('click', function() {
      modal.style.display = 'block';
    });
  
    closeModalBtn.addEventListener('click', function() {
      modal.style.display = 'none';
    });
  
    window.addEventListener('click', function(event) {
      if (event.target === modal) {
        modal.style.display = 'none';
      }
    });
  });
  



  document.addEventListener('DOMContentLoaded', function () {
    var lire = document.getElementById('lire');
    var liresuite = document.getElementById('suite');
    var fermeLiresuiteBtn = document.querySelector('.ferme');
    var videoPlayer = document.getElementById('videoPlayer');

    lire.addEventListener('click', function () {
        liresuite.style.display = 'block';
        // Démarrer la lecture de la vidéo
        videoPlayer.play();
    });

    fermeLiresuiteBtn.addEventListener('click', function () {
        liresuite.style.display = 'none';
        // Mettre la vidéo en pause lorsque la fenêtre est fermée
        videoPlayer.pause();
    });

    window.addEventListener('click', function (event) {
        if (event.target === liresuite) {
            liresuite.style.display = 'none';
            // Mettre la vidéo en pause lorsque la fenêtre est fermée
            videoPlayer.pause();
        }
    });
});
  // ***************************************************************/
document.addEventListener('DOMContentLoaded', function () {
  var lire2 = document.getElementById('lire2');
  var liresuite2 = document.getElementById('suite2');
  var fermeLiresuiteBtn2 = document.querySelector('.ferme2');
  var videoPlayer2 = document.getElementById('videoPlayer2');

  lire2.addEventListener('click', function () {
      liresuite2.style.display = 'block';
      // Démarrer la lecture de la vidéo
      videoPlayer2.play();
  });

  fermeLiresuiteBtn2.addEventListener('click', function () {
      liresuite2.style.display = 'none';
      // Mettre la vidéo en pause lorsque la fenêtre est fermée
      videoPlayer2.pause();
  });

  window.addEventListener('click', function (event) {
      if (event.target === liresuite2) {
          liresuite2.style.display = 'none';
          // Mettre la vidéo en pause lorsque la fenêtre est fermée
          videoPlayer2.pause();
      }
  });
});

// ****************************************************
document.addEventListener('DOMContentLoaded', function () {
  var lire3 = document.getElementById('lire3');
  var liresuite3 = document.getElementById('suite3');
  var fermeLiresuiteBtn3 = document.querySelector('.ferme3');
  var videoPlayer3 = document.getElementById('videoPlayer3');

  lire3.addEventListener('click', function () {
      liresuite3.style.display = 'block';
      // Démarrer la lecture de la vidéo
      videoPlayer3.play();
  });

  fermeLiresuiteBtn3.addEventListener('click', function () {
      liresuite3.style.display = 'none';
      // Mettre la vidéo en pause lorsque la fenêtre est fermée
      videoPlayer3.pause();
  });

  window.addEventListener('click', function (event) {
      if (event.target === liresuite3) {
          liresuite3.style.display = 'none';
          // Mettre la vidéo en pause lorsque la fenêtre est fermée
          videoPlayer3.pause();
      }
  });
});


document.addEventListener('DOMContentLoaded', function () {
  var lire4 = document.getElementById('lire4');
  var liresuite4 = document.getElementById('suite4');
  var fermeLiresuiteBtn4 = document.querySelector('.ferme4');
  var videoPlayer4 = document.getElementById('videoPlayer4');

  lire4.addEventListener('click', function () {
      liresuite4.style.display = 'block';
      // Démarrer la lecture de la vidéo
      videoPlayer4.play();
  });

  fermeLiresuiteBtn4.addEventListener('click', function () {
      liresuite4.style.display = 'none';
      // Mettre la vidéo en pause lorsque la fenêtre est fermée
      videoPlayer4.pause();
  });

  window.addEventListener('click', function (event) {
      if (event.target === liresuite4) {
          liresuite4.style.display = 'none';
          // Mettre la vidéo en pause lorsque la fenêtre est fermée
          videoPlayer4.pause();
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var lire5 = document.getElementById('lire5');
  var liresuite5 = document.getElementById('suite5');
  var fermeLiresuiteBtn5 = document.querySelector('.ferme5');
  var videoPlayer5 = document.getElementById('videoPlayer5');

  lire5.addEventListener('click', function () {
      liresuite5.style.display = 'block';
      // Démarrer la lecture de la vidéo
      videoPlayer5.play();
  });

  fermeLiresuiteBtn5.addEventListener('click', function () {
      liresuite5.style.display = 'none';
      // Mettre la vidéo en pause lorsque la fenêtre est fermée
      videoPlayer5.pause();
  });

  window.addEventListener('click', function (event) {
      if (event.target === liresuite5) {
          liresuite5.style.display = 'none';
          // Mettre la vidéo en pause lorsque la fenêtre est fermée
          videoPlayer5.pause();
      }
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var lire6 = document.getElementById('lire6');
  var liresuite6 = document.getElementById('suite6');
  var fermeLiresuiteBtn6 = document.querySelector('.ferme6');
  var videoPlayer6= document.getElementById('videoPlayer6');

  lire6.addEventListener('click', function () {
      liresuite6.style.display = 'block';
      // Démarrer la lecture de la vidéo
      videoPlayer6.play();
  });

  fermeLiresuiteBtn6.addEventListener('click', function () {
      liresuite6.style.display = 'none';
      // Mettre la vidéo en pause lorsque la fenêtre est fermée
      videoPlayer6.pause();
  });

  window.addEventListener('click', function (event) {
      if (event.target === liresuite6) {
          liresuite6.style.display = 'none';
          // Mettre la vidéo en pause lorsque la fenêtre est fermée
          videoPlayer6.pause();
      }
  });
});
  // COMPTEUR DE VUE


let count = 0;

function incrementCounter() {
    count++;
    updateCounter();
}

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.innerText = count;
}

// Appeler incrementCounter() lors du chargement de la page
// window.onload = function() {
//     incrementCounter();
// };

// const allReadMore = document.querySelectorAll(".readMore");
// const allNumberViews = document.querySelectorAll(".numberViews");

// const arrayNumberViews = Array.from(allNumberViews);

// // -- affichage articles les plus lus -- //
// const arrayTextHide = Array.from(allTextHide);

// const arrayReadMorePopular = Array.from(allReadMorePopular);

// // -- affichage du formulaire -- //
// const arrayButtonShow = Array.from(allButtonShow);

// const arrayForm = Array.from(allForm);

// // -- affichage des modales -- //
// const arrayReadMore = Array.from(allReadMore);

// const arrayModals = Array.from(allModals);

// const arrayExit = Array.from(allExit);

/*******************recherche******************/

//tous les titres d'articles
const articleTitles = document.querySelectorAll('.block h2');

//fonction de recherche
function searchArticles() {
    //valeur de la barre de recherche
    const searchTerm = document.getElementById('searchbar').value.toLowerCase();

    //parcourir tous les titres darticles
    articleTitles.forEach(title => {
        const article = title.parentElement;
        //comparer le titre de chaque article
        if (title.textContent.toLowerCase().includes(searchTerm)) {
            //il correspond à la recherche
            article.style.display = 'block';
        } else {
            //il ne correspond pas à la recherche
            article.style.display = 'none';
        }
    });
}

//déclenchement de la recherche
document.getElementById('searchbar').addEventListener('input', searchArticles);




