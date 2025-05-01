<script>
	// para la calculadora
	import InvestmentChart from '$lib/components/Chart.svelte';
	const financiamiento = [
		{
			number: 1,
			title: 'Selecciona tu monto de inversión',
			description: 'Desde Q250,000 hasta Q5,000,000.'
		},
		{
			number: 2,
			title: 'Comunícate con un asesor',
			description: 'vía WhatsApp para recibir tus análisis y opciones disponibles.'
		},
		{
			number: 3,
			title: 'Realiza tu inversión',
			description: 'Transferencia bancaria o pago con tarjeta de débito o crédito.'
		}
	];

	const cards = [
		{
			image: '/images/INVERSIONES/BUENARENTABILIDAD.png',
			title: 'Buena rentabilidad',
			description: 'rentabilidad atractiva entre 4% y 12% anual.'
		},
		{
			image: '/images/INVERSIONES/ACCESOFINANCIERO.png',
			title: 'Acceso financiero',
			description: 'Inversiones desde Q250,000 hasta Q5,000,000.'
		},
		{
			image: '/images/INVERSIONES/PLAZOSRENTABLES.png',
			title: 'Plazos rentables',
			description: 'plazos fijos míminos de 3 años.'
		},
		{
			image: '/images/INVERSIONES/ASESORIAFINANCIERA.png',
			title: 'ASesoría financiera',
			description: 'ASesoría personalizada para elegir la mejor opción para ti.'
		}
	];

	// section four telefono
	const beneficios = [
		'Consulta tu inversión en tiempo real.',
		'Recibe notificaciones de tu inversión.              ',
		'Atención personalizada desde la App.'
	];

	// calculadora
	let P = null; // Capital inicial
	let r = null; // Tasa de interés
	let n = null; // Compuesto una vez al año
	let t = null; // Años

	let labels = [];
	let data = [];

	function calcularInversion() {
		if (!P || !r || !n || t < 0) return;

		labels = [];
		data = [];

		for (let i = 0; i <= t; i++) {
			labels.push(`Año ${i}`);
			const amount = P * Math.pow(1 + r / n, n * i);
			data.push(Number(amount.toFixed(2)));
		}
	}
	function resetearFormulario() {
		P = null;
		r = null;
		n = null;
		t = null;
		labels = [];
		data = [];
	}

	function s(i) {
		return i === 1 ? '' : 's';
	}
</script>

<!-- section one -->

<section class="">
	<div
		class="flex h-full w-full flex-col items-center justify-center bg-cover bg-center"
		style="background-image: url('/images/INVERSIONES/FONDOBANNER.png')"
	>
		<div
			class="mt-4 grid max-w-6xl grid-cols-1 items-center gap-8 px-6 select-none md:grid-cols-2 md:gap-0"
		>
			<!-- Columna izquierda: imagen -->
			<div class="order-2 flex justify-center">
				<img
					alt="logo"
					src="/images/INVERSIONES/PERSONABANNERINVERSIONES.png"
					class="h-80 max-w-full md:h-100 lg:h-100"
				/>
			</div>

			<!-- Columna derecha: título y botones -->
			<div class="order-1 w-full space-y-6 p-5 text-center">
				<h1 class="text-2xl font-bold text-white md:text-3xl lg:text-2xl xl:text-5xl">
					Haz crecer tu dinero con inversiones seguras y rentables
				</h1>
				<div class="flex flex-col justify-center gap-7 sm:flex-row md:ml-12">
					<a
						href="https://wa.me/qr/RSZVNPVYP3YMM1"
						arial-label="Ir al enlace de WhatsApp"
						target="_blank"
						rel="noopener noreferrer"
						class="btn btn-secondary hover:bg-secondary/90 flex h-10 items-center justify-center rounded-full px-4 text-white transition"
					>
						Empezar a invertir
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<!-- section dos -->
<section class="mt-5 p-1">
	<div class="flex flex-wrap items-center justify-center gap-4">
		<div class="order-2 h-100 w-40 md:order-1">
			<img
				src="/images/INVERSIONES/FOTOGRAFIA1.png"
				alt="Foto izquierda"
				class="h-full w-full rounded-4xl object-cover"
			/>
		</div>
		<!-- Imagen del Centro -->
		<div
			class="order-1 h-100 w-200 rounded-lg bg-[url('/images/INVERSIONES/DESCRIPCIONDEINVERSION.png')] bg-cover bg-center md:order-2 md:rounded-4xl"
		>
			<div class="flex h-full flex-row items-center justify-end">
				<div class="w-1/2 p-3">
					<p class="md:text-ms p-2 text-center text-xs text-white lg:text-base">
						En <strong>Finanssoreal</strong>
						, descubre oportunidades de inversión con rentabilidad de hasta 12%. Nuestro equipo de asesores
						te guiará en cada paso para maximizar tus ganancias.
					</p>
				</div>
			</div>
		</div>
		<div class="order-3 h-100 w-40">
			<img
				src="/images/INVERSIONES/FOTOGRAFIA2.png"
				alt="Foto izquierda"
				class="h-full w-full rounded-4xl object-cover"
			/>
		</div>
	</div>
