<script lang="ts" setup>
import Search from '@/components/common/Search.vue';
import LangSelect from '@/components/common/LangSelect.vue';
import ProfileSelect from '@/components/common/ProfileSelect.vue';
import NotifSelect from '@/components/common/NotifSelect.vue';
</script>

<template>
    <header
        id="header"
        class="header"
    >
        <Search />

        <NotifSelect />

        <ProfileSelect />

        <LangSelect
            class="header__lang-select"
        />
    </header>
</template>

<style lang="scss">
.header {
    position: sticky;
    top: 0;
    display: flex;
    align-items: center;
    grid-area: header;
    padding: 24px;
    background-color: var(--white);

    &__lang-select {
        position: relative;
        padding: 0 8px;

        .lang-select-suggests {
            padding: 8px;
            background-color: var(--white);
            box-shadow: 0 2px 5px 0 rgba(28, 25, 24, 0.08);
        }
    }
}
</style>
