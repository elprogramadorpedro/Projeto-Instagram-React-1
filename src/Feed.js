const dadosPosts = [
	{
		nomePerfil: "meowed",
		fotoPerfil: "assets/img/meowed.svg",
		fotoPost: "assets/img/gato-telefone.svg",
		nomePerfilComentario: "respondeai",
		fotoParfilComentario: "assets/img/respondeai.svg",
		numComentarios: "101.523",
	},
	{
		nomePerfil: "barked",
		fotoPerfil: "assets/img/barked.svg",
		fotoPost: "assets/img/dog.svg",
		fotoParfilComentario: "assets/img/adorable_animals.svg",
		nomePerfilComentario: "adorable_animals",
		numComentarios: "99.159",
	},
];

export default function Feed() {
	return (
		<div className="posts">
			<Post />
		</div>
	);
}

function Post() {
	return dadosPosts.map((dado) => (
		<div className="post">
			<Topo nome={dado.nomePerfil} foto={dado.fotoPerfil} />
			<Conteudo foto={dado.fotoPost} />
			<Fundo
				nome={dado.nomePerfilComentario}
				foto={dado.fotoParfilComentario}
				comentarios={dado.numComentarios}
			/>
		</div>
	));
}

function Topo(props) {
	return (
		<div className="topo">
			<div className="usuario">
				<img src={props.foto} />
				<p>{props.nome}</p>
			</div>
			<div className="acoes">
				<ion-icon
					name="ellipsis-horizontal"
					role="img"
					className="md hydrated"
					aria-label="ellipsis horizontal"></ion-icon>
			</div>
		</div>
	);
}
function Conteudo(props) {
	return (
		<div className="conteudo">
			<img src={props.foto} />
		</div>
	);
}
function Fundo(props) {
	return (
		<div className="fundo">
			<div className="acoes">
				<div>
					<ion-icon
						name="heart-outline"
						role="img"
						className="md hydrated"
						aria-label="heart outline"></ion-icon>
					<ion-icon
						name="chatbubble-outline"
						role="img"
						className="md hydrated"
						aria-label="chatbubble outline"></ion-icon>
					<ion-icon
						name="paper-plane-outline"
						role="img"
						className="md hydrated"
						aria-label="paper plane outline"></ion-icon>
				</div>
				<div>
					<ion-icon
						name="bookmark-outline"
						role="img"
						className="md hydrated"
						aria-label="bookmark outline"></ion-icon>
				</div>
			</div>

			<div className="curtidas">
				<img src={props.foto} />
				<div className="texto">
					<p>
						Curtido por <strong>{props.nome}</strong> e
						<strong>outras {props.comentarios} pessoas</strong>
					</p>
				</div>
			</div>
		</div>
	);
}
