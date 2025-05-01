<script>
	// import { onMount } from "svelte"
	import { goto } from '$app/navigation';
	import { theme } from '$lib/stores/theme';
	import { get } from 'svelte/store';

	let isOpen = false;
	let currentTheme = get(theme);

	const links = {
		Inicio: '/',
		Financiamientos: '/financing',
		Inversiones: '/investments',
		Nosotros: '/about',
		Contacto: '/contact'
	};

	function handleLinkClick(path) {
		isOpen = false;
		goto(path);
	}

	// Reactivo para que el checkbox saque que tema cambiar

	// $: theme.subscribe((value) => {
	//     currentTheme = value
	// })

	$: currentTheme = $theme;

	function toggleTheme() {
		theme.set(currentTheme === 'dark' ? 'light' : 'dark');
	}
</script>

<div class="navbar bg-info z-50 w-full shadow-lg">
	<div class="navbar-start">
		<!-- Botón móvil -->
		<div class="dropdown">
			<button
				on:click={() => (isOpen = !isOpen)}
				class="btn btn-ghost bg-info border-info lg:mt-5 lg:ml-2 lg:block xl:hidden"
			>
				<i class="fa-solid fa-bars text-3xl text-white"></i>
			</button>

			{#if isOpen}
				<ul
					class="bg-base-100 rounded-box absolute left-0 z-50 mt-3 w-52 p-2 text-blue-900 shadow-md"
				>
					{#each Object.entries(links) as [label, path]}
						<li>
							<a href={path} on:click|preventDefault={() => handleLinkClick(path)}>
								{label}
							</a>
						</li>
					{/each}
				</ul>
			{/if}
		</div>

		<!-- Logo grande -->
		<a class="ml-4 hidden lg:hidden xl:block" href="/">
			<img
				src="/images/LOGO/LOGOFINANSSOREALAUNATINTABLANCO.png"
				alt="logo"
				width="160"
				height="160"
			/>
		</a>
	</div>

	<!-- Logo móvil -->
	<div class="navbar-end mt-4 mr-4 flex animate-none lg:mr-4 xl:hidden">
		<a href="/">
			<img
				src="/images/LOGO/LOFOFINANSSOREALHORIZONTAL-15.png"
				alt="logo"
				width="240"
				height="240"
			/>
		</a>
	</div>

	<!-- Menú grande -->
	<div class="navbar-end hidden xl:flex">
		<ul class="menu menu-horizontal px-1">
			{#each Object.entries(links) as [label, path]}
				<li class="text-xl text-white">
					<a href={path}>{label}</a>
				</li>
			{/each}
		</ul>
	</div>

	<label class="swap swap-rotate mr-6">
		<input type="checkbox" on:change={toggleTheme} checked={currentTheme === 'dark'} />
		<!-- Icono sol (modo claro) -->
		<i class="fa-regular fa-sun swap-off mt-4 text-xl text-white sm:mt-0 sm:text-xl"> </i>
		<!-- Icono luna (modo oscuro) -->
		<i class="fa-regular fa-moon swap-on mt-3 text-2xl text-white sm:mt-0 sm:text-2xl"> </i>
	</label>
</div>
