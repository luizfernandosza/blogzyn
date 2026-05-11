
function CarregarLista(){


	 return  [
         {
             img: "img/reserva-emergencia.png",
             categoria: "Educação",
             classecategoria: "badge bg-success mb-2 badge-category",
             titulo: "Como criar uma reserva de emergência em 12 meses (mesmo trabalhando CLT)",
             subtitulo: "O plano prático para você nunca mais ter medo de uma demissão ou de um imprevisto financeiro.",
             pagina: "paginas/artigo-reserva-emergencia.html",
             datapublicacao: "9 de Maio, 2026",
             tempodeleitura: "6 min de leitura"
         }, {
             img: "img/desenrola2.0.png",
             categoria: "Oportunidade",
             classecategoria: "badge bg-warning text-dark mb-2 px-3 py-2 fw-bold",
             titulo: "Desenrola 2.0: Novo programa para usar o FGTS e quitar dívidas",
             subtitulo: "Aprenda a utilizar o saldo do seu Fundo de Garantia para liquidar dívidas com descontos agressivos.",
             pagina: "paginas/artigo-desenrola2.0.html",
             datapublicacao: "9 de Maio, 2026",
             tempodeleitura: "10 min de leitura"
         },
		{
			img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
			categoria: "Educação",
			classecategoria : "badge bg-success mb-2 badge-category",
			titulo: "Orçamento Familiar do Zero",
			subtitulo: "Aprenda a regra 50-30-20 e organize suas contas mensais de uma vez por todas.",
			pagina: "paginas/artigo-orcamento-familiar.html", 
			datapublicacao : "6 de Maio, 2026",
			tempodeleitura: "6 min de leitura"
		},
		{
			img: "https://images.pexels.com/photos/30332440/pexels-photo-30332440.jpeg?_gl=1*41ycfu*_ga*Mzk5NDA4NTY0LjE3NzgxODI4MTQ.*_ga_8JE65Q40S6*czE3NzgxODI4MTMkbzEkZzEkdDE3NzgxODI4ODAkajYwJGwwJGgw",
			categoria: "Economia",
			classecategoria : "badge bg-primary mb-2 badge-category",
			titulo: "Taxa Selic em 2026",
			subtitulo: "O que esperar dos juros até o fim do ano e como isso afeta seu bolso.",
			pagina: "paginas/artigo-taxa-selic.html",
			datapublicacao : "2 de Maio, 2026",
			tempodeleitura: "3 min de leitura"
		},
		{
			img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxXY2Bs0klkFa2k8u5_hjiJQ-zyaQ3711nw&s",
			categoria: "Educação",
			classecategoria : "badge bg-success mb-2 badge-category",
			titulo: "Como Sair das Dívidas",
			subtitulo: "Estratégias práticas para pagar cartão de crédito, cheque especial e retomar sua paz mental.",
			pagina: "paginas/artigo-sair-das-dividas.html",
			datapublicacao : "29 de Abril, 2026",
			tempodeleitura: "13 min de leitura"
		} ,
		{
			img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
			categoria: "Direitos",
			classecategoria :  "badge bg-danger mb-2 badge-category",
			titulo: "Juros Abusivos",
			subtitulo: "Descubra se você está sendo enganado pelo banco e como recuperar seu dinheiro.",
			pagina: "paginas/artigo-juros-abusivos.html",
			datapublicacao : "5 de Maio, 2026",
			tempodeleitura: "5 min de leitura"
		},
		{
			img: "https://images.unsplash.com/photo-1772413438617-937e44f2642e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
			categoria: "Oportunidade",
			classecategoria : "badge bg-warning text-dark mb-2 px-3 py-2 fw-bold",
			titulo: "Renda Extra: 10 Formas de ganhar dinheiro.",
			subtitulo: "Transforme seu tempo livre em faturamento com estratégias que funcionam.",
			pagina: "paginas/artigo-renda-extra.html",
			datapublicacao : "8 de Maio, 2026",
			tempodeleitura: "6 min de leitura"
		},
		{
			img: "img/fgts-grafico.png",
			classecategoria: "badge-success",
			categoria: "Oportunidade",
			classecategoria : "badge bg-warning text-dark mb-2 px-3 py-2 fw-bold",
			titulo: "Como usar o FGTS a seu favor.",
			subtitulo: "Aprenda 10 formas de fazer seu FGTS render de verdade.",
			pagina: "paginas/artigo-guia-definitivo-fgts.html",
			datapublicacao : "8 de Maio, 2026",
			tempodeleitura: "10 min de leitura"
		}
	];
}
document.addEventListener('DOMContentLoaded', () => {
    
	let listaDeDados =  CarregarLista();
	
    renderizarLista(listaDeDados);
});


function renderizarLista(itens) {
	
	if (!itens || !Array.isArray(itens)) {
		let listaDeDados =  CarregarLista();
        renderizarLista(listaDeDados) ;
    }
	
    const container = document.getElementById('div-container');
    let  htmlGerado = ""
		
    for (const item of itens) { 		
		htmlGerado += `
			<div class="col-md-4 col-lg-4">
				<div class="card">
					<img src="${item.img}" alt="" style="width:100%; height: 200px;" class="card-img-top">
					<div class="card-body d-flex flex-column">
						<span class="${item.classecategoria}">${item.categoria}</span>
						<h5 class="card-title fw-bold">${item.titulo}</h5>
						<p class="card-text text-muted small">${item.subtitulo}</p>
						<a href="${item.pagina}" class="btn btn-read mt-auto">Ler Agora</a>
						<div class="d-flex align-items-center" style="margin-top:5px;"  >
                            <small class="text-muted">${item.datapublicacao} • ${item.tempodeleitura}</small>
                        </div>
					</div>
				</div>
			</div>
		  `;
    }
    container.innerHTML = htmlGerado;
}

