<template>
    <div>
        <div class="relative z-10">
            <div enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-500/75 transition-opacity" />
            </div>
            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                    <div class="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-sm sm:p-6">
                        <div>
                            <div class="mx-auto flex items-center justify-center rounded-full">
                                <h4 class="font-primary text-secondary text-2xl">CRÈDITS WEB</h4>
                            </div>
                            <div class="credits-container">
                                <div class="mt-6 font-secondary text-base flex flex-col items-center justify-center">
                                    <h5>© Fotografies</h5>
                                    <ul class="text-center">
                                        <li>Xavier Burgos @xburguis</li>
                                        <li>Fabio Ferrari @fotografante77</li>
                                        <li>Clara Garnica @claragarnica</li>
                                        <li>Tony Lara @tonylaraphoto</li>
                                        <li>Oriol Llauradó @oriolllaurado</li>
                                        <li>Lluís Prieto</li>
                                        <li>Santi Sanchez @jibite</li>
                                        <li>Juanjo Serra</li>
                                        <li>Fidel Solsona</li>
                                        <li>Joan Vega</li>
                                        <li><br></li>
                                        <li>Qucut Producció Audiovisual @produccioqucut</li>
                                        <li>Museu Molí Paperer de Capellades @mmp_capellades</li>
                                        <li><br></li>
                                        <li>Associació Fallaires d'Andorra la Vella @assfallairesalv</li>
                                        <li>Fallaires d'Encamp</li>
                                        <li><br></li>
                                        <li>Comú d'Andorra la Vella @andorracapital</li>
                                        <li>Comú Sant Julià de Lòria @comusantjuliadeloria</li>
                                        <li>Comú d'Escaldes-Engordany @comuee</li>
                                    </ul>
                                </div>
                                <div>
                                    <div class="mt-6 font-secondary text-base flex flex-col items-center justify-center">
                                    <h5>© Textos</h5>
                                    <ul class="text-center">
                                        <li>Albert Roig</li>
                                    </ul>
                                    </div>
                                    <div class="mt-6 font-secondary text-base flex flex-col items-center justify-center">
                                    <h5>Col·laboració i adaptació dels textos:</h5>
                                    <ul class="text-center">
                                        <li>Fran Alcázar</li>
                                        <li>Arxiu d'Etnografia d'Andorra</li>
                                        <li>Departament de Patrimoni Cultural</li>
                                    </ul>
                                </div>
                                <div class="mt-6 font-secondary text-base flex flex-col items-center justify-center">
                                    <h5 class="mb-2">Disseny i desenvolupament web</h5>
                                    <a href="mailto:info@sscanals.com"><img src="/img/logo_desplega.png" alt="DESPLEGA"></a>
                                </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-5 sm:mt-6">
                            <button type="button" class="inline-flex w-full justify-center rounded-md bg-secondary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-slate-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600" @click="close">Tancar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { CheckIcon } from '@heroicons/vue/24/outline'

const emit = defineEmits(['close'])

const close = () => {
    emit('close')
}
</script>