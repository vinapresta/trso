<template>
    <div>
        <h2 class="px-4 mb-4 font-bold text-lg">{{ $t('pages.movieDetail.comments')}} {{ bookTitle }}, {{ $t('pages.movieDetail.comments2')}}</h2>
       <div id="disqus_thread" class="px-4"></div>
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