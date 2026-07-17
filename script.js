// A nossa Base de Dados de Espécies proveniente da filtragem anterior
const speciesData = [
    // Algas
    { name: "Anotrichium cf. okamurae", group: "algas", label: "Alga" },
    { name: "Anotrichium furcellatum", group: "algas", label: "Alga" },
    { name: "Antithamnion amphigeneum", group: "algas", label: "Alga" },
    { name: "Antithamnion densum", group: "algas", label: "Alga" },
    { name: "Antithamnion nipponicum", group: "algas", label: "Alga" },
    { name: "Antithamnionella spirographidis", group: "algas", label: "Alga" },
    { name: "Antithamnionella ternifolia", group: "algas", label: "Alga" },
    { name: "Asparagopsis armata", group: "algas", label: "Alga" },
    { name: "Colpomenia peregrina", group: "algas", label: "Alga" },
    { name: "Dasya sessilis", group: "algas", label: "Alga" },
    { name: "Gambierdiscus excentricus", group: "algas", label: "Alga" },
    { name: "Gracilaria vermiculophylla", group: "algas", label: "Alga" },
    { name: "Grateloupia turuturu", group: "algas", label: "Alga" },
    { name: "Gymnodinium catenatum", group: "algas", label: "Alga" },
    { name: "Ostreopsis cf. ovata", group: "algas", label: "Alga" },
    { name: "Sargassum muticum", group: "algas", label: "Alga" },
    { name: "Symphyocladia marchantioides", group: "algas", label: "Alga" },
    { name: "Undaria pinnatifida", group: "algas", label: "Alga" },

    // Moluscos
    { name: "Mya arenaria", group: "moluscos", label: "Molusco" },
    { name: "Pteropurpura inornata", group: "moluscos", label: "Molusco" },
    { name: "Ruditapes philippinarum", group: "moluscos", label: "Molusco" },

    // Crustáceos
    { name: "Amphibalanus amphitrite", group: "crustaceos", label: "Crustáceo" },
    { name: "Austrominius modestus", group: "crustaceos", label: "Crustáceo" },
    { name: "Eriocheir sinensis", group: "crustaceos", label: "Crustáceo" },

    // Outros Invertebrados
    { name: "Blackfordia virginica", group: "outros", label: "Outros Inv." },
    { name: "Botryllus schlosseri", group: "outros", label: "Outros Inv." },
    { name: "Corella eumyota", group: "outros", label: "Outros Inv." },
    { name: "Desdemona ornata", group: "outros", label: "Outros Inv." },
    { name: "Tricellaria inopinata", group: "outros", label: "Outros Inv." }
];

const grid = document.getElementById('species-grid');
const filterBtns = document.querySelectorAll('.filter-btn');

// Função para renderizar as espécies
function renderSpecies(filter) {
    grid.innerHTML = ''; // Limpar a grelha
    
    // Filtrar a base de dados
    const filteredSpecies = filter === 'all' 
        ? speciesData 
        : speciesData.filter(s => s.group === filter);
        
    // Criar os cartões HTML para cada espécie
    filteredSpecies.forEach(species => {
        const card = document.createElement('div');
        card.className = 'card';
        
        // Futuramente, podes trocar a div placeholder por uma tag <img>
        card.innerHTML = `
            <div class="card-img-placeholder">
                [Inserir Imagem]
            </div>
            <div class="card-content">
                <h3 class="card-title">${species.name}</h3>
                <span class="tag tag-${species.group}">${species.label}</span>
            </div>
        `;
        
        grid.appendChild(card);
    });
}

// Eventos de clique para os botões de filtro
filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Remover classe "active" do botão anterior
        document.querySelector('.filter-btn.active').classList.remove('active');
        
        // Adicionar classe "active" ao botão clicado
        btn.classList.add('active');
        
        // Atualizar os cartões com base no atributo data-filter
        renderSpecies(btn.dataset.filter);
    });
});

// Renderizar tudo ao iniciar a página
renderSpecies('all');
