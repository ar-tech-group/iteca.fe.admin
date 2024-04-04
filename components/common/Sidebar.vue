<script lang="ts" setup>
import MenuList from '@/components/common/MenuList.vue';
</script>

<template>
    <aside
        id="sidebar"
        class="sidebar"
    >
        <div class="sidebar__img">
            <img
                src="@/assets/images/logo.png"
                alt=""
            >
        </div>

        <MenuList />
    </aside>
</template>

<style lang="scss">
.sidebar {
    position: fixed;
    width: 100%;
    max-width: 230px;
    min-height: 100vh;
    grid-area: sidebar;
    padding: 24px;
    background-color: var(--white);

    &__img {
        display: flex;
        align-items: center;
        justify-content: center;
        margin-bottom: 24px;

        img {
            max-width: 160px;
        }
    }
}
</style>
