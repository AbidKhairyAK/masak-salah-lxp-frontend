<script setup lang="ts">

const results = [
	{
		date: '2025-04-01',
		score: 80,

	},
	{
		date: '2025-04-02',
		score: 90,

	},
	{
		date: '2025-04-03',
		score: 85,

	},
	{
		date: '2025-04-04',
		score: 95,
	}
]
</script>
<template>
	<Card class="p-12 !shadow-none">
		<template #content>
			<div class="prose max-w-full text-lg">
				<h1 class="font-bold text-2xl text-gray-800">Practice Single Choice</h1>
				<p class="my-4">Sebelum memulai tes, pastikan Anda telah membaca dan memahami instruksi berikut ini:</p>
				<ul>
					<li>Ujian ini terdiri dari beberapa soal pilihan ganda. Bacalah setiap soal dengan seksama sebelum
						memilih
						jawaban yang menurut Anda paling tepat.</li>
					<li>Anda dapat mengubah jawaban selama tes berlangsung, namun setelah tes selesai, perubahan tidak
						dapat
						dilakukan.</li>
					<li>Setelah mengklik tombol "Start Practice" tes akan dimulai</li>
				</ul>
				<p>Pastikan Anda siap sebelum memulai! Klik tombol di bawah untuk mulai ujian.</p>
				
			</div>
			<IButton label="Start Practice" class="my-8 !p-4" severity="contrast"/>
			<div>
				<h1 class="font-bold text-2xl text-gray-800 mb-8">History</h1>
				<DataTable :value="results" class="border border-surface rounded-border	overflow-hidden" id="my-table">
					<Column field="date" header="Date" />
					<Column field="score" header="Score" />
				</DataTable>
			</div>
		</template>
	</Card>
</template>