<template>
  <div class="p-4 space-y-4">
    <PageHeader title="User">
      <button
        @click="showTooogle"
        class="mr-8 border border-gray-300 rounded-[3px] bg-dark-header text-white px-5 py-2 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-3 justify-end"
      >
        <span>Add</span>
        <i class="fa fa-user"></i>
      </button>
    </PageHeader>

    <div class="px-4 sm:px-6 lg:px-8">
      <div class="mt-8 flow-root">
        <div class="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"
          >
            <div class="relative text-gray-600 mb-5">
              <input
                type="search"
                name="serch"
                placeholder="Search"
                class="bg-white h-10 px-5 pr-10 rounded-[4px] text-sm focus:outline-none"
                v-model="filter"
              />
            </div>
            <table
              class="min-w-full divide-y divide-gray-300 border border-gray-100 bg-white dark:bg-dark-header"
            >
              <thead>
                <tr
                  v-for="headerGroup in table.getHeaderGroups()"
                  :key="headerGroup.id"
                >
                  <th
                    v-for="header in headerGroup.headers"
                    :key="header.id"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900 dark:text-[#9ca3af] dark:font-semibold"
                    :class="{
                      'cursor-pointer select-none': header.column.getCanSort(),
                    }"
                    @click="header.column.getToggleSortingHandler()?.($event)"
                  >
                    <FlexRender
                      :render="header.column.columnDef.header"
                      :props="header.getContext()"
                    />
                    {{ { asc: "↑", desc: "↓" }[header.column.getIsSorted()] }}
                  </th>
                </tr>
              </thead>

              <tbody class="divide-y divide-gray-200">
                <tr
                  v-for="row in table.getRowModel().rows"
                  :key="row.id"
                  class="dark:hover:bg-dark-body hover:bg-gray-200"
                >
                  <td
                    v-for="cell in row.getVisibleCells()"
                    :key="cell.id"
                    class="whitespace-nowrap px-3 py-4 text-sm text-black dark:text-[#9ca3af]"
                  >
                    <FlexRender
                      :render="cell.column.columnDef.cell"
                      :props="cell.getContext()"
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div class="flex flex-col justify-start gap-4">
          <div class="mt-8">
            Page {{ table.getState().pagination.pageIndex + 1 }} of
            {{ table.getPageCount() }} -
            {{ table.getFilteredRowModel().rows.length }} results
          </div>

          <div class="flex gap-4">
            <button
              class="border border-gray-300 rounded-[3px] bg-dark-header text-white px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              @click="table.setPageIndex(0)"
            >
              First Page
            </button>
            <button
              class="border border-gray-300 rounded-[3px] bg-dark-header text-white px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              @click="table.setPageIndex(table.getPageCount() - 1)"
            >
              Last Page
            </button>
            <button
              class="border border-gray-300 rounded-[3px] bg-dark-header text-white px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!table.getCanPreviousPage()"
              @click="table.previousPage()"
            >
              Prev page
            </button>
            <button
              class="border border-gray-300 rounded-[3px] bg-dark-header text-white px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!table.getCanNextPage()"
              @click="table.nextPage()"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>

    <!-- Templates -->
    <div class="">
      <div class="w-sreen h-full absolute inset-0 backdrop-brightness-50"></div>
      <div class="w-2/2 container my-20 px-4 lg:px-20 absolute right-0">
        <div
          class="p-4 my-2 md:px-12 lg:w-9/12 lg:pl-20 lg:pr-40 mr-auto rounded-2xl shadow-2xl bg-white relative">
          <button class="absolute top-2.5 right-1 ml-16">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6 text-black"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <form @submit.prevent="submitForm">
            <div class="grid gap-6 mb-6 md:grid-cols-2 mt-4">
              <div>
                <label
                  for="name"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Name</label
                >
                <input
                  type="text"
                  id="name"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="columnsPeople.name"
                  placeholder="Enter you name"
                  required
                />
              </div>
              <div>
                <label
                  for="birthDate"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Birth Date</label
                >
                <input
                  type="date"
                  id="birthDate"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  v-model="columnsPeople.birth_date"
                  placeholder="Doe"
                  required
                />
              </div>
              <div>
                <label
                  for="gender"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Gender</label
                >
                <select
                  type="text"
                  v-model="columnsPeople.gender"
                  id="gender"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Male</option>
                  <option value="femele">Female</option>
                </select>
              </div>

              <div>
                <label
                  for="civilStatus"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Civil Status</label
                >
                <select
                  type="text"
                  v-model="columnsPeople.civil_status"
                  id="civilStatus"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Flowbite"
                  required
                >
                  <option value="">Select</option>
                  <option value="male">Single</option>
                  <option value="femele">Married</option>
                  <option value="femele">widowed</option>
                  <option value="femele">Divorced</option>
                </select>
              </div>

              <div>
                <label
                  for="phone"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Phone</label
                >
                <input
                  type="tel"
                  v-model="columnsPeople.phone"
                  id="phone"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="+555 8383847834"
                  pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}"
                  required
                />
              </div>

              <div>
                <label
                  for="email"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Email</label
                >
                <input
                  type="email"
                  id="email"
                  v-model="columnsPeople.email"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="frontend@gmail.com"
                  required
                />
              </div>

              <div>
                <label
                  for="nationality"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Nacionality</label
                >
                <input
                  type="text"
                  id="nationality"
                  v-model="columnsPeople.nationality"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder=""
                  required
                />
              </div>

              <div>
                <label
                  for="birthPlace"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >birth Place</label
                >
                <input
                  type="text"
                  id="birthPlace"
                  v-model="columnsPeople.birth_Place"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter birth place"
                  required
                />
              </div>

              <div>
                <label
                  for="address"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Address</label
                >
                <input
                  type="text"
                  id="address"
                  v-model="columnsPeople.address"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter you address"
                  required
                />
              </div>

              <div>
                <label
                  for="password"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >Password</label
                >
                <input
                  type="text"
                  id="password"
                  v-model="columnsPeople.role"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  placeholder="Enter Password"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import people from "@/mockDataPeople.json";
