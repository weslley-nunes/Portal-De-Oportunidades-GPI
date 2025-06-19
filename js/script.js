// Dados mockados
const vagas = [
    { 
        id: 1, 
        titulo: "Desenvolvedor Frontend", 
        empresa: "Tech Solutions", 
        salario: "R$ 3.500", 
        local: "Gurupi-TO",
        descricao: "Desenvolvimento de interfaces web responsivas utilizando React e CSS."
    },
    { 
        id: 2, 
        titulo: "Assistente Administrativo", 
        empresa: "Comércio Local", 
        salario: "R$ 1.800", 
        local: "Gurupi-TO",
        descricao: "Atividades administrativas gerais, atendimento ao cliente e organização de documentos."
    },
    { 
        id: 3, 
        titulo: "Técnico em Informática", 
        empresa: "InfoTech", 
        salario: "R$ 2.200", 
        local: "Gurupi-TO",
        descricao: "Manutenção de computadores, instalação de software e suporte técnico."
    }
];

const cursos = [
    { 
        id: 1, 
        titulo: "Informática Básica", 
        instituicao: "SENAC", 
        duracao: "40h", 
        modalidade: "Presencial",
        descricao: "Aprenda os fundamentos da informática, incluindo Windows, Word, Excel e navegação na internet."
    },
    { 
        id: 2, 
        titulo: "Capacitação em Vendas", 
        instituicao: "SEBRAE", 
        duracao: "30h", 
        modalidade: "Híbrido",
        descricao: "Técnicas de vendas, atendimento ao cliente e estratégias de negociação para o comércio local."
    },
    { 
        id: 3, 
        titulo: "Programação Web", 
        instituicao: "IFTO", 
        duracao: "60h", 
        modalidade: "Online",
        descricao: "Introdução ao desenvolvimento web com HTML, CSS e JavaScript básico."
    }
];

// Função para mostrar páginas
function showPage(pageId) {
    // Esconder todas as páginas
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.classList.remove('active'));
    
    // Mostrar a página selecionada
    document.getElementById(pageId + '-page').classList.add('active');
    
    // Atualizar navegação
    const navButtons = document.querySelectorAll('.nav-btn:not(.login-btn)');
    navButtons.forEach(btn => btn.classList.remove('active'));
    document.getElementById('nav-' + pageId).classList.add('active');
    
    // Carregar conteúdo específico da página
    if (pageId === 'vagas') {
        loadVagas();
    } else if (pageId === 'cursos') {
        loadCursos();
    }
}

// Função para carregar vagas
function loadVagas(filteredVagas = vagas) {
    const vagasGrid = document.getElementById('vagas-grid');
    
    if (filteredVagas.length === 0) {
        vagasGrid.innerHTML = '<div class="loading">Nenhuma vaga encontrada</div>';
        return;
    }
    
    vagasGrid.innerHTML = filteredVagas.map(vaga => `
        <div class="card vaga-card">
            <h3>${vaga.titulo}</h3>
            <p class="empresa">${vaga.empresa}</p>
            <p class="descricao">${vaga.descricao}</p>
            <div class="details">
                <span class="salario">${vaga.salario}</span>
                <span class="local">${vaga.local}</span>
            </div>
            <button class="btn-action" onclick="candidatarVaga(${vaga.id})">Candidatar-se</button>
        </div>
    `).join('');
}

// Função para carregar cursos
function loadCursos(filteredCursos = cursos) {
    const cursosGrid = document.getElementById('cursos-grid');
    
    if (filteredCursos.length === 0) {
        cursosGrid.innerHTML = '<div class="loading">Nenhum curso encontrado</div>';
        return;
    }
    
    cursosGrid.innerHTML = filteredCursos.map(curso => `
        <div class="card curso-card">
            <h3>${curso.titulo}</h3>
            <p class="instituicao">${curso.instituicao}</p>
            <p class="descricao">${curso.descricao}</p>
            <div class="details">
                <span class="duracao">${curso.duracao}</span>
                <span class="modalidade">${curso.modalidade}</span>
            </div>
            <button class="btn-action" onclick="inscreverCurso(${curso.id})">Inscrever-se</button>
        </div>
    `).join('');
}

// Função de busca para vagas
function searchVagas() {
    const searchTerm = document.getElementById('search-vagas').value.toLowerCase();
    const filteredVagas = vagas.filter(vaga => 
        vaga.titulo.toLowerCase().includes(searchTerm) ||
        vaga.empresa.toLowerCase().includes(searchTerm) ||
        vaga.descricao.toLowerCase().includes(searchTerm)
    );
    loadVagas(filteredVagas);
}

