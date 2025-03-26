<script setup lang="ts">
import { FilePenIcon, PlusIcon, Trash2Icon } from 'lucide-vue-next'

import { getPostList } from '@/services/PostService'
import { IButton } from '@/components'

const {
	data: post_list,
} = getPostList()

function handleClick( id:string|number ) {
	
}
</script>

<template>
	<main>

		<Card>
			<template #title>
				<section class="flex justify-between items-center mb-4">
					<div>
						<h1 class="text-2xl leading-8 text-color font-[325]">
							Course List
						</h1>
						<p class="mt-1 leading-6 text-base font-thin text-muted-color font-normal">
							List of all created courses on this platform.
						</p>
					</div>
					
					<IButton label="Create New" :lucide="PlusIcon" />
				</section>
			</template>

			<template #content>
				<DataTable id="my-table" :value="post_list?.data" class="border border-surface rounded-border	overflow-hidden">
					<Column field="id" header="ID" body-class="w-[50px]" />
					<Column field="title" header="Title" />
					<Column field="user.email" header="User" />
					<Column header="Action" body-class="w-[110px]">
						<template #body="{ data }">
							<section class="flex gap-2">
								<IButton 
									label="Edit" 
									size="small" 
									severity="secondary" 
									:lucide="FilePenIcon"
									@click="handleClick(data.id)" 
								/>
								<IButton 
									label="Delete" 
									size="small" 
									severity="secondary" 
									:lucide="Trash2Icon"
									@click="handleClick(data.id)" 
								/>
							</section>
						</template>
					</Column>
				</DataTable>

			</template>
		</Card>

	</main>
</template>