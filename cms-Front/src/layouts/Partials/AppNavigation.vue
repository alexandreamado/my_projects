<template>
  <ul class="text-sm bg-white">
    <li
      class="text-black text-[16px] bg-white dark:bg-dark-header dark:text-white"
      v-for="navigation in navigations"
      :key="navigation.name"
      :class="{ 'bg-white dark:bg-dark-body': isActive(navigation) }"
    >
      <div class="cursor-pointer" @click="clickNavigation(navigation)">
        <div
          class="pl-5 pr-2 py-3 flex items-center"
          :class="{
            'justify-between': hasChild(navigation),
          }"
        >
          <div @click="showToogleMenuOne">
            <span>
              <i class="mr-3 shrink-0 w-6" :class="navigation.icon"></i>
            </span>
            <span>{{ navigation.label }}</span>
          </div>
          <span v-if="hasChild(navigation)" >
            <i
              class="mr-3 shrink-0 w-6 fas fa-chevron-right"
              v-if="navigation.active"
            ></i>
            <i class="mr-3 shrink-0 w-6 fas fa-chevron-down" v-else></i>
          </span>
        </div>
      </div>

      <div v-if="hasChild(navigation)">
        <ul v-if="toogleMenuOne">
          <li
            class="text-black hover:text-white dark:text-white hover:bg-darken-primary dark:hover:bg-black cursor-pointer"
            v-for="child in navigation.children"
            :key="child.name"
          >
            <div class="pl-10 pr-2 py-2 flex items-center" >
              <span>
                <i class="mr-3 shrink-0 w-4" :class="child.icon"></i>
              </span>
              <span>{{ child.label }}</span>
            </div>
          </li>
        </ul>
      </div>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AppNavigation",
};
</script>

<script setup>
import { useRouter } from "vue-router";
import { ref } from "vue";

const router = useRouter();
const toogleMenuOne = ref(false);

const showToogleMenuOne = () => {
  toogleMenuOne.value = !toogleMenuOne.value;
};

const navigations = [
  {
    icon: "fas fa-home",
    label: "Dashboard",
    name: "Dashboard",
    path: "Dashboard",
  },
  {
    icon: "fas fa-table",
    label: "Table",
    name: "Table",
    path: "Table",
  },

  {
    icon: "fas fa-user",
    label: "User",
    active: true,
    children: [
      {
        icon: "fa-solid fa-chalkboard-user",
        label: "Teacher",
        name: "Teacher",
        path: "Table",
      },

      {
        icon: "fa-solid fa-graduation-cap",
        label: "teacher",
        name: "teacher",
      },
      {
        icon: "fa-solid fa-book",
        label: "student",
        name: "teacher",
      },
      {
        icon: "fa-solid fa-layer-group",
        label: "role",
        name: "teacher",
      },
    ],
  },
];

const clickNavigation = (navigation) => {
  if (hasChild(navigation)) {
    navigation.active = !navigation.active; // Toggle the active state
    return;
  }

  if (hasPath(navigation)) {
    router.push({ name: navigation.path });
  }

  return;
};

const hasPath = (navigation) => {
  return navigation.hasOwnProperty("path") ? true : false;
};

const hasChild = (navigation) => {
  return navigation.hasOwnProperty("children") && navigation.children.length > 0
    ? true
    : false;
};

const isActive = (navigation) => {
  if (navigation.hasOwnProperty("active") && navigation.active) {
    return true;
  }

  return false;
};
</script>
