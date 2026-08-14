const refinements=document.createElement('link');
refinements.rel='stylesheet';
refinements.href='css/refinements.css?v=4';
document.head.appendChild(refinements);

// A entrada "images" no repositório virou um arquivo, então os caminhos images/... quebravam.
// Aplicamos as imagens oficiais embutidas para eliminar o problema de pasta/cache.
document.querySelectorAll('.photo-frame img,.profile-image img').forEach(img=>img.setAttribute('data-luana-photo',''));
document.querySelectorAll('.brand-image img,.footer-brand-image img').forEach(img=>img.setAttribute('data-luana-logo',''));
const officialImages=document.createElement('script');
officialImages.src='assets/embedded-images.js?v=1';
document.body.appendChild(officialImages);

const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

document.getElementById('year').textContent=new Date().getFullYear();

const whatsappNumber='5566996198546';
const whatsappText=encodeURIComponent('Olá, Dra. Luana. Gostaria de informações sobre atendimento jurídico.');
const whatsappUrl=`https://wa.me/${whatsappNumber}?text=${whatsappText}`;
document.querySelectorAll('[data-whatsapp]').forEach(link=>{link.href=whatsappUrl;link.target='_blank';link.rel='noopener noreferrer';});
document.querySelectorAll('[data-phone]').forEach(el=>el.textContent='(66) 99619-8546');

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));