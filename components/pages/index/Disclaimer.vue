<template>
    <div class="mb-4 md:mb-8 lg:mb-12 relative w-10/12 md:w-4/5 lg:w-3/5 md:px-4 lg:px-8 py-2 lg:px-20 mx-auto">
        <img src="~/public/img/tarsier.png" 
             class="block absolute
                    w-[56px] h-[75px] lg:w-[110px] lg:h-[150px]
                    top-20 lg:top-8 -right-[36px] lg:-right-[48px]" 
             alt="tarsier" 
             id="imgTarsier" />
        <div class=" text-base px-8 py-4 rounded-lg bg-trso-blue text-white z-20"><p class="mb-2">{{ $t('pages.home.disclaimer1') }}</p><p>{{ $t('pages.home.disclaimer2') }}</p></div>
    </div>
</template>