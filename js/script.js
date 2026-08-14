const menuButton=document.querySelector('.menu-toggle');
const nav=document.querySelector('.main-nav');
menuButton?.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuButton.setAttribute('aria-expanded',String(open));});
document.querySelectorAll('.main-nav a').forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');menuButton?.setAttribute('aria-expanded','false');}));

document.getElementById('year').textContent=new Date().getFullYear();

const whatsappNumber='5566996198546';
const whatsappText=encodeURIComponent('Olá, Dra. Luana. Gostaria de informações sobre atendimento jurídico.');
const whatsappUrl=`https://wa.me/${whatsappNumber}?text=${whatsappText}`;
const whatsappIcon=`<svg viewBox="0 0 32 32" aria-hidden="true"><path fill="currentColor" d="M19.11 17.21c-.27-.14-1.62-.8-1.87-.89-.25-.09-.43-.14-.61.14-.18.27-.7.89-.86 1.07-.16.18-.32.2-.59.07-.27-.14-1.15-.42-2.19-1.35-.81-.72-1.36-1.61-1.52-1.88-.16-.27-.02-.42.12-.55.12-.12.27-.32.41-.48.14-.16.18-.27.27-.45.09-.18.05-.34-.02-.48-.07-.14-.61-1.48-.84-2.03-.22-.53-.45-.46-.61-.47h-.52c-.18 0-.48.07-.73.34-.25.27-.95.93-.95 2.27s.98 2.64 1.11 2.82c.14.18 1.92 2.93 4.65 4.11.65.28 1.16.45 1.56.58.65.21 1.24.18 1.71.11.52-.08 1.62-.66 1.85-1.3.23-.64.23-1.18.16-1.3-.07-.11-.25-.18-.52-.32z"/><path fill="currentColor" d="M16.03 3.2c-7.02 0-12.73 5.7-12.73 12.72 0 2.24.59 4.44 1.71 6.37L3.2 28.8l6.67-1.75a12.7 12.7 0 0 0 6.15 1.57h.01c7.01 0 12.72-5.71 12.72-12.72S23.04 3.2 16.03 3.2zm0 23.27h-.01a10.55 10.55 0 0 1-5.38-1.47l-.39-.23-3.96 1.04 1.06-3.86-.25-.4a10.57 10.57 0 1 1 8.93 4.92z"/></svg>`;

document.querySelectorAll('[data-whatsapp]').forEach(link=>{link.href=whatsappUrl;link.target='_blank';link.rel='noopener noreferrer';});

document.querySelectorAll('[data-phone]').forEach(el=>el.textContent='(66) 99619-8546');

const floatingWhatsapp=document.querySelector('.whatsapp-float');
if(floatingWhatsapp){
  floatingWhatsapp.innerHTML=`<span class="wa-icon">${whatsappIcon}</span><span class="wa-copy"><strong>Fale pelo WhatsApp</strong><small>Atendimento jurídico</small></span>`;
}

const style=document.createElement('style');
style.textContent=`
.whatsapp-float{position:fixed!important;right:24px!important;bottom:24px!important;z-index:60!important;display:flex!important;align-items:center!important;gap:12px!important;padding:10px 16px 10px 10px!important;border-radius:999px!important;background:#1f9d58!important;color:#fff!important;box-shadow:0 16px 42px rgba(0,0,0,.24)!important;border:1px solid rgba(255,255,255,.18)!important;font-size:13px!important;line-height:1.2!important;transition:transform .22s ease,box-shadow .22s ease,background .22s ease!important}
.whatsapp-float:hover{transform:translateY(-3px)!important;box-shadow:0 20px 48px rgba(0,0,0,.3)!important;background:#18864b!important}
.wa-icon{width:42px;height:42px;display:grid;place-items:center;border-radius:50%;background:#fff;color:#1f9d58;flex:0 0 42px}
.wa-icon svg{width:25px;height:25px;display:block}
.wa-copy{display:flex;flex-direction:column;text-align:left;white-space:nowrap}
.wa-copy strong{font-size:13px;letter-spacing:.01em}
.wa-copy small{font-size:10px;font-weight:500;opacity:.78;margin-top:2px}
.brand-logo-img{width:58px;height:58px;object-fit:contain;background:#fff;border-radius:4px}
.footer-logo-img{width:120px;height:auto;object-fit:contain;background:#fff;border-radius:4px;margin-bottom:10px}
@media(max-width:620px){.whatsapp-float{right:14px!important;bottom:14px!important;padding:8px!important}.wa-icon{width:46px;height:46px;flex-basis:46px}.wa-icon svg{width:27px;height:27px}.wa-copy{display:none}.brand-logo-img{width:48px;height:48px}}
`;
document.head.appendChild(style);

// Troca o monograma pela logo real automaticamente assim que o arquivo existir no repositório.
const headerBrand=document.querySelector('.brand');
const headerMark=headerBrand?.querySelector('.brand-mark');
if(headerMark){
  const logo=new Image();
  logo.src='images/logo-luana-monica.jpg';
  logo.alt='Luana Monica Advocacia';
  logo.className='brand-logo-img';
  logo.onload=()=>headerMark.replaceWith(logo);
}
const footerMark=document.querySelector('.footer-brand .brand-mark');
if(footerMark){
  const logoFooter=new Image();
  logoFooter.src='images/logo-luana-monica.jpg';
  logoFooter.alt='Luana Monica Advocacia';
  logoFooter.className='footer-logo-img';
  logoFooter.onload=()=>footerMark.replaceWith(logoFooter);
}

const observer=new IntersectionObserver(entries=>{entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target);}})},{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));