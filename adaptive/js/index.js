window.addEventListener('DOMContentLoaded', function () {
  var mySwiper = new Swiper('.swiper-container', {
    direction: 'horizontal',
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
      renderBullet: function (index, className) {
        return '<span class="' + className + '"></span>';
      },
    },
  })
  $( ".accordion" ).accordion({
    collapsible: true,
    icons: null
  });
  document.querySelector('.burger').addEventListener('click', function () {
    document.querySelector('.burger-menu').classList.toggle('is-active')
  })
  document.querySelectorAll('.steps-link').forEach(function(stepsLink) {
    stepsLink.addEventListener('click', function (event) {
      const path = event.currentTarget.dataset.path
      document.querySelectorAll('.steps-link').forEach(function (stLink) {
        stLink.classList.remove('steps-link-active')
      })
      document.querySelectorAll('.work-tab').forEach(function(workTab) {
        workTab.classList.remove('tab-active')
      })
      document.querySelector(`[data-path = "${path}"]`).classList.add('steps-link-active')
      document.querySelector(`[data-target = "${path}"]`).classList.add('tab-active')
    })
  })
})