</section>

<!-- section tres -->
<section class="mt-10 w-full">
	<div
		class="flex w-full flex-col items-center justify-center rounded-2xl bg-cover bg-center p-8 select-none"
		style="background-image:url('/images/INVERSIONES/FONDOPROCEDIMIENTODEIVNERSION.png')"
	>
		<h1 class="mb-10 text-center text-3xl font-bold text-white lg:text-3xl">
			Procedimiento de financiamiento
		</h1>

		<div class="relative flex flex-col items-center">
			<div class="absolute top-0 left-[45px] z-10 hidden h-full w-1 bg-white md:block"></div>

			{#each financiamiento as financiamientos}
				<div class="z-10 mb-12 flex w-full items-center text-center text-white">
					<div
						class=" bg-secondary hidden h-24 w-24 min-w-24 items-center justify-center rounded-full border-4 border-white p-3 md:block"
					>
						<span class="text-base font-bold md:text-4xl lg:text-5xl">
							{financiamientos.number}
						</span>
					</div>
					<div class="bg-secondary ml-4 w-full rounded-full px-6 py-4 text-white">
						<strong class="block text-xl">
							{financiamientos.title}
						</strong>
						<p>{financiamientos.description}</p>
					</div>
				</div>
			{/each}
		</div>
		<a
			href="https://wa.me/qr/RSZVNPVYP3YMM1"
			arial-label="Ir al enlace de WhatsApp"
			class="bg-secondary hover:bg-opacity-90 mt-6 rounded-full px-8 py-3 text-lg font-medium text-white transition-all"
		>
			Quiero invertir
		</a>
	</div>
</section>

<section class="mt-5 p-1">
	<div class="flex h-full w-full flex-col items-center justify-center p-8">
		<div class="btn btn-secondary mt-4 rounded-lg">
			<h4 class="text-center text-4xl font-bold text-white">Beneficios</h4>
		</div>

		<div
			class="mt-10 grid grid-cols-1 gap-6 px-6 select-none md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 xl:gap-12"
		>
			{#each cards as card}
				<div class="bg-primary h-auto rounded-xl p-4 sm:w-80 xl:w-100">
					<div class="grid grid-cols-1 items-center gap-4 md:grid-cols-2">
						<div class="flex items-center justify-center">
							<img
								alt="logo"
								src={card.image}
								class="h-24 w-24 max-w-full md:h-32 md:w-32 lg:h-32 lg:w-32"
							/>
						</div>
						<div class="w-full space-y-4 p-2 text-center">
							<h3 class="bg-secondary rounded-lg text-sm font-bold text-white">
								{card.title}
							</h3>
							<p class="text-sm text-white md:text-sm">
								{card.description}
							</p>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</section>

<!-- <!-- section four -->

<section
	class="mt-20 rounded-lg bg-[url('/images/INVERSIONES/FONDOBANNER.png')] bg-cover bg-center p-6 md:mt-40"
>
	<div class="flex flex-row flex-wrap items-center justify-center">
		<div class="relative h-100 w-100">
			<img
				src="/images/INVERSIONES/TELEFONO.png"
				alt="Teléfono"
				class="absolute bottom-10 md:bottom-10"
			/>
		</div>

		<div class="flex flex-col items-center justify-center gap-3">
			<!-- div para el ul -->
			<div class="">
				<ul
					class="list-image-[url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTQiIGhlaWdodD0iMTIiIHZpZXdCb3g9IjAgMCAxNCAxMiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMzhiZGY4Ij48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xMy42ODUuMTUzYS43NTIuNzUyIDAgMCAxIC4xNDMgMS4wNTJsLTggMTAuNWEuNzUuNzUgMCAwIDEtMS4xMjcuMDc1bC00LjUtNC41YS43NS43NSAwIDAgMSAxLjA2LTEuMDZsMy44OTQgMy44OTMgNy40OC05LjgxN2EuNzUuNzUgMCAwIDEgMS4wNS0uMTQzWiIgLz48L3N2Zz4=)] text-white"
				>
					{#each beneficios as beneficio}
						<li>
							{beneficio}
						</li>
					{/each}
				</ul>
			</div>

			<h4 class="font-bold text-white">Descarga nuestra App</h4>

			<!-- div para la descarga de playstore -->
			<div class="grid grid-cols-2 gap-1">
				<img
					alt="Google Play"
					src="/images/INVERSIONES/GOOGLEPLAY.png"
					class="h-auto w-56 object-contain"
				/>
				<img
					alt="App Store"
					src="/images/INVERSIONES/APPSTORE.png"
					class="h-auto w-56 object-contain"
				/>
			</div>
		</div>
	</div>
</section>

<!-- section Calculadora -->
<section>
	<div class="h-full w-full items-center justify-center p-8">
		<h4 class="text-center text-2xl font-extrabold sm:text-4xl md:text-4xl lg:text-4xl xl:text-4xl">
			Calculadora de inversiones
		</h4>
		<div
			class="grid grid-cols-1 gap-5 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-1 xl:ml-1 xl:grid-cols-1 2xl:ml-65"
		>
			<div
				class="mt-4 ml-8 flex h-60 w-65 flex-col items-center justify-center p-2 shadow-xl sm:ml-35 md:order-1 md:ml-55 md:w-60 lg:order-1 lg:ml-94 lg:w-60 xl:order-1 xl:ml-137 xl:w-60"
			>
				<fieldset class="fieldset mt-4 w-57 lg:w-57 xl:w-57">
					<!-- <legend class="fieldset-legend">Parámetros</legend> -->
					<input type="number" class="input" placeholder="Capital Inicial" bind:value={P} />
					<input
						type="number"
						class="input"
						placeholder="Tiempo (años)"
						bind:value={t}
						min="2"
						max="10"
						on:input={(e) => {
							const value = parseInt(e.target.value);
							if (value < 2) e.target.value = 2;
							if (value > 10) e.target.value = 10;
							t = parseInt(e.target.value);
						}}
					/>
				</fieldset>
				<select class="select w-57 sm:w-57 md:w-57 lg:w-full xl:w-56" bind:value={n}>
					<option value={null} disabled selected>Frecuencia</option>
					<option value="1">Anual</option>
					<option value="2">Semestral</option>
					<option value="4">Trimestral</option>
					<!-- <option value="6">Bimestral</option> -->
					<option value="12">Mensual</option>
					<!-- <option value="24">Quincenal</option> -->
					<!-- <option value="52">Semanal</option> -->
					<!-- <option value="360">Año comercial 360</option> -->
					<!-- <option value="365">Año normal 365</option> -->
				</select>
				<select class="select mt-2 w-57 sm:w-57 md:w-57 lg:w-full xl:w-56" bind:value={r}>
					<option value={null} disabled selected>Interés</option>
					<option value="0.10">10%</option>
					<option value="0.12">12%</option>
				</select>
				<div>
					<button class="btn btn-primary mt-4" on:click={calcularInversion}> Calcular </button>
					<button class="btn btn-primary mt-4" on:click={resetearFormulario}> Resetear </button>
				</div>
			</div>
			{#if data.length}
				<div
					class="mt-6 h-full w-75 items-center justify-center select-none sm:w-135 md:order-2 md:w-170 lg:order-2 lg:ml-18 lg:h-100 lg:w-200 xl:order-2 xl:ml-70 xl:h-100 xl:w-200 2xl:ml-60"
				>
					<InvestmentChart {labels} {data} />
				</div>
			{/if}
		</div>
	</div>
	<div
		class="rounded-box border-base-content/5 ml-7 w-85 overflow-x-auto border sm:ml-38 md:ml-53 lg:ml-90 xl:ml-100 xl:w-150 2xl:ml-170"
	>
		<table class="table-zebra table items-center justify-center text-center select-none">
			<!-- head -->
			<thead>
				<tr>
					<!-- <th>ID</th> -->
					<th>Años</th>
					<th>Capital</th>
					<th>Interés</th>
				</tr>
			</thead>
			<tbody>
				{#each data as amount, i}
					<tr>
						<!-- <th>{i}</th> -->
						<td>{i} año{s(i)}</td>
						<td>Q{P.toLocaleString()}</td>
						<td>
							Q{amount.toLocaleString(undefined, {
								maximumFractionDigits: 4
							})}
						</td>
					</tr>
				{/each}
			</tbody>
		</table>
	</div>
	<div class="mt-4 xl:mt-10"></div>
</section>
