<template>
  <div :dir="$dir()">
    <Header class="hidden md:block sticky top-0 bg-white z-30"></Header>
    <nuxt class="mb-20 md:mb-0"/>
    <Footer class="hidden md:block mt-16"></Footer>
    <BottomNavigation class="md:hidden"></BottomNavigation>
  </div>
</template>
<script>
import Header from "./Header";
import BottomNavigation from "../components/common/BottomNavigation";
import Footer from "./Footer";

export default {
  components: {BottomNavigation, Header, Footer}
}
</script>
