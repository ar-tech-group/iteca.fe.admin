<script lang="ts" setup></script>

<template>
    <footer
        id="footer"
        class="footer"
    >
        <p class="footer__text">
            Iteca.Events - Все права защищены.
        </p>
    </footer>
</template>

<style lang="scss">
.footer {
    position: relative;
    grid-area: footer;
    padding: 24px;
    background-color: var(--white);

    &__text {
        font-size: 16px;
        font-weight: var(--f-weight-regular);
        line-height: 24px;
        color: var(--gray);
    }
}
</style>
