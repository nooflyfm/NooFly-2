<template>
  <div>
    <div class="main">
      <h3 class="page-title">{{ page_title }}</h3>
      <div class="main-content">
        <div>
            <el-row :gutter="24">
               <el-col :span="24">
                   <div class="card mb-4">
                        <div class="card-body">
                            <el-skeleton style="width: 100%" :loading="loading" animated>
                                <template slot="template">
                                    <el-skeleton :rows="7" />
                                </template>
                                <template>
                                    <el-button type="primary" class="mb-2" icon="el-icon-plus" @click="cellClickNew()">Add New</el-button>
                                    <el-table :data="items" border stripe style="width: 100%" @sort-change="filterChange">
                                        <el-table-column label="Name" prop="name" sortable="custom"></el-table-column>
                                        <el-table-column label="Balance" prop="current_balance" sortable="custom">
                                            <template slot-scope="scope">
                                                {{ scope.row.curr_symbol }}{{ scope.row.current_balance }}
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="Active?" prop="active" sortable="custom">
                                            <template slot-scope="scope">
                                                <el-tag v-if="scope.row.active == '1'" type="success" style="cursor: pointer;" @click="toggleActive(scope.row, '0')"><i class="el-icon-circle-check"></i></el-tag>
                                                <el-tag v-else type="danger" style="cursor: pointer;" @click="toggleActive(scope.row, '1')"><i class="el-icon-circle-close"></i></el-tag>
                                            </template>
                                        </el-table-column>
                                        <el-table-column label="In Budget?" prop="in_budget" sortable="custom">
                                            <template slot-scope="scope">
                                                <el-tag v-if="scope.row.in_budget == '1'" type="success" style="cursor: pointer;" @click="toggleBudget(scope.row, '0')"><i class="el-icon-circle-check"></i></el-tag>
                                                <el-tag v-else type="danger" style="cursor: pointer;" @click="toggleBudget(scope.row, '1')"><i class="el-icon-circle-close"></i></el-tag>
                                            </template>
                                        </el-table-column>

                                        <el-table-column label="Actions" align="right" width="240">
                                            <template slot-scope="scope">
                                                <el-button type="warning" @click="gotoEdit(scope.row)" icon="el-icon-edit"></el-button>
                                                <el-popconfirm
                                                    cancelButtonText='No'
                                                    confirmButtonText='Yes'
                                                    title="Delete cash?"
                                                    @confirm="removeItem(scope.row)"
                                                    @onConfirm="removeItem(scope.row)"
                                                >
                                                    <el-button slot="reference" type="danger" class="ml-2" icon="el-icon-delete"></el-button>
                                                </el-popconfirm>
                                            </template>
                                        </el-table-column>
                                    </el-table>
                                    <el-pagination
                                        v-if="!loading"
                                        class="pagination mt-3"
                                        background
                                        layout="prev, pager, next"
                                        :page-size="limit"
                                        :total="totalElements"
                                        :current-page.sync="number"
                                        @current-change="setCurrentPage"
                                    >
                                    </el-pagination>
                                </template>
                            </el-skeleton>
                        </div>
                   </div>
               </el-col>
            </el-row>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CashesList',
  props: ['homeurl'],
  data() {
    return {
      loading: true,
      page_title: 'Cashes',
      items: [],
      limit: 20,
      offset: 0,
      totalElements: 0,
      number: 0,
      search: '&sort=id__ASC',
    };
  },
  components: {
  },
  methods: {
    async getData() {
      try {
        const {data} = await axios.get(`${this.homeurl}/cashes/data/?limit=${this.limit}&offset=${this.offset}${this.search}`)
        this.items = data.items;
        this.totalElements = data.total;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
    async toggleActive(row, activ) {
        try {
            await axios.put(`${this.homeurl}/edit/cash/active/${row.id}`, {
              active: activ,
            })
            row.active = activ
            this.$notify.success({
                title: 'Activity changed!',
            })
        } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application Error!',
            });
      }
    },
    async toggleBudget(row, stts) {
        try {
            await axios.put(`${this.homeurl}/edit/cash/budget/${row.id}`, {
              in_budget: stts,
            })
            row.in_budget = stts
            this.$notify.success({
                title: 'Budget status changed!',
            })
        } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application Error!',
            });
      }
    },
    async removeItem(row) {
      try {
        await axios.delete(`${this.homeurl}/remove/cash/${row.id}`)
        var rowIndex = this.items.indexOf(row);
        this.items.splice(rowIndex, 1);
        this.$notify.success({
            title: 'Cash Deleted!',
        });
      } catch (e) {
          this.loading = true;
          this.$notify.error({
              title: 'Application error!',
          });
      }
    },
    async setCurrentPage(page) {
      this.number = page
      this.offset = ((this.number - 1) * this.limit);
      await this.getData();
    },
    filterChange (row) {
      if (row.order === 'ascending') {
        this.search = `&sort=${row.prop}__DESC`
      } else if (row.order === 'descending') {
        this.search = `&sort=${row.prop}__ASC`
      } else {
        this.search = ''
      }
    },
    cellClickNew() {
      this.$router.push({name: 'AddCash'})
    },
    gotoEdit(row) {
      this.$router.push({name: 'EditCash', params: {id: row.id}})
    },
  },
  watch: {
    async search() {
      await this.getData()
    },
  },
  async mounted() {
    await this.getData()
    this.loading = false
  },
}
</script>

<style lang="scss" scoped>
  .el-row {
    margin-bottom: 10px;
    &:last-child {
      margin-bottom: 0;
    }
  }
</style>
