export default function Stories() {
	return (
		<div className="stories">
			<Story />
		</div>
	);
}

function Story() {
	const perfis = [
		{
			nomePerfil: "9gag",
			fotoPerfil: "assets/img/9gag.svg",
		},
		{
			nomePerfil: "meowed",
			fotoPerfil: "assets/img/meowed.svg",
		},
		{
			nomePerfil: "barked",
			fotoPerfil: "assets/img/barked.svg",
		},
		{
			nomePerfil: "nathanwpylestrangeplanet",
			fotoPerfil: "assets/img/nathanwpylestrangeplanet.svg",
		},
		{
			nomePerfil: "wawawicomics",
			fotoPerfil: "assets/img/wawawicomics.svg",
		},
		{
			nomePerfil: "respondeai",
			fotoPerfil: "assets/img/respondeai.svg",
		},
		{
			nomePerfil: "filomoderna",
			fotoPerfil: "assets/img/filomoderna.svg",
		},
		{
			nomePerfil: "memeriagourmet",
			fotoPerfil: "assets/img/memeriagourmet.svg",
		},
	];

	return perfis.map((dados) => (
		<div className="story">
			<div className="imagem">
				<img src={dados.fotoPerfil} />
			</div>
			<div className="usuario">
				<p>{dados.nomePerfil}</p>
			</div>
		</div>
	));
}
