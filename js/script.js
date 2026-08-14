const refinements=document.createElement('link');
refinements.rel='stylesheet';
refinements.href='css/refinements.css?v=5';
document.head.appendChild(refinements);

// Carrega os dados oficiais das imagens e converte para Blob URLs.
// Isso evita o ERR_INVALID_URL que o Edge apresentou com data:image/... muito grande.
document.querySelectorAll('.photo-frame img,.profile-image img').forEach(img=>img.setAttribute('data-luana-photo',''));
document.querySelectorAll('.brand-image img,.footer-brand-image img').forEach(img=>img.setAttribute('data-luana-logo',''));

function dataUriToBlobUrl(dataUri){
  const parts=dataUri.split(',');
  if(parts.length<2) throw new Error('Data URI inválida');
  const mime=(parts[0].match(/data:([^;]+)/)||[])[1]||'application/octet-stream';
  const binary=atob(parts.slice(1).join(','));
  const bytes=new Uint8Array(binary.length);
  for(let i=0;i<binary.length;i++) bytes[i]=binary.charCodeAt(i);
  return URL.createObjectURL(new Blob([bytes],{type:mime}));
}

const officialImages=document.createElement('script');
officialImages.src='assets/embedded-images.js?v=2';
officialImages.onload=()=>{
  try{
    const photoUrl=dataUriToBlobUrl(LUANA_PHOTO);
    const logoUrl=dataUriToBlobUrl(LUANA_LOGO);
    document.querySelectorAll('[data-luana-photo]').forEach(img=>{img.src=photoUrl;img.removeAttribute('loading');});
    document.querySelectorAll('[data-luana-logo]').forEach(img=>img.src=logoUrl);
    console.info('Imagens oficiais carregadas via Blob URL.');
  }catch(err){
    console.error('Falha ao preparar imagens oficiais:',err);
  }
};
officialImages.onerror=()=>console.error('Falha ao carregar assets/embedded-images.js');
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