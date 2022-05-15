<template>
  <div :dir="$dir()">
    <Header class="hidden md:block sticky top-0 bg-white z-50"></Header>
    <div class="mb-20 md:mb-0 flex justify-center">
      <div class="container grid md:grid-cols-4 md:gap-4">
        <div class="col-span-1 hidden md:block">
          <ProfileToolbar class="md:border rounded-2xl md:pb-4"></ProfileToolbar>
          <ProfileMenu class="md:border rounded-2xl mt-8 md:mt-4"></ProfileMenu>
        </div>
        <div class="md:col-span-3">
          <nuxt/>
        </div>
      </div>
    </div>
    <Footer class="hidden md:block mt-16"></Footer>
    <BottomNavigation class="md:hidden"></BottomNavigation>
  </div>
</template>

<script>
import Footer from "./Footer";
import Header from "./Header";
import ProfileToolbar from "../components/profile/ProfileToolbar";
import ProfileMenu from "../components/profile/ProfileMenu";
import BottomNavigation from "../components/common/BottomNavigation";

export default {
  name: "profile",
  components: {Footer, Header, ProfileToolbar, ProfileMenu, BottomNavigation}
}
</script>

<style scoped>

</style>
