function showSection(sectionId) {
    // Masquer toutes les sections
    var sections = document.getElementsByTagName('section');
    for (var i = 1; i < sections.length; i++) {
      sections[i].classList.add('hidden');
    }
    // Afficher la section sélectionnée
    var section = document.getElementById(sectionId);
    section.classList.remove('hidden');
  }

  function showSection2(sectionId) {
    // Masquer toutes les sections
    var sections = document.getElementsByTagName('section');
    // for (var i = 1; i < sections.length; i++) {
    //   sections[i].classList.add('hidden');
    // }
    // Afficher la section sélectionnée
    var section = document.getElementById(sectionId);
    section.classList.remove('hidden');
  }

  