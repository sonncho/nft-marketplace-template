<template>
  <header>
    <div class="container mx-auto px-2 :md:px-4">
      <nav class="navbar">
        <div class="nabar-brand mr-12 flex-shrink-0">
          <router-link to="/" class="logo">
            <img
              class="inline-block mr-3 align-middle"
              src="https://flowbite.com/docs/images/logo.svg"
              alt="logo"
            />
            <span class="font-bold text-2xl">LOGO</span>
          </router-link>
        </div>

        <div class="search-form">
          <input
            type="text"
            placeholder="Search Items, collections, and accounts"
            v-model="searchVal"
          />
          <span class="search-icon">
            <MagnifyingGlassIcon class="h-8 w-5 icon" />
          </span>
        </div>

        <ul class="navbar-nav">
          <li class="nav-item">
            <RouterLink to="/" class="nav-link">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/about" class="nav-link">Explore</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink to="/stats" class="nav-link">Stats</RouterLink>
            <!-- <ul class="nav-sub-item">
              <li class="nav-sub-link">
                <RouterLink to="/stats">subItem1</RouterLink>
              </li>
              <li class="nav-sub-link">
                <RouterLink to="/stats">subItem</RouterLink>
              </li>
              <li class="nav-sub-link">
                <RouterLink to="/stats">subItem</RouterLink>
              </li>
            </ul> -->
          </li>
          <li class="nav-item">
            <RouterLink to="/admin" class="nav-link">Resources</RouterLink>
          </li>
          <!-- <li><RouterLink to="/admin">Admin</RouterLink></li> -->
          <s-button @click="onClickButton" variant="link">
            <UserCircleIcon class="h-8 w-8" />
          </s-button>
          <s-button @click="onClickButton" variant="link">
            <WalletIcon class="h-8 w-8" />
          </s-button>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { reactive } from 'vue';
import SButton from '/@compo/buttons/SButton.vue';
// import SInput from '/@/components/forms/SInput.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { UserCircleIcon, WalletIcon } from '@heroicons/vue/24/outline';

export default {
  components: { SButton, MagnifyingGlassIcon, UserCircleIcon, WalletIcon },
  name: 'TheNavbar',
  setup() {
    const searchVal = '';

    const onClickButton = () => {
      console.log('clicked!!');
    };
    const onsubmitSearch = () => {
      console.log('change input!!');
    };

    const result = reactive({
      searchVal,
      onClickButton,
      onsubmitSearch,
    });
    return result;
  },
};
</script>
