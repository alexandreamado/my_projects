<template>
  <div class="p-4 space-y-4">
    <PageHeader title="Table">
      <BaseButton class="rounded-[4px] text-white">Add New Item</BaseButton>
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
              class="min-w-full divide-y divide-gray-300 border border-gray-100 bg-white"
            >
              <thead>
                <tr
                  v-for="headerGroup in table.getHeaderGroups()"
                  :key="headerGroup.id"
                >
                  <th
                    v-for="header in headerGroup.headers"
                    :key="header.id"
                    class="px-3 py-3.5 text-left text-sm font-semibold text-gray-900"
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
                <tr v-for="row in table.getRowModel().rows" :key="row.id" class="hover:bg-gray-200">
                  <td
                    v-for="cell in row.getVisibleCells()"
                    :key="cell.id"
                    class="whitespace-nowrap px-3 py-4 text-sm text-black"
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
              class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              @click="table.setPageIndex(0)"
            >
              First Page
            </button>
            <button
              class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              @click="table.setPageIndex(table.getPageCount() - 1)"
            >
              Last Page
            </button>
            <button
              class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!table.getCanPreviousPage()"
              @click="table.previousPage()"
            >
              Prev page
            </button>
            <button
              class="border border-gray-300 rounded px-2 py-2 disabled:opacity-50 disabled:cursor-not-allowed"
              :disabled="!table.getCanNextPage()"
              @click="table.nextPage()"
            >
              Next Page
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import people from "@/mockDataPeople.json";
import { ref, h } from "vue";
import { format } from "date-fns";

import {
  useVueTable,
  FlexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getFilteredRowModel,
} from "@tanstack/vue-table";
import EditButtonsVueVue from "../EditButtonsVue.vue";

const data = ref(people);
const columnsPeople = [
  {
    accessorKey: "id",
    header: "ID",
    enableSorting: false,
  },
  {
    accessorKey: "first_name",
    header: "First name",
  },

  {
    accessorKey: "last_name",
    header: "Last name",
  },

  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "title",
    header: "Title",
  },
  {
    accessorKey: "role",
    header: "Role",
  },

  {
    accessorKey: "created_at",
    header: "Created",
    cell: (info) => format(new Date(info.getValue()), "MMM d, yyyy"),
  },

  {
    accessorKey: "edit",
    header: " ",
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
  // initialState: {
  //   pagination: {
  //     pageSize: 10,
  //   },
  // },
});
</script>
