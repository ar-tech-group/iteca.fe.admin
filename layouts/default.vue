<script lang="ts" setup>
import Header from '@/components/common/Header.vue';
import Sidebar from '@/components/common/Sidebar.vue';
import Footer from '@/components/common/Footer.vue';
</script>

<template>
    <div class="layout-default">
        <Header />

        <Sidebar />

        <main class="main">
            <slot />
        </main>

        <Footer />
    </div>
</template>

<style lang="scss">
.layout-default {
    position: relative;
    display: grid;
    grid-template-columns: 230px minmax(320px, 1200px) auto;
    grid-template-areas:
        'sidebar header header'
        'sidebar body body'
        'sidebar footer footer'
    ;
    grid-template-rows: auto 1fr auto;
    min-height: 100vh;

    .main {
        grid-area: body;
    }
}
</style>
