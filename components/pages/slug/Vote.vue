<template>
    <div v-if="votesVisible">
        <div class="flex gap-x-6 items-center justify-center">
            <div>
                <button @click="updateVote('+')">
                    <IconsThumbUp  class="h-12 w-12 text-trso-blue"/>
                </button>
                <span>{{ vote.movieCount }}</span>
            </div>
            <div>
                <button @click="updateVote('-')">
                    <IconsThumbDown  class="h-12 w-12 text-red-400"/>
                </button>
                <span>{{ vote.bookCount }}</span>
            </div>
        </div>
    </div>
</template>

<script setup>

import { collection, doc, getDoc, getFirestore } from "firebase/firestore"

const props = defineProps({
    imdbId: String
})

const { $firestore } = useNuxtApp()

const vote = reactive({
    movieCount: 0,
    bookCount: 0
})

const votesVisible = ref(false)

onMounted(async () => {

    const uuid = useUuid()

    console.log(uuid)

    /*const docRef = doc($firestore, "votes", 'tt0038537') // todo replace by props.imdbId
    const docSnap = await getDoc(docRef)

    if (docSnap.exists()) {

        const voteData = docSnap.data()

        console.log(voteData)

        vote.movieCount = voteData.movieCount
        vote.bookCount = voteData.bookCount

        votesVisible.value = true

    } else {

        console.log(`no document for ${props.imdbId}`)

    }*/


})

function updateVote() {


}

</script>
