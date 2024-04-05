<template>
  <div>
   
    <header>
      <slot name="header">Default Header</slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer">Default Footer</slot>
    </footer>
  </div>
</template>