// Função de busca para cursos
function searchCursos() {
    const searchTerm = document.getElementById('search-cursos').value.toLowerCase();
    const filteredCursos = cursos.filter(curso => 
        curso.titulo.toLowerCase().includes(searchTerm) ||
        curso.instituicao.toLowerCase().includes(searchTerm) ||
        curso.descricao.toLowerCase().includes(searchTerm)
    );
    loadCursos(filteredCursos);
}

// Função para candidatar-se a uma vaga
function candidatarVaga(vagaId) {
    const vaga = vagas.find(v => v.id === vagaId);
    alert(`Você se candidatou para a vaga: ${vaga.titulo}\n\nEm breve você receberá mais informações por email.`);
}

// Função para inscrever-se em um curso
function inscreverCurso(cursoId) {
    const curso = cursos.find(c => c.id === cursoId);
    alert(`Você se inscreveu no curso: ${curso.titulo}\n\nEm breve você receberá mais informações por email.`);
}

// Função para busca em tempo real
function setupRealTimeSearch() {
    const searchVagasInput = document.getElementById('search-vagas');
    const searchCursosInput = document.getElementById('search-cursos');
    
    if (searchVagasInput) {
        searchVagasInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredVagas = vagas.filter(vaga => 
                vaga.titulo.toLowerCase().includes(searchTerm) ||
                vaga.empresa.toLowerCase().includes(searchTerm) ||
                vaga.descricao.toLowerCase().includes(searchTerm)
            );
            loadVagas(filteredVagas);
        });
    }
    
    if (searchCursosInput) {
        searchCursosInput.addEventListener('input', function() {
            const searchTerm = this.value.toLowerCase();
            const filteredCursos = cursos.filter(curso => 
                curso.titulo.toLowerCase().includes(searchTerm) ||
                curso.instituicao.toLowerCase().includes(searchTerm) ||
                curso.descricao.toLowerCase().includes(searchTerm)
            );
            loadCursos(filteredCursos);
        });
    }
}

// Função para adicionar eventos de teclado
function setupKeyboardEvents() {
    document.addEventListener('keydown', function(event) {
        // Atalhos de teclado para navegação
        if (event.altKey) {
            switch(event.key) {
                case '1':
                    event.preventDefault();
                    showPage('home');
                    break;
                case '2':
                    event.preventDefault();
                    showPage('vagas');
                    break;
                case '3':
                    event.preventDefault();
                    showPage('cursos');
                    break;
            }
        }
        
        // Enter para buscar
        if (event.key === 'Enter') {
            const activeElement = document.activeElement;
            if (activeElement.id === 'search-vagas') {
                searchVagas();
            } else if (activeElement.id === 'search-cursos') {
                searchCursos();
            }
        }
    });
}

// Função para animações suaves
function setupSmoothAnimations() {
    // Adicionar classe de animação aos cards quando eles aparecem
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar todos os cards
    document.addEventListener('DOMContentLoaded', function() {
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(20px)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(card);
        });
    });
}

// Função para salvar estado da página no localStorage
function savePageState() {
    const currentPage = document.querySelector('.page.active').id.replace('-page', '');
    localStorage.setItem('currentPage', currentPage);
}

// Função para carregar estado da página do localStorage
function loadPageState() {
    const savedPage = localStorage.getItem('currentPage');
    if (savedPage && ['home', 'vagas', 'cursos'].includes(savedPage)) {
        showPage(savedPage);
    }
}

// Inicialização quando a página carrega
document.addEventListener('DOMContentLoaded', function() {
    // Carregar estado salvo ou mostrar página inicial
    loadPageState();
    
    // Configurar busca em tempo real
    setupRealTimeSearch();
    
    // Configurar eventos de teclado
    setupKeyboardEvents();
    
    // Configurar animações
    setupSmoothAnimations();
    
    // Salvar estado quando a página muda
    const navButtons = document.querySelectorAll('.nav-btn:not(.login-btn)');
    navButtons.forEach(button => {
        button.addEventListener('click', savePageState);
    });
    
    // Carregar dados iniciais se estivermos na página de vagas ou cursos
    const activePage = document.querySelector('.page.active').id;
    if (activePage === 'vagas-page') {
        loadVagas();
    } else if (activePage === 'cursos-page') {
        loadCursos();
    }
    
    console.log('Portal de Oportunidades carregado com sucesso!');
    console.log('Atalhos de teclado: Alt+1 (Home), Alt+2 (Vagas), Alt+3 (Cursos)');
});

// Função para detectar dispositivos móveis
function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Ajustar comportamento para dispositivos móveis
if (isMobileDevice()) {
    document.addEventListener('DOMContentLoaded', function() {
        // Remover efeitos hover em dispositivos móveis
        const style = document.createElement('style');
        style.textContent = `
            @media (hover: none) {
                .card:hover {
                    transform: none;
                    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                }
                .btn-primary:hover,
                .btn-secondary:hover {
                    transform: none;
                    box-shadow: none;
                }
            }
        `;
        document.head.appendChild(style);
    });
}