///-------------------------  links úteis -----------------------------------------------

function SelecionarCategoria(cat) {
    console.log("Categoria selecionada:", cat);
	
	let listaDeDados =  CarregarLista();
    
    // 1. Filtra os dados (Certifique-se que listaDeDados é global e existe)
    const dadosFiltrados = listaDeDados.filter(item => item.categoria === cat);
    
    console.log("Itens encontrados:", dadosFiltrados);
    
    // 2. Chama a função de desenho passando a nova lista filtrada
    renderizarLista(dadosFiltrados); 
}

function LimparFiltro(){
	let listaDeDados =  CarregarLista();
	 renderizarLista(listaDeDados); 
}
 
 


///-------------------------  grafico -----------------------------------------------

let chartInstance = null; // Para destruir o gráfico anterior antes de criar um novo

function calcular() {
	
	const principalMascarado = document.getElementById('principal').value;
    const aporteMascarado = document.getElementById('aporte').value;

    const principal = limparValorMoeda(principalMascarado) || 0;
    const aporte = limparValorMoeda(aporteMascarado) || 0;
		
    let taxaInput = parseFloat(document.getElementById('taxa').value) || 0;
    let tempoInput = parseFloat(document.getElementById('tempo').value) || 0;

    const tipoTaxa = document.getElementById('tipoTaxa').value;
    const tipoTempo = document.getElementById('tipoTempo').value;

    let meses = tipoTempo === 'anos' ? tempoInput * 12 : tempoInput;
    let taxaMensal = tipoTaxa === 'anual' ? Math.pow(1 + (taxaInput / 100), 1 / 12) - 1 : taxaInput / 100;

    let saldoAcumulado = principal;
    let investidoAcumulado = principal;
    
    let dadosGraficoTotal = [principal];
    let dadosGraficoInvestido = [principal];
    let labelsGrafico = ["Início"];
    let htmlTabela = "";

    // Loop mês a mês para gerar a tabela e o gráfico
    for (let i = 1; i <= meses; i++) {
        let jurosDoMes = saldoAcumulado * taxaMensal;
        saldoAcumulado += jurosDoMes + aporte;
        investidoAcumulado += aporte;

        // Guarda dados para o gráfico
        labelsGrafico.push(`Mês ${i}`);
        dadosGraficoTotal.push(saldoAcumulado.toFixed(2));
        dadosGraficoInvestido.push(investidoAcumulado.toFixed(2));

        // Monta a linha da tabela
        htmlTabela += `
            <tr>
                <td>${i}</td>
                <td class="text-success">R$ ${jurosDoMes.toFixed(2)}</td>
                <td>R$ ${investidoAcumulado.toFixed(2)}</td>
                <td>R$ ${saldoAcumulado.toFixed(2)}</td>
            </tr>
        `;
    }

    // Exibe os totais no topo
    document.getElementById('resTotalInvestido').innerText = investidoAcumulado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('resTotalJuros').innerText = (saldoAcumulado - investidoAcumulado).toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    document.getElementById('resMontanteFinal').innerText = saldoAcumulado.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    // Injeta a tabela
    document.getElementById('tabelaCorpo').innerHTML = htmlTabela;
    document.getElementById('resultado').style.display = 'block';

    renderizarGrafico(labelsGrafico, dadosGraficoTotal, dadosGraficoInvestido);
}

function renderizarGrafico(labels, total, investido) {
    const ctx = document.getElementById('meuGrafico').getContext('2d');
    
    if (chartInstance) { chartInstance.destroy(); } // Limpa gráfico anterior

    chartInstance = new Chart(ctx, {
        type: 'line',
        data: {
            labels: labels,
            datasets: [
                {
                    label: 'Total Acumulado',
                    data: total,
                    backgroundColor: 'rgba(40, 167, 69, 0.2)',
                    borderColor: '#28a745',
                    fill: true
                },
                {
                    label: 'Total Investido',
                    data: investido,
                    borderColor: '#6c757d',
                    borderDash: [5, 5],
                    fill: false
                }
            ]
        },
        options: {
            responsive: true,
            plugins: { legend: { position: 'top' } },
            scales: { y: { beginAtZero: true } }
        }
    });
}

// ----------------------------------- Mascaras ----------------------------------

function mascaraMoeda(input) {
    let valor = input.value;

    // Remove tudo o que não é dígito
    valor = valor.replace(/\D/g, "");

    // Converte para número e formata com vírgula e ponto
    valor = (valor / 100).toLocaleString('pt-BR', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    });

    // Adiciona o prefixo e atualiza o campo
    input.value = "R$ " + valor;
}

function limparValorMoeda(valor) {
    // Remove o "R$", os pontos de milhar e troca a vírgula por ponto
    return parseFloat(valor.replace("R$ ", "").replace(/\./g, "").replace(",", "."));
}