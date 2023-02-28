<template>
    <div>
        <h2 class="mb-4 font-bold text-base lg:text-lg text-center lg:text-justify">
            <span>{{ $t('pages.slug.comments')}} {{ bookTitle }}, {{ $t('pages.slug.comments2')}}</span>
        </h2>
        <div id="disqus_thread"></div>
        <noscript>Please enable JavaScript to view the <a href="https://disqus.com/?ref_noscript">comments powered by Disqus.</a></noscript>
   </div>
</template>

<script setup>

defineProps({
    bookTitle: String
})

onMounted(() => {

    (function() { 
        var d = document, s = d.createElement('script');
        s.src = 'https://moviesfrombooks.disqus.com/embed.js';
        s.setAttribute('data-timestamp', +new Date());
        (d.head || d.body).appendChild(s);
        })();

})

</script>