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
            ref="searchInput"
            type="text"
            placeholder="Search Items, collections, and accounts"
            @keydown="handleFocus"
            v-model="searchVal"
          />
          <span class="search-icon">
            <MagnifyingGlassIcon class="h-8 w-5 icon" />
          </span>
        </div>

        <div class="navbar-nav">
          <s-nav-dropdown title="Explore" to="/collections">
            <s-dropdown-item to="/assets" icon="QueueListIcon">All NFTs</s-dropdown-item>
            <s-dropdown-item to="/category/art" icon="PaintBrushIcon">Art</s-dropdown-item>
            <s-dropdown-item to="/category/music" icon="MusicalNoteIcon">Music</s-dropdown-item>
          </s-nav-dropdown>
          <s-nav-dropdown title="Stats" to="/ranking">
            <s-dropdown-item to="/ranking">Ranking</s-dropdown-item>
          </s-nav-dropdown>
          <s-nav-dropdown title="Resources" to="/">
            <s-dropdown-item to="/">Learn</s-dropdown-item>
          </s-nav-dropdown>

          <s-button @click="onClickButton" variant="link">
            <UserCircleIcon class="h-8 w-8" />
          </s-button>
          <s-button @click="onClickButton" variant="link">
            <WalletIcon class="h-8 w-8" />
          </s-button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { reactive } from 'vue';
import SButton from '/@compo/buttons/SButton.vue';
// import SInput from '/@/components/forms/SInput.vue';
import SDropdown from '/@compo/dropdown/SDropdown.vue';
import SNavDropdown from '/@compo/dropdown/SNavDropdown.vue';
import SDropdownItem from '/@compo/dropdown/SDropdownItem.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { UserCircleIcon, WalletIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    SButton,
    SDropdown,
    SNavDropdown,
    SDropdownItem,
    MagnifyingGlassIcon,
    UserCircleIcon,
    WalletIcon,
  },
  name: 'TheNavbar',
  setup() {
    const searchVal = '';
    const onClickButton = () => {
      console.log('clicked!!');
    };
    const onsubmitSearch = () => {
      console.log('change input!!');
    };
    const onKeydown = (e) => {
      console.log(e);
    };
    const result = reactive({
      searchVal,
      onClickButton,
      onsubmitSearch,
      onKeydown,
    });
    return result;
  },
};
</script>
