const openModal = document.querySelectorAll('.trigger');
const modalBackground = document.querySelector('.modalBackground');
const modalClose = document.querySelector('.modalClose');
const modalWindow = document.querySelector('.modalWindow');


openModal.forEach(i => {
   i.addEventListener('click', function () {
      modalBackground.style.display = "block";
      modalWindow.style.display = "block";
      document.querySelector('body').style.overflow = 'hidden'
      document.querySelector('body').style.marginRight = 13 + 'px';
   })
})

modalClose.addEventListener("click", function () {
   modalBackground.style.display = "none";
   modalWindow.style.display = "none";
   document.querySelector('body').style.overflow = ''
   document.querySelector('body').style.marginRight = 0 + 'px';
});
modalBackground.addEventListener("click", function (event) {
   if (event.target === modalBackground) {
      modalBackground.style.display = "none";
      document.querySelector('body').style.overflow = ''
      document.querySelector('body').style.marginRight = 0 + 'px';
      
  }
}
);

const openModalRools = document.querySelector('.rools');
const modalRools = document.querySelector('.modalRools');
const closeRools = document.querySelectorAll('.closeRools');

openModalRools.addEventListener('click', function () {
   modalRools.classList.toggle('open')  
})
closeRools.forEach(item => {
   item.addEventListener('click', function () {
   modalRools.classList.remove('open')   
})
})
const openModalService = document.querySelector('.service');
const modalService = document.querySelector('.modalService');
const closeService = document.querySelectorAll('.closeService');

openModalService.addEventListener('click', function () {
   modalService.classList.toggle('open')  
})
closeService.forEach(item => {
   item.addEventListener('click', function () {
      modalService.classList.remove('open')   
})
})

