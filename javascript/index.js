

const listaDeDados = [
    {
        img: "https://images.unsplash.com/photo-1554224155-6726b3ff858f",
        categoria: "Educação",
		classecategoria : "badge bg-success mb-2 badge-category",
        titulo: "Orçamento Familiar do Zero",
        subtitulo: "Aprenda a regra 50-30-20 e organize suas contas mensais de uma vez por todas.",
        pagina: "artigo-orcamento-familiar.html", 
		datapublicacao : "6 de Maio, 2026",
		tempodeleitura: "6 min de leitura"
    },
    {
        img: "https://images.pexels.com/photos/30332440/pexels-photo-30332440.jpeg?_gl=1*41ycfu*_ga*Mzk5NDA4NTY0LjE3NzgxODI4MTQ.*_ga_8JE65Q40S6*czE3NzgxODI4MTMkbzEkZzEkdDE3NzgxODI4ODAkajYwJGwwJGgw",
        categoria: "Macroeconomia",
		classecategoria : "badge bg-primary mb-2 badge-category",
        titulo: "Taxa Selic em 2026",
        subtitulo: "O que esperar dos juros até o fim do ano e como isso afeta seu bolso.",
        pagina: "artigo-taxa-selic.html",
		datapublicacao : "2 de Maio, 2026",
		tempodeleitura: "3 min de leitura"
    },
    {
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTxXY2Bs0klkFa2k8u5_hjiJQ-zyaQ3711nw&s",
        categoria: "Recuperação Financeira",
		classecategoria :  "badge bg-danger mb-2 badge-category",
        titulo: "Como Sair das Dívidas",
        subtitulo: "Estratégias práticas para pagar cartão de crédito, cheque especial e retomar sua paz mental.",
        pagina: "artigo-sair-das-dividas.html",
		datapublicacao : "29 de Abril, 2026",
		tempodeleitura: "13 min de leitura"
    } ,
    {
        img: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f",
        categoria: "Direitos",
		classecategoria :  "badge bg-danger mb-2 badge-category",
        titulo: "Juros Abusivos",
        subtitulo: "Descubra se você está sendo enganado pelo banco e como recuperar seu dinheiro.",
        pagina: "artigo-juros-abusivos.html",
		datapublicacao : "5 de Maio, 2026",
		tempodeleitura: "5 min de leitura"
    },
    {
        img: "https://images.unsplash.com/photo-1772413438617-937e44f2642e?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        categoria: "Oportunidade",
		classecategoria : "badge bg-warning text-dark mb-2 px-3 py-2 fw-bold",
        titulo: "Renda Extra: 10 Formas Reais de Ganhar Dinheiro Além do Salário",
        subtitulo: "Transforme seu tempo livre em faturamento com estratégias que funcionam no cenário atual.",
        pagina: "artigo-renda-extra.html",
		datapublicacao : "8 de Maio, 2026",
		tempodeleitura: "6 min de leitura"
    }
];

document.addEventListener('DOMContentLoaded', () => {
    // Chame sua função aqui
    renderizarLista(listaDeDados);
});


function renderizarLista(itens) {
    const container = document.getElementById('div-container');
    let  htmlGerado = ""
		
    for (const item of listaDeDados) { 		
		htmlGerado += `
			<div class="col-md-6 col-lg-3">
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



