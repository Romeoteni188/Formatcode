<script>
	import { onMount } from 'svelte';
	import Chart from 'chart.js/auto';

	export let labels = [];
	export let data = [];

	let canvas;
	let chartInstance;

	onMount(() => {
		chartInstance = new Chart(canvas, {
			type: 'line',
			data: {
				labels,
				datasets: [
					{
						label: 'Crecimiento de la inversión',
						data,
						borderColor: 'rgb(134,185,22)',
						backgroundColor: 'rgba(134,185,22, 0.2)',
						tension: 0.4,
						fill: true
					}
				]
			},
			options: {
				responsive: true,
				plugins: {
					legend: {
						display: true,
						labels: {
							color: 'white', // Texto de la leyenda en blanco
							usePointStyle: true,
							pointStyle: 'line',
							boxWidth: 0 //para ocultar el cuadro
						}
					},
					title: {
						display: true,
						text: 'Finanssoreal',
						color: 'white' // Título en blanco
					},
					tooltip: {
						bodyColor: 'white', // Texto del tooltip en blanco
						backgroundColor: 'black', // Fondo del tooltip
						titleColor: 'white' // Título del tooltip en blanco
					}
				},
				scales: {
					x: {
						ticks: {
							color: 'white' // Texto eje X
						},
						grid: {
							color: 'rgba(255,255,255,0.1)' // Líneas eje X
						}
					},
					y: {
						ticks: {
							color: 'white' // Texto eje Y
						},
						grid: {
							color: 'rgba(255,255,255,0.1)' // Líneas eje Y
						}
					}
				}
			}
		});

		return () => {
			chartInstance.destroy();
		};
	});
</script>

<!--  Fondo negro para el canvas -->
<canvas bind:this={canvas} style="background-color:#000d2f ; border-radius: 0.5rem;"> </canvas>
