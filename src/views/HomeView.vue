<script setup>
import { PlusIcon } from 'lucide-vue-next';
import { getPostList } from '@/services/PostService'

const {
	data: post_list,
	error: post_error
} = getPostList()

function handleClick(id) {
	alert(id)
}
</script>

<template>
	<main>

		<Card>
			<template #title>
				<section class="flex justify-between">
					<h1>test</h1>
					
					<Button label="Create New">
						<template #icon>
							<PlusIcon class="w-4 h-4" />
						</template>
					</Button>
				</section>
			</template>

			<template #content>
				<DataTable :value="post_list">
					<Column field="id" header="ID" />
					<Column field="userId" header="User ID" />
					<Column field="title" header="Title" />
					<Column header="Action">
						<template #body="{ data }">
							<section class="flex gap-2">
								<Button label="Edit" size="small" severity="info" @click="handleClick(data.id)" />
								<Button label="Delete" size="small" severity="danger" @click="handleClick(data.id)" />
							</section>
						</template>
					</Column>
				</DataTable>

			</template>
		</Card>

	</main>
</template>
