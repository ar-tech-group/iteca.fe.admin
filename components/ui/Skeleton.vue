<script lang="ts" setup>
withDefaults(defineProps<{
    delay?: number;
    width?: string;
    height?: string;
    invert?: boolean;
    isStatic?: boolean;
}>(), {
    delay:  100,
    width:  undefined,
    height: undefined,
});
</script>

<template>
    <div class="ui-skeleton">
        <div
            class="ui-skeleton__inner"
            :class="{
                'sui-skeleton__inner--static': isStatic,
            }"
            :style="{
                width: width,
                minHeight: height,
                animationDelay: `-${delay}ms`,
            }"
        />
    </div>
</template>

<style lang="scss" scoped>
.ui-skeleton {
    position: relative;
    display: block;
    height: 22px;
    content-visibility: auto;
    z-index: 0;

    &__inner {
        display: inline-block;
        vertical-align: top;
        width: 100%;
        height: 100%;
        border-radius: var(--radius);
        background-image:
            linear-gradient(
                100deg,
                var(--white-darkest) 0%,
                var(--white-darkest) 10%,
                var(--gray-lightest) 20%,
                var(--white-darkest) 22%
            );
        background-size: 200%;
        background-repeat: repeat-x;
        animation-name: shine;
        animation-duration: 2.6s;
        animation-timing-function: linear;
        animation-iteration-count: infinite;

        &--static {
            animation-play-state: paused;
        }
    }

    @for $i from 1 through 3 {
        &:nth-child(3n + #{$i}) &__inner {
            animation-delay: $i * 10ms;
        }
    }

    &--static {
        animation-play-state: paused;
        animation-delay: 0ms;
    }
}

@keyframes shine {
    0% {
        background-position-x: 60%;
    }

    50%,
    100% {
        background-position-x: -100%;
    }
}
</style>
