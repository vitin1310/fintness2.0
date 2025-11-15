// === script.js - VERSÃO TURBO COM TUDO ===
document.addEventListener("DOMContentLoaded", function () {
  // --- 1. MODO ESCURO (já tinha) ---
  const toggleBtn = document.getElementById("modoBtn") || document.getElementById("toggle-theme");
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const isDark = document.body.classList.contains("dark-mode");
      toggleBtn.innerHTML = isDark ? "Modo Claro" : "Modo Escuro";
      localStorage.setItem("theme", isDark ? "dark" : "light");
    });
    if (localStorage.getItem("theme") === "dark") {
      document.body.classList.add("dark-mode");
      toggleBtn.innerHTML = "Modo Claro";
    }
  }

  // --- 2. MENU MOBILE ---
  const menuHTML = `
    <div id="mobileMenu" class="mobile-menu">
      <button id="closeMenu">X</button>
      <a href="index.html">Home</a>
      <a href="planos.html">Planos</a>
      <a href="sobre.html">Sobre</a>
      <a href="contato.html">Contato</a>
    </div>
    <button id="hamburger" class="hamburger">Menu</button>
  `;
  document.body.insertAdjacentHTML("afterbegin", menuHTML);

  const hamburger = document.getElementById("hamburger");
  const mobileMenu = document.getElementById("mobileMenu");
  const closeMenu = document.getElementById("closeMenu");

  hamburger?.addEventListener("click", () => mobileMenu.classList.add("open"));
  closeMenu?.addEventListener("click", () => mobileMenu.classList.remove("open"));
  mobileMenu?.addEventListener("click", (e) => {
    if (e.target.tagName === "A") mobileMenu.classList.remove("open");
  });

  // --- 3. EFEITO DE DIGITAÇÃO ---
  const typingElement = document.querySelector(".typing");
  if (typingElement) {
    const text = typingElement.textContent;
    typingElement.textContent = "";
    let i = 0;
    const type = () => {
      if (i < text.length) {
        typingElement.textContent += text.charAt(i);
        i++;
        setTimeout(type, 100);
      }
    };
    setTimeout(type, 500);
  }

  // --- 4. CONTADOR ANIMADO ---
  document.querySelectorAll(".counter").forEach(counter => {
    const target = parseInt(counter.getAttribute("data-target"));
    const increment = target / 100;
    let current = 0;
    const update = () => {
      if (current < target) {
        current += increment;
        counter.textContent = Math.ceil(current) + "+";
        setTimeout(update, 20);
      } else {
        counter.textContent = target + "+";
      }
    };
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) update();
    }, { threshold: 0.5 });
    observer.observe(counter);
  });

  // --- 5. GERADOR DE TREINO (melhorado) ---
  const gerarBtn = document.getElementById("gerarTreino");
  if (gerarBtn) {
    const treinos = [
      "Peito: Supino 4x10, Crucifixo 3x12, Tríceps 4x15",
      "Costas: Puxada 4x10, Remada 3x12, Bíceps 3x15",
      "Pernas: Agachamento 4x12, Leg Press 4x15, Panturrilha 3x20",
      "Full: 3x (10 burpees + 15 flexões + 20 abdominais)"
    ];
    gerarBtn.addEventListener("click", () => {
      const treino = treinos[Math.floor(Math.random() * treinos.length)];
      document.getElementById("resultadoTreino").innerHTML = `
        <div class="treino-card animate">
          <h4>Treino do Dia</h4>
          <p>${treino}</p>
        </div>
      `;
    });
  }

  // --- 6. IMC COM PROGRESS BAR ---
  const calcIMCBtn = document.getElementById("calcIMC");
  if (calcIMCBtn) {
    calcIMCBtn.addEventListener("click", () => {
      const peso = parseFloat(document.getElementById("peso").value);
      const altura = parseFloat(document.getElementById("altura").value);
      if (!peso || !altura) return alert("Preencha os campos!");

      const imc = (peso / (altura * altura)).toFixed(1);
      let cor = "#4CAF50";
      if (imc > 25) cor = "#FF9800";
      if (imc > 30) cor = "#F44336";

      document.getElementById("resultadoIMC").innerHTML = `
        <div class="imc-result">
          <p>Seu IMC: <strong>${imc}</strong></p>
          <div class="progress-bar">
            <div class="fill" style="width: ${Math.min(imc * 3, 100)}%; background: ${cor};"></div>
          </div>
          <p>${imc < 18.5 ? "Abaixo" : imc < 25 ? "Normal" : imc < 30 ? "Sobrepeso" : "Obesidade"}</p>
        </div>
      `;
    });
  }

  // --- 7. LIGHTBOX PARA IMAGENS ---
  document.querySelectorAll("img").forEach(img => {
    if (!img.onclick) {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        const lightbox = document.createElement("div");
        lightbox.id = "lightbox";
        lightbox.innerHTML = `
          <div class="lightbox-content">
            <span class="close">X</span>
            <img src="${img.src}" alt="${img.alt}">
          </div>
        `;
        document.body.appendChild(lightbox);
        lightbox.querySelector(".close").onclick = () => lightbox.remove();
        lightbox.onclick = (e) => e.target === lightbox && lightbox.remove();
      });
    }
  });

  // --- 8. POPUP EXIT-INTENT ---
  let showed = false;
  document.addEventListener("mouseout", (e) => {
    if (!e.relatedTarget && !showed && e.clientY < 10) {
      showed = true;
      alert("Ei! Antes de ir, que tal um plano com 20% OFF no primeiro mês?");
    }
  });

  // --- 9. CONFETTI AO ESCOLHER PLANO ---
  window.selecionarPlano = function(id) {
    document.querySelectorAll(".plano").forEach(p => p.classList.remove("selecionado"));
    document.getElementById(id).classList.add("selecionado");
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 }
    });
  };

  // --- 10. CHAT WHATSAPP FLUTUANTE ---
  const whatsappBtn = document.createElement("a");
  whatsappBtn.href = "https://wa.me/5511999999999";
  whatsappBtn.target = "_blank";
  whatsappBtn.id = "whatsappBtn";
  whatsappBtn.innerHTML = "WhatsApp";
  document.body.appendChild(whatsappBtn);

  // --- 11. ANIMAÇÃO AO ROLAR ---
  document.querySelectorAll(".animate").forEach(el => {
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) el.classList.add("show");
    }, { threshold: 0.1 });
    observer.observe(el);
  });
});
// === MENU COM JS (já está no script.js) ===
// Mobile menu toggle
const mobileMenu = document.getElementById('mobile-menu');
const navMenu = document.querySelector('.nav-menu');

