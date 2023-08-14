<template>
    <div class="flex gap-2">
        <a href="`/users/${id}/edit`" class="text-indigo-500">
            <i class="fa fa-eye"></i>
        </a>
        <a href="`/users/${id}/edit`" class="text-green-500">
            <i class="fa fa-edit"></i>
        </a>
        <a href="`/users/${id}/edit`" class="text-red-500">
            <i class="fa fa-trash"></i>
        </a>
    </div>
</template>

<script setup>
const props = defineProps({
        id: Number
    })
</script>