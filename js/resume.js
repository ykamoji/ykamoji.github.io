projects = [
  {
    name: "decomp-vision-transformer-KD",
    desc: "Distillation of vision transformer using decomposition (attributes)",
    lang:["Python"],
    logo:"github",
    link:"https://github.com/ykamoji/decomp-vision-transformer-KD",
    star:true,
    fork:true,
    size: 7
  },
  {
    name: "Modality-Aware-MLLM-Retriever",
    desc: "Cross-modal LLM for retrieving image-text using hard mining",
    lang:["Python"],
    logo:"github",
    link: "https://github.com/ykamoji/Modality-Aware-MLLM-Retriever",
    star:true,
    fork:true,
    size: 65
  },
  {
    name: "3d-reconstruction",
    desc: "Constructing 3D objects from 2D images",
    lang:["Python"],
    logo:"github",
    link: "https://github.com/ykamoji/3d-reconstruction",
    star:true,
    fork:false,
    size: 9,
  },
  {
    name:"multi-loss-KD",
    desc: "Multi-Loss Distillation Framework",
    lang:["Python"],
    logo:"github",
    link:"https://github.com/ykamoji/multi-loss-KD",
    star:true,
    fork:true,
    size: 6
  },
  {
    name:"few-shot-inference",
    desc: "Few-shot learning strategies with Mistral",
    lang:["Python", "Jinga"],
    logo:"github",
    link:"https://github.com/ykamoji/few-shot-inference",
    star:true,
    fork:true,
    size: 3
  },
  {
    name:"pyspark-model-processing",
    desc: "Image modeling and processing using pyspark",
    lang:["Python", "Shell"],
    logo:"github",
    link: "https://github.com/ykamoji/pyspark-model-processing",
    star:true,
    fork:true,
    size: 113
  },
  {
    name:"airport-delay-analysis",
    desc: "Airport delay analysis & visualization",
    lang:["Python", "HTML", "CSS", "JavaScript"],
    logo:"github",
    link: "https://github.com/ykamoji/airport-delay-analysis",
    star:true,
    fork:true,
    size: 68
  },
  {
    name:"Ecommerce Product website",
    desc: "An eCommerce product website where customers can post products to sell or buy.",
    logo: "google-drive",
    lang:["ReactJS", "Python", "AWS"],
    link:"https://drive.google.com/drive/folders/1qgtyj0XxcdgzEkq045PifI_Rlnn6pULh",
    star:false,
    fork:false,
    size: 18
  },
  {
    name:"Android App",
    desc: "Developed an app that allows users to search all possible dishes based on the raw ingredients they provide.",
    logo: "google-drive",
    lang:["Java", "SQL"],
    link: "https://drive.google.com/drive/folders/0BzRmm4uZP2Upc2dBQ19VOUsyQzA?resourcekey=0-t0ZO1GTaTgDAdnNQjQoMHg",
    star:false,
    fork:false,
    size: 4
  }
]
skills = [
  {
    logo:"java",
    proficiency: 80
  },
  {
    logo:"python",
    proficiency: 90
  },
  {
    logo:"c++",
    proficiency: 70
  },
  {
    logo:"sql",
    proficiency: 90
  },
  {
    logo:"react",
    proficiency: 80
  },
  {
    logo:"aws",
    proficiency: 95
  },
  {
    logo:"npm",
    proficiency: 60
  },
  {
    logo:"javascript",
    proficiency: 85
  }
]

function initializeProjects() {

  const $project_cards = $('#projects #project-container .project-card-out');
  const width = window.innerWidth
  let br = 3
  if(width >= 1140){
    br = 3
  } else if(width >= 1000){
    br = 2
  } else{
    br = 1
  }
  let j = 0;
  projects.forEach((project, i) => {

    if (i !== 0 && i % br === 0) {
      $('#projects #project-container').append('<div class="row mb-4"></div>')
      j += 1
    }

    let $ele = i === 0 ? $project_cards : $project_cards.clone();

    $ele.data('href', project.link)
    $ele.find('.symbol').addClass('fa-' + project.logo)
    $ele.find('.repo-name').text(project.name)
    $ele.find('.repo-description').text(project.desc)
    $ele.find('.repo-left-stat p').text()

    $ele.find('.languages').html('')
    project.lang.forEach((lg, idx) => {
      let color = null

      if (lg === 'Python') {
        color = "#3572A5"
      } else if (lg === 'Jinga') {
        color = "#a52a22"
      } else if (lg === 'Shell') {
        color = "#89e051"
      } else if (lg === 'CSS') {
        color = "#663399"
      } else if (lg === 'JavaScript') {
        color = "#f1e05a"
      } else if (lg === 'HTML') {
        color = "#e34c26"
      } else if (lg === 'ReactJS') {
        color = "#61DAFB"
      } else if (lg === 'Java') {
        color = "#b07219"
      } else if (lg === 'SQL') {
        color = "#e38c00"
      }

      let lang = null
      if(color !== null){
        lang = `<div class="language-color rounded-circle mr-2 ml-2 mt-1" style="background-color:${color};"></div><p>${lg}</p>`
      }
      else{
        lang = `<p class="ml-2">${lg}</p>`
      }

      if (idx !== 0 && idx % br === 0) {
        $ele.find('.languages').last().after('<div class="languages d-flex flex-row"></div>')
      }

      $ele.find('.languages').last().append(lang)
    })

    if (!project.star) $ele.find('.star').hide(0)
    if (!project.fork) $ele.find('.fork').hide(0)

    $ele.find('.repo-right-stat').text(project.size + ' MB')

    $($('#projects #project-container .row')[j]).append($ele)

  })

  $('#projects #project-container .project-card-out').click(function () {
    window.open($(this).data('href'), '_blank')
  })

  $('#more_projects').click(function (){
    window.open('https://github.com/ykamoji?tab=repositories', '_blank')
  })
}

