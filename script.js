const root=document.documentElement;const themeToggle=document.getElementById('themeToggle');const menuBtn=document.getElementById('menuBtn');const navLinks=document.getElementById('navLinks');const progressBar=document.getElementById('progressBar');const header=document.getElementById('header');const glow=document.getElementById('cursorGlow');const toast=document.getElementById('toast');document.getElementById('year').textContent=new Date().getFullYear();

const saved=localStorage.getItem('portfolio-theme');if(saved){root.setAttribute('data-theme',saved)}updateThemeIcon();
themeToggle.addEventListener('click',()=>{const next=root.getAttribute('data-theme')==='dark'?'light':'dark';root.setAttribute('data-theme',next);localStorage.setItem('portfolio-theme',next);updateThemeIcon()});
function updateThemeIcon(){themeToggle.textContent=root.getAttribute('data-theme')==='dark'?'☀':'☾'}

menuBtn.addEventListener('click',()=>navLinks.classList.toggle('show'));document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('show')));

window.addEventListener('scroll',()=>{const s=document.documentElement.scrollTop;const h=document.documentElement.scrollHeight-document.documentElement.clientHeight;progressBar.style.width=(s/h*100)+'%';header.classList.toggle('scrolled',s>15)});

window.addEventListener('mousemove',e=>{glow.style.left=e.clientX+'px';glow.style.top=e.clientY+'px'});

const observer=new IntersectionObserver(entries=>{entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})},{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const words=['Python','Cybersecurity','Flask','React','Solidity','Web3','IPFS'];let wi=0,ci=0,deleting=false;const typing=document.getElementById('typing');
function type(){const word=words[wi];typing.textContent=word.slice(0,ci);if(!deleting&&ci<word.length){ci++;setTimeout(type,95)}else if(!deleting&&ci===word.length){deleting=true;setTimeout(type,900)}else if(deleting&&ci>0){ci--;setTimeout(type,45)}else{deleting=false;wi=(wi+1)%words.length;setTimeout(type,250)}}type();

document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const filter=btn.dataset.filter;document.querySelectorAll('.project-card').forEach(card=>{const cats=card.dataset.category.split(' ');card.classList.toggle('hide',filter!=='all'&&!cats.includes(filter))})}));

document.getElementById('copyGitHub').addEventListener('click',async()=>{await navigator.clipboard.writeText('https://github.com/Viloshini691');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)});