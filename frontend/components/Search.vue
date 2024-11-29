<script setup lang="ts">
import { Input } from '@/components/ui/input'
import { useItemsStore } from '@/store/useItemsStore'
import { Search } from 'lucide-vue-next'

const items = useItemsStore()
</script>

<template>
    <div class="relative w-full items-center">
        <Input v-model="items.query" id="search" type="text" placeholder="Search..." class="pl-10"/>
        <span class="absolute start-0 inset-y-0 flex items-center justify-center px-2">
      <Search class="size-6 text-muted-foreground"/>
    </span>
    </div>
</template>
