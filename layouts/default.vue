<script lang="ts" setup></script>

<template>
    <div class="layout-default">
        <header
            id="header"
            class="header"
        >
            Header
        </header>

        <main class="main">
            <slot />
        </main>

        <footer
            id="footer"
            class="footer"
        >
            Footer
        </footer>
    </div>
</template>

<style lang="scss">
.layout-default {
    position: relative;
}
</style>
