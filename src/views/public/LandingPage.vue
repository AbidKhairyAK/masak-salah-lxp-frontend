<script setup>
import FeaturesWidget from '@/layouts/_components/FeaturesWidget.vue';
import FooterWidget from '@/layouts/_components/FooterWidget.vue';
import HeroWidget from '@/layouts/_components/HeroWidget.vue';
import HighlightsWidget from '@/layouts/_components/HighlightsWidget.vue';
import PricingWidget from '@/layouts/_components/PricingWidget.vue';

</script>
<template>
   <div class="bg-surface-0 dark:bg-surface-900">
        <div id="home" class="landing-wrapper overflow-hidden">
            <HeroWidget />
            <FeaturesWidget />
            <HighlightsWidget />
            <PricingWidget />
        </div>
    </div>
</template>