<template>
  <header>
    <div class="container mx-auto px-2 :md:px-4">
      <nav class="navbar">
        <div class="nabar-brand mr-12 flex-shrink-0">
          <router-link to="/" class="logo">
            <img class="inline-block mr-3 align-middle" src="https://flowbite.com/docs/images/logo.svg" alt="logo" />
            <span class="font-bold text-2xl">GANO</span>
          </router-link>
        </div>

        <div class="search-form">
          <input ref="searchInput" type="text" placeholder="Search Items, collections, and accounts" @keydown="handleFocus" v-model="searchVal" />
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

          <s-nav-dropdown type="button" icon="UserCircleIcon" to="/accounts">
            <s-dropdown-item>hi?</s-dropdown-item>
            <li class="dropdown-item">
              <label class="switch" for="switchCheck">
                <input type="checkbox" name="switch" id="switchCheck" />
                <span></span>
              </label>
            </li>
          </s-nav-dropdown>
          <s-button @click="onClickButton" variant="link">
            <WalletIcon class="stroke-2 h-8 w-8" />
          </s-button>
          <s-button @click="onClickButton" variant="link">
            <ShoppingBagIcon class="stroke-2 h-8 w-8" />
          </s-button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { reactive } from 'vue';
import SButton from '/@compo/buttons/SButton.vue';
import SCheckbox from '/@compo/forms/SCheckbox.vue';
import SNavDropdown from '/@compo/dropdown/SNavDropdown.vue';
import SDropdownItem from '/@compo/dropdown/SDropdownItem.vue';
import { MagnifyingGlassIcon } from '@heroicons/vue/24/solid';
import { ShoppingBagIcon, UserCircleIcon, WalletIcon } from '@heroicons/vue/24/outline';

export default {
  components: {
    SButton,
    SCheckbox,
    SNavDropdown,
    SDropdownItem,
    MagnifyingGlassIcon,
    UserCircleIcon,
    WalletIcon,
    ShoppingBagIcon,
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
    const isChecked = false;
    const result = reactive({
      searchVal,
      onClickButton,
      onsubmitSearch,
      onKeydown,
      isChecked,
    });
    return result;
  },
};
</script>
