(function ($) {
   $(function () {

      $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
         $(this)
            .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
            .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
      });
   });

   function toggleSlide(item) {
      $(item).each(function (i) {
         $(this).on('click', function (e) {
            e.preventDefault();
            $('.catalog-item__contentlist').eq(i).toggleClass('catalog-item__contentlist_active');
            $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
         });
      });
   }

   toggleSlide('.catalog-item__link');
   toggleSlide('.catalog-item__back');
})(jQuery);


const date = document.querySelector('.form_date')
const money = document.querySelector('.form_money')
const formNext = document.querySelector('.formNext')
const formBack = document.querySelector('.formBack')

formNext.addEventListener('click', function(event) {
   event.preventDefault();
   date.style.display = 'none'
   money.style.display = 'flex'
})
formBack.addEventListener('click', function(event) {
   event.preventDefault();
   date.style.display = 'block'
   money.style.display = 'none'
})

const house1=document.querySelector('#house1')
const house2=document.querySelector('#house2')
const option=document.querySelector('#house')

house1.addEventListener('click', function() {
   option.value =1
})
house2.addEventListener('click', function() {
   option.value =2 
})





