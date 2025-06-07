<template>
  <div class="min-h-screen bg-black px-4 lg:px-12 lg:grid lg:grid-cols-2">
    <SectionsInfoEtnografia class="h-full"/>
    <div class="flex flex-col gap-6">
      <SectionsInfoReferencies />
      <SectionsInfoOtherReferencies />
      <SectionsInfoPirineusRef />
    </div>
    <SectionsInfoPublicacions class="mt-10 col-span-2 text-center"/>
  </div>
</template>

<script setup>
</script>