import { ref, h } from "vue";
// import { format } from "date-fns";

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";
import EditButtonsVueVue from "../EditButtonsVue.vue";

const hiddenToogle = ref(false);

const showTooogle = () => {
  hiddenToogle.value = !hiddenToogle.value;
};

const data = ref(people);
const columnsPeople = [
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
  },
  {
    accessorKey: "name",
    header: "Name",
  },

  {
    accessorKey: "birth_date",
    header: "Birth Date",
  },

  {
    accessorKey: "gender",
    header: "Gender",
  },
  {
    accessorKey: "civil_status",
    header: "Civil Status",
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "phone",
    header: "Phone",
  },
  {
    accessorKey: "nationality",
    header: "Nacionality",
  },
  {
    accessorKey: "birth_Place",
    header: "Birth Place",
  },
  {
    accessorKey: "address",
    header: "Address",
  },

  {
    accessorKey: "role",
    header: "Role",
  },

  // {
  //   accessorKey: "created_at",
  //   header: "Created",
  //   cell: (info) => format(new Date(info.getValue()), "MMM d, yyyy"),
  // },

  {
    accessorKey: "edit",
    header: "Options",
    cell: ({ row }) => h(EditButtonsVueVue, { id: row.original.id }),
    enableSorting: false,
  },
];

const sorting = ref([]);
const filter = ref("");

const table = useVueTable({
  data: data.value,
  columns: columnsPeople,
  getCoreRowModel: getCoreRowModel(),
  getPaginationRowModel: getPaginationRowModel(),
  getSortedRowModel: getSortedRowModel(),
  getFilteredRowModel: getFilteredRowModel(),
  state: {
    get sorting() {
      return sorting.value;
    },

    get globalFilter() {
      return filter.value;
    },
  },

  onSortingChange: (updateOrValue) => {
    sorting.value =
      typeof updateOrValue === "function"
        ? updateOrValue(sorting.value)
        : updateOrValue;
  },
  initialState: {
    pagination: {
      pageSize: 8,
    },
  },
});
</script>
