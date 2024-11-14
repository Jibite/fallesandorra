<template>
  <header class="bg-black">
    <nav class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <a href="#" class="-m-1.5 p-1.5">
          <span class="sr-only">Falles d'Andorra</span>
          <img src="/img/logo_h.png" alt="" class="h-20" />
        </a>
      </div>
      <div class="flex lg:hidden">
        <button type="button" class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-primary" @click="mobileMenuOpen = true">
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="size-10" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <NuxtLink v-for="item in navigation" :key="item.id" :to="item.href" class="text-xl font-semibold text-primary font-primary">{{ t(item.name) }}</NuxtLink>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <ElementsLangSwitcher />
      </div>
    </nav>
    <Dialog class="lg:hidden" @close="mobileMenuOpen = false" :open="mobileMenuOpen">
      <div class="fixed inset-0 z-10" />
      <DialogPanel class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-bg px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
        <div class="flex items-center justify-between">
          <a href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Falles d'Andorra</span>
            <img src="/img/logo_h.png" alt="" class="h-20" />
          </a>
          <button type="button" class="-m-2.5 rounded-md p-2.5 text-primary" @click="mobileMenuOpen = false">
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="size-10" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <NuxtLink v-for="item in navigation" :key="item.id" :to="item.href" class="-mx-3 block rounded-lg px-3 py-2 text-2xl font-primary font-bold text-primary hover:bg-yellow text-center">{{ t(item.name) }}</NuxtLink>
            </div>
            <div class="py-6">
              <ElementsLangSwitcher />
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'

const { t } = useI18n({
  useScope: 'local'
})

const navigation = [
  {
      id: 1,
      name: "falla",
      href: "/la-falla"
  },
  {
      id: 2,
      name: "fallaire",
      href: "/el-fallaire"
  },
  {
      id: 3,
      name: "festa",
      href: "/la-festa"
  },
  {
      id: 4,
      name: "community",
      href: "/comunitat"
  },
  {
      id: 5,
      name: "parroquies",
      href: "/parroquies"
  },
  {
      id: 6,
      name: "flinks",
      href: "/info"
  }
]

const mobileMenuOpen = ref(false)

</script>

<i18n lang="json">
  {
    "ca": {
      "falla": "Fer falla",
      "fallaire": "Ser fallaire",
      "festa": "Viu la festa",
      "community": "Som comunitat",
      "parroquies": "Gaudeixa-la!",
      "flinks": "Saber-ne més"
    },
    "es": {
      "falla": "Hacer la falla",
      "fallaire": "Ser fallaire",
      "festa": "Vive la fiesta",
      "community": "Somos comunidad",
      "parroquies": "¡Disfrútala!",
      "flinks": "Saber más"
    },
    "fr": {
      "falla": "Faire le falle",
      "fallaire": "Ètre un fallaire",
      "festa": "Vivez la fête",
      "community": "Une communauté",
      "parroquies": "Profitez-en!",
      "flinks": "Savoir plus"
    }
  }
</i18n>