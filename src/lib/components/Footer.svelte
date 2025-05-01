<script>
	const ListMenu = {
		'/': 'Inicio',
		'/financing': 'Financiamientos',
		'/investments': 'Inversiones',
		'/about': 'Nosotros',
		'/contact': 'Contacto'
	};

	const facebook = 'https://www.facebook.com/finanssoreal.gt';
	const instagram = 'https://www.instagram.com/finanssoreal/';
</script>

<footer class="bg-primary items-center justify-center">
	<div
		class="mt-4 ml-2 grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 xl:gap-96"
	>
		<!-- Menú -->
		<ul class="mx-4 my-2 flex w-1/4 list-disc flex-col text-white md:ml-10 lg:ml-10 xl:ml-14">
			{#each Object.entries(ListMenu) as [path, label]}
				<li>
					<a
						href={path}
						class="text-xs text-gray-300 hover:text-gray-50 sm:text-sm lg:text-base xl:text-lg"
					>
						{label}
					</a>
				</li>
			{/each}
		</ul>

		<!-- Info de contacto y redes -->
		<div class="ml-6 flex w-full flex-col items-center text-center lg:w-4/5">
			<div class="mr-11 flex flex-col gap-2 text-xs text-gray-50 lg:ml-16 lg:text-base xl:ml-16">
				<span>(502) 45808841</span>
				<span>Finanssoreal@gmail.com</span>
				<span>Cobán, Alta Verapaz, Guatemala.</span>
			</div>

			<div class="mt-4 mr-14 flex items-center justify-center space-x-5 lg:ml-16 xl:ml-18">
				<a href={facebook} target="_blank" rel="noopener noreferrer">
					<i class="fab fa-facebook text-4xl text-white hover:text-gray-300"> </i>
				</a>
				<a href={instagram} target="_blank" rel="noopener noreferrer">
					<i class="fab fa-instagram text-4xl text-white hover:text-gray-300"> </i>
				</a>
			</div>
		</div>

		<!-- Logo -->
		<div
			class="mt-8 flex h-18 w-24 items-center justify-center sm:ml-12 sm:w-32 md:ml-16 md:w-28 lg:mt-10 lg:ml-0 lg:w-32 xl:mt-14 xl:mr-1 xl:w-40"
		>
			<a href="/">
				<img
					src="/images/LOGO/LOGOFINANSSOREALAUNATINTABLANCO.png"
					alt="logo footer"
					width="300"
					height="300"
				/>
			</a>
		</div>
	</div>

	<!-- Copyright -->
	<div class="mt-6 text-center">
		<p class="p-2 text-xs text-gray-400 select-none sm:text-base lg:text-base">
			© TODOS LOS DERECHOS RESERVADOS | Políticas de privacidad
		</p>
	</div>
</footer>
