export default function Sidebar() {
    return (
        <div className="sidebar">
            <Usuario />
			<Sugestoes />
			<Links />
			<Copyright />
        </div>
    );
}

function Usuario() {
	return (
		<div class="usuario">
			<img src="assets/img/catanacomics.svg" alt="imagem"/>
			<div class="texto">
				<strong>catanacomics</strong>
				<p>Catana</p>
			</div>
		</div>
	);
}
function Sugestoes() {
	return (
		<div class="sugestoes">
			<div class="titulo">
				Sugestões para você
				<div>Ver tudo</div>
			</div>
			<SugestaoPerfis />
		</div>
	);
}
function SugestaoPerfis() {
	const dadosPerfis = [
		{
			nomePerfil: "bad.vibes.memes",
			fotoPerfil: "assets/img/bad.vibes.memes.svg",
			razaoSeguir: "Segue você",
		},
		{
			nomePerfil: "chibirdart",
			fotoPerfil: "assets/img/chibirdart.svg",
			razaoSeguir: "Segue você",
		},
		{
			nomePerfil: "razoesparaacreditar",
			fotoPerfil: "assets/img/razoesparaacreditar.svg",
			razaoSeguir: "Novo no Instagram",
		},
		{
			nomePerfil: "adorable_animals",
			fotoPerfil: "assets/img/adorable_animals.svg",
			razaoSeguir: "Segue Você",
		},
		{
			nomePerfil: "smallcutecats",
			fotoPerfil: "assets/img/smallcutecats.svg",
			razaoSeguir: "Segue Você",
		},
	];
	return dadosPerfis.map((dado) => (
		<div class="sugestao">
			<div class="usuario">
				<img src={dado.fotoPerfil} alt="imagem" />
				<div class="texto">
					<div class="nome">{dado.nomePerfil}</div>
					<div class="razao">{dado.razaoSeguir}</div>
				</div>
			</div>

			<div class="seguir">Seguir</div>
		</div>
	));
}
function Links() {
	return (
		<div class="links">
			Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos •
			Localizações • Contas mais relevantes • Hashtags • Idioma
		</div>
	);
}
function Copyright() {
	return <div class="copyright">© 2021 INSTAGRAM DO FACEBOOK</div>;
}
