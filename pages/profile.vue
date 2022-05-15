<template>
  <div class="flex justify-center">
    <div class="container grid md:grid-cols-4">
      <div class="col-span-1">
        <ProfileToolbar class="md:border rounded-2xl md:pb-4"></ProfileToolbar>
        <ProfileMenu class="md:border rounded-2xl mt-8 md:mt-4"></ProfileMenu>
      </div>
    </div>
  </div>
</template>

<script>
import ProfileMenu from "../components/profile/ProfileMenu";
import ProfileToolbar from "../components/profile/ProfileToolbar";
export default {
  name: "profile",
  components: {ProfileToolbar, ProfileMenu}
}
</script>

<style scoped>

</style>
