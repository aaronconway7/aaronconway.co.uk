<script>
	import { onMount } from 'svelte';

	export let data;
	console.log('🚀 ~ file: +page.svelte:3 ~ data:', data);

	function toggleAccordion(panelToActivate) {
		const buttons = panelToActivate.parentElement.querySelectorAll('button');
		const contents = panelToActivate.parentElement.querySelectorAll('.accordion-content');
		buttons.forEach((button) => {
			button.setAttribute('aria-expanded', false);
		});
		contents.forEach((content) => {
			content.setAttribute('aria-hidden', true);
		});

		panelToActivate.querySelector('button').setAttribute('aria-expanded', true);
		panelToActivate.querySelector('.accordion-content').setAttribute('aria-hidden', false);
	}

	onMount(() => {
		const accordion = document.querySelector('.accordion');
		accordion.addEventListener('click', (e) => {
			const activePanel = e.target.closest('.accordion-panel');
			if (!activePanel) return;
			toggleAccordion(activePanel);
		});
	});
</script>

<div class="max-w-3xl mx-auto px-4">
	<div class="accordion flex flex-col gap-4 md:flex-row md:h-96">
		{#each data.results as project, i (project.id)}
			<div
				class="accordion-panel relative isolate overflow-hidden p-[var(--panel-padding)] basis-[calc((var(--panel-padding)*2)+var(--button-size))] rounded-[calc(((var(--panel-padding)*2)+var(--button-size))/2)] motion-safe:transition-[flex-basis,flex-grow] motion-safe:duration-500 pr-[calc(var(--panel-padding)*4)] focus-within:outline-[3px] focus-within:outline focus-within:outline-offset-4"
			>
				<h2 id="{project.id}-heading">
					<button
						class="accordion-trigger flex items-center gap-[var(--panel-gap)] flex-row-reverse outline-0"
						aria-controls="{project.id}-content"
						aria-expanded={i === 0}
					>
						<span
							id="{project.id}-title"
							class="accordion-title text-2xl font-bold text-gray-50 relative isolate grid items-center md-max:after:absolute md-max:after:left-[calc((var(--panel-gap)+var(--button-size))*-1)] md-max:after:w-[calc(theme(width.full)+(var(--button-size)*2))] md-max:after:h-[var(--button-size)] md-max:after:bg-black/50 md-max:after:-z-10 md-max:after:rounded-full"
							>{project.properties.Name.title[0].text.content}</span
						>
						<span
							aria-hidden="true"
							class="accordion-icon inline-block bg-black/25 w-[var(--button-size)] aspect-square p-3 rounded-full z-10"
							>{project.icon.emoji}</span
						>
					</button>
				</h2>

				<div
					id="{project.id}-content"
					class="accordion-content"
					aria-labelledby="{project.id}-heading"
					aria-hidden={i !== 0}
					role="region"
				>
					<p
						class="translate-y-8 opacity-0 ml-[calc(var(--button-size)+var(--panel-gap))] text-gray-50"
					>
						lorem ipsum
					</p>
					<img
						class="accordion-image absolute inset-0 object-cover w-full h-full -z-10 transition-[filter] duration-500"
						src={project.cover.file.url}
						alt={project.properties.Name.title[0].text.content}
					/>
				</div>
			</div>
		{/each}
	</div>
</div>

<style>
	.accordion {
		--button-size: 3rem;
		--panel-padding: 0.75rem;
		--panel-gap: 1rem;

		contain: content;
	}

	.accordion-panel:has([aria-expanded='true']) {
		flex-basis: clamp(15rem, 40vh, 20rem);
		@apply flex-grow;
	}

	@media (prefers-reduced-motion: no-preference) {
		.accordion-panel:has([aria-expanded='true']) p {
			transition: transform 500ms 500ms, opacity 500ms 500ms;
		}
	}

	.accordion-panel:has([aria-expanded='true']) p {
		@apply -translate-y-0 opacity-100;
	}

	.accordion-panel:has([aria-expanded='true']) .accordion-image {
		@apply brightness-50;
	}
</style>
