<template>
  <div class="flex flex-col min-h-screen mx-auto container">
    <TheHeader />

    <div class="flex-1 flex">
      <slot />
    </div>

    <TheFooter />
  </div>
</template>