function isInViewport($el) {
  const rect = $el[0].getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight)
  );
}

function animateProgressBar() {
  const $bar = $('#skills .prog_lang_tools .progress-bar');
  $bar.each((i, bar) => {
    $(bar).stop().animate({ width: $(bar).data('width') + '%' }, 700, 'linear');
  })
}

function initializeSkills(){

  const $prog_lang_tools = $('#skills .prog_lang_tools')

  let j = 0;
  skills.forEach((skill, i) => {

    let $ele = i === 0 ? $prog_lang_tools : $prog_lang_tools.clone();

    let logo = ""
    if(skill.logo === 'c++'){
      logo = `<svg id="cpp" xmlns="http://www.w3.org/2000/svg" width="56" height="48" viewBox="0 0 48 48"> <path style="fill: #868e96;" d="M 43.910156 12.003906 L 27.070313 2.539063 C 25.792969 1.824219 24.207031 1.824219 22.929688 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.929688 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.070313 47.460938 L 43.910156 37.996094 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 Z M 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 C 28.78125 13 32.273438 14.753906 34.542969 17.742188 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.257813 C 32.273438 35.246094 28.78125 37 25 37 Z M 37 26 L 35 26 L 35 28 L 33 28 L 33 26 L 31 26 L 31 24 L 33 24 L 33 22 L 35 22 L 35 24 L 37 24 Z M 44 26 L 42 26 L 42 28 L 40 28 L 40 26 L 38 26 L 38 24 L 40 24 L 40 22 L 42 22 L 42 24 L 44 24 Z"></path> </svg>`
    } else if(skill.logo === 'sql'){
      logo = `<svg id="sql" width="56" height="48" viewBox="17 20 40 40" xmlns="http://www.w3.org/2000/svg"  xml:space="preserve"><path style="fill: #868e96;" stroke-width="0.2" stroke-linejoin="round" d="M 38,33C 47.384,33 54.9921,30.9874 55,28.5039L 55,52.5C 55,54.9853 47.3888,57 38,57L 38,49.1579L 38.0675,49.16L 39.23,50.4137C 39.6033,50.8029 39.9871,51.1417 40.3813,51.43C 40.7754,51.7183 41.1875,51.9454 41.6175,52.1113C 42.0475,52.2771 42.5183,52.36 43.03,52.36L 44.1075,52.2913L 44.8,52.155L 44.8,50.085L 44.5425,50.1663L 44.25,50.2288L 43.9487,50.2675L 43.675,50.28L 42.8237,50.215L 42.0613,49.9813L 41.3237,49.5213L 40.55,48.7775C 41.635,48.3892 42.4808,47.72 43.0875,46.77C 43.6958,45.81 44,44.6633 44,43.33C 44,41.6233 43.5025,40.2508 42.5075,39.2125C 41.5175,38.1642 40.2233,37.64 38.625,37.64L 38,37.6653L 38,33 Z M 52,23.5L 55,23.5L 55,25.5C 55,27.9853 47.3888,30 38,30L 38,25C 45.732,25 52,24.3285 52,23.5 Z M 38.5375,39.88C 39.3975,39.88 40.07,40.1992 40.555,40.8375C 41.0383,41.4658 41.28,42.34 41.28,43.46C 41.28,44.54 41.0275,45.3892 40.5225,46.0075C 40.0242,46.6158 39.3417,46.92 38.475,46.92L 38,46.8837L 38,39.9251L 38.5375,39.88 Z M 52.48,49L 52.48,46.92L 48.32,46.92L 48.32,37.8L 45.76,37.8L 45.76,49L 52.48,49 Z "/><path style="fill: #868e96;" stroke-width="0.2" stroke-linejoin="round" d="M 38,57C 28.6111,57 21,54.9853 21,52.5L 21,28.5C 21,30.9853 28.6112,33 38,33L 38,37.6436C 36.5609,37.7589 35.3876,38.296 34.48,39.2549C 33.4533,40.3399 32.94,41.7666 32.94,43.5349C 32.94,44.3083 33.0616,45.0324 33.305,45.7074C 33.5483,46.3824 33.8929,46.9704 34.3387,47.4712C 34.7846,47.972 35.3216,48.3703 35.95,48.6662C 36.5654,48.9559 37.2487,49.1134 38,49.1385L 38,57 Z M 55,23.5L 52,23.5C 52,22.6716 45.732,22 38,22C 30.268,22 24,22.6716 24,23.5C 24,24.3285 30.268,25 38,25L 38,30C 28.6111,30 21,27.9853 21,25.5L 21,23.5C 21,21.0148 28.6112,19 38,19C 47.384,19 54.9921,21.0127 55,23.5 Z M 24.14,48.5324C 24.5483,48.7341 25.0312,48.8858 25.5887,48.9874C 26.1462,49.0891 26.7341,49.1399 27.3525,49.1399C 27.9541,49.1399 28.5258,49.0829 29.0675,48.9687C 29.6091,48.8545 30.0841,48.6666 30.4925,48.4049C 30.9008,48.1433 31.2241,47.8016 31.4625,47.3799C 31.7008,46.9583 31.82,46.4366 31.82,45.8149C 31.82,45.3649 31.7533,44.9704 31.62,44.6312C 31.4866,44.292 31.2941,43.9904 31.0425,43.7262C 30.7908,43.462 30.4891,43.2249 30.1375,43.0149L 28.9475,42.4199L 28.0775,42.0287L 27.4225,41.6399L 27.0062,41.2212C 26.9087,41.0737 26.86,40.9066 26.86,40.7199C 26.86,40.5416 26.9037,40.3804 26.9912,40.2362L 27.3612,39.8649L 27.9475,39.6249L 28.7175,39.5399L 29.37,39.5874L 30.06,39.7349L 30.735,39.9874L 31.34,40.3399L 31.34,38.0424C 30.96,37.8991 30.5445,37.7929 30.0937,37.7237L 28.5425,37.6199C 27.9475,37.6199 27.3841,37.6833 26.8525,37.8099C 26.3208,37.9366 25.8529,38.1349 25.4487,38.4049C 25.0445,38.6749 24.7254,39.0183 24.4912,39.4349C 24.257,39.8516 24.14,40.3499 24.14,40.9299C 24.14,41.6699 24.3516,42.3016 24.775,42.8249C 25.1983,43.3483 25.8416,43.7908 26.705,44.1524L 27.6512,44.5649L 28.41,44.9849L 28.915,45.4587C 29.0383,45.6295 29.1,45.8233 29.1,46.0399L 28.9837,46.5074C 28.9062,46.6508 28.7883,46.7754 28.63,46.8812L 28.0387,47.1299L 27.21,47.2199C 26.6716,47.2199 26.1383,47.1266 25.61,46.9399C 25.0816,46.7533 24.5916,46.4733 24.14,46.0999L 24.14,48.5324 Z M 36.4325,40.8324C 36.8449,40.3182 37.3674,40.0079 38,39.9016L 38,46.8667C 37.3683,46.7709 36.8433,46.4678 36.425,45.9574C 35.915,45.3241 35.66,44.4699 35.66,43.3949C 35.66,42.3299 35.9175,41.4758 36.4325,40.8324 Z "/></svg>`
    }
    else{
      logo = `<i class="devicons devicons-${skill.logo}"></i>`
    }
    $ele.find('.devicons').remove()
    $ele.prepend(logo)
    $ele.find('.progress-bar').data('width', skill.proficiency)

     $('#skills #prog_lang_tools_holder').last().append($ele)

  })

  $('#skills .prog_lang_tools svg').on('mouseenter',function (){
    $(this).find('path').css({'fill':'royalblue'})
  }).on('mouseleave',function (){
    $('#skills .prog_lang_tools path').css({'fill':'#868e96'})
  })

  let progressAnimated = false;

  $(window).on('scroll load', function () {
    const $container = $('#skills #prog_lang_tools_holder');
    if (!progressAnimated && isInViewport($container)) {
      animateProgressBar(); // Set your target % here
      progressAnimated = true; // Only run once
    }
  });

}


function initializeBadges(){

  $('#awards .img-fluid').click(function (){
    window.open($(this).data('link'), '_blank')
  })
}

$(document).ready(function (){


  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').on('click', function() {


    if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '')
        && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {

        $('html, body').animate({
          scrollTop: (target.offset().top)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }

  });


  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  $('body').scrollspy({
    target: '#sideNav'
  });

  initializeProjects();

  initializeSkills();

  initializeBadges();

})