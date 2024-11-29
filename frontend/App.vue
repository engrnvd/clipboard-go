<script lang="ts" setup>
import MainHeader from '@/components/MainHeader.vue'
import Search from '@/components/Search.vue'
</script>

<template>
    <main>
        <div class="sticky">
            <MainHeader/>
            <div class="px-4 py-2">
                <Search/>
            </div>
        </div>
    </main>
</template>

