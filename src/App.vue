<template>
  <div class="w-screen h-screen">
    <div class="w-full h-full md:w-3/4">
      <router-link to="/">
        ReadMe
      </router-link> | 
      <router-link to="/color">
        Color List
      </router-link>
      <router-view />
    </div>
  </div>
</template>
