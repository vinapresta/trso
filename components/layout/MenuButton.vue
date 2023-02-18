<template>
    <li class="relative 
               after:content-['']
               after:absolute
               after:w-full
               after:scale-x-0
               after:h-[2px]
               after:bottom-0
               after:left-0
               after:bg-white
               after:origin-bottom-right
               after:transition
               after:ease-out 
               after:duration-300
               hover:after:scale-x-100
               hover:after:origin-bottom-left">
        <slot />
    </li>
</template>