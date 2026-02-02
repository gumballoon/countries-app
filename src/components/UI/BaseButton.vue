<template>
  <button
    class="flex gap-4 bg-element rounded-sm px-8 py-2 hover:cursor-pointer"
  >
    <slot></slot>
  </button>
</template>

<style scoped>
button {
  box-sizing: border-box;
  box-shadow: 0px 1px 4px 2px rgba(0, 0, 0, 0.22);
  transition: all 200ms;
}
button:hover {
  font-weight: 600;
}
</style>