mobileMenu?.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
});

// Scroll effect
window.addEventListener('scroll', () => {
  const navbar = document.getElementById('navbar');
  if (window.scrollY > 50) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Active link
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
// === BOTÃO "CLIQUE AQUI!" FUNCIONAL ===
document.getElementById("saudacaoBtn")?.addEventListener("click", function () {
  const nome = prompt("Qual é o seu nome, guerreiro?")?.trim();

  const saudacao = document.getElementById("mensagemSaudacao");

  if (nome) {
    saudacao.innerHTML = `
      <strong>OLÁ, ${nome.toUpperCase()}!</strong><br>
      Bem-vindo à <strong>ZEUS ACADEMY</strong>! 
      Aqui você vai <span style="color:#f9ab00;">transformar seu corpo</span> e 
      <span style="color:#ea4335;">conquistar seus objetivos</span>!
    `;

    // Animação de entrada
    saudacao.style.opacity = "0";
    saudacao.style.transform = "translateY(-10px)";
    setTimeout(() => {
      saudacao.style.transition = "all 0.6s ease";
      saudacao.style.opacity = "1";
      saudacao.style.transform = "translateY(0)";
    }, 100);

    // Confetti de celebração
    confetti({
      particleCount: 80,
      spread: 70,
      origin: { y: 0.6 }
    });
  } else {
    saudacao.innerHTML = "<span style='color:#ea4335;'>Você não disse seu nome... Tente novamente!</span>";
  }
});
