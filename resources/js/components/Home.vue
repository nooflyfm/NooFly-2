<template>
  <div>
    <div class="main">
      <h3 class="page-title">{{ page_title }}</h3>
      <div class="main-content">
        <div>
          <el-row :gutter="24">
              <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="mb-4">
                  <div class="card bg-white">
                      <div class="card-header bg-success text-white">
                          Active Cashes
                      </div>
                      <el-skeleton style="width: 100%" :loading="loading" animated>
                          <template slot="template">
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;">
                                      <el-skeleton-item variant="h1" />
                                  </span>
                              </div>
                          </template>
                          <template>
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;" class="text-primary"><i class="el-icon-bank-card"></i>&nbsp;{{ stat_counts.cashes }}</span>
                              </div>
                          </template>
                      </el-skeleton>
                  </div>
              </el-col>
              <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="mb-4">
                  <div class="card bg-white">
                      <div class="card-header bg-success text-white">
                          All Transactions
                      </div>
                      <el-skeleton style="width: 100%" :loading="loading" animated>
                          <template slot="template">
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;">
                                      <el-skeleton-item variant="h1" />
                                  </span>
                              </div>
                          </template>
                          <template>
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;" class="text-danger"><i class="el-icon-sort"></i>&nbsp;{{ stat_counts.transactions }}</span>
                              </div>
                          </template>
                      </el-skeleton>
                  </div>
              </el-col>
              <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="mb-4">
                  <div class="card bg-white">
                      <div class="card-header bg-success text-white">
                          Active Piggybanks
                      </div>
                      <el-skeleton style="width: 100%" :loading="loading" animated>
                          <template slot="template">
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;">
                                      <el-skeleton-item variant="h1" />
                                  </span>
                              </div>
                          </template>
                          <template>
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;" class="text-warning"><i class="el-icon-coin"></i>&nbsp;{{ stat_counts.piggybanks }}</span>
                              </div>
                          </template>
                      </el-skeleton>
                  </div>
              </el-col>
              <el-col :span="6" :xs="24" :sm="24" :md="12" :lg="6" :xl="6" class="mb-4">
                  <div class="card bg-white">
                      <div class="card-header bg-success text-white">
                          Active Currencies
                      </div>
                      <el-skeleton style="width: 100%" :loading="loading" animated>
                          <template slot="template">
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;">
                                      <el-skeleton-item variant="h1" />
                                  </span>
                              </div>
                          </template>
                          <template>
                              <div class="card-body" style="text-align: center;">
                                  <span style="font-size: 50px;" class="text-secondary"><i class="el-icon-eleme"></i>&nbsp;{{ stat_counts.currencies }}</span>
                              </div>
                          </template>
                      </el-skeleton>
                  </div>
              </el-col>
          </el-row>
          <el-row :gutter="24" class="mb-4">
              <el-col :span="24">
                  <div class="card">
                      <div class="card-header bg-success text-white">
                          Amounts of popular transactions categories
                      </div>
                      <div class="card-body">
                          <el-skeleton style="width: 100%" :loading="loading" animated>
                              <template slot="template">
                                  <el-skeleton :rows="12" />
                              </template>
                              <template>
                                      <bar-chart :height="400" :chart-data="categories_data"></bar-chart>
                              </template>
                          </el-skeleton>
                      </div>
                  </div>
              </el-col>
          </el-row>
          <el-row :gutter="24" class="mb-4">
              <el-col :span="24">
                  <div class="card">
                      <div class="card-header bg-success text-white">
                          Active cashes balances history
                      </div>
                      <div class="card-body">
                          <el-skeleton style="width: 100%" :loading="loading" animated>
                              <template slot="template">
                                  <el-skeleton :rows="5" />
                              </template>
                              <template>
                                  <el-table :data="cashes_balances" border stripe style="width: 100%">
                                      <el-table-column label="Currency" prop="currency">
                                          <template slot-scope="scope">
                                              {{ scope.row.currency }}
                                          </template>
                                      </el-table-column>
                                      <el-table-column label="Cash" prop="name"></el-table-column>
                                      <el-table-column label="Date" prop="date"></el-table-column>
                                      <el-table-column label="Balance" prop="balance">
                                          <template slot-scope="scope">
                                              {{ scope.row.symbol }}{{ scope.row.balance }}
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
          <el-row :gutter="24" class="mb-4">
              <el-col :span="24">
                  <div class="card" v-if="piggybanks.length > 0">
                      <div class="card-header bg-success text-white">
                          Active piggybanks statuses
                      </div>
                      <div class="card-body">
                          <el-skeleton style="width: 100%" :loading="loading" animated>
                              <template slot="template">
                                  <el-skeleton :rows="3" />
                              </template>
                              <template>
                              <el-row :gutter="24" v-for="item in piggybanks" :key="item.id">
                                  <span>{{ item.name }}</span>
                                  <div class="progress">
                                      <div class="progress-bar" role="progressbar" :style="'width: ' + item.percent + '%;'" :aria-valuenow="item.percent" aria-valuemin="0" aria-valuemax="100">{{ item.balance }}</div>
                                  </div>
                              </el-row>
                              </template>
                          </el-skeleton>
                      </div>
                  </div>
              </el-col>
          </el-row>
          <el-row :gutter="24" class="mb-4">
              <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mb-4">
                  <div class="card mb-4">
                      <div class="card-header bg-success text-white">
                          Money amounts in active currencies
                      </div>
                      <div class="card-body">
                          <el-skeleton style="width: 100%" :loading="loading" animated>
                              <template slot="template">
                                  <el-skeleton :rows="6" />
                              </template>
                              <template>
                                  <el-table :data="cashes_amounts" border stripe style="width: 100%">
                                      <el-table-column label="Currency" prop="currency"></el-table-column>
                                      <el-table-column label="Amount" prop="summ"></el-table-column>
                                  </el-table>
                              </template>
                          </el-skeleton>
                      </div>
                  </div>
              </el-col>
              <el-col :span="12" :xs="24" :sm="24" :md="12" :lg="12" :xl="12" class="mb-4">
                  <div class="card">
                      <div class="card-header bg-success text-white">
                          Active cashes balances
                      </div>
                      <div class="card-body">
                          <el-skeleton style="width: 100%" :loading="loading" animated>
                              <template slot="template">
                                  <el-skeleton :rows="8" />
                              </template>
                              <template>
                                  <el-table :data="cashes" border stripe style="width: 100%">
                                      <el-table-column label="Name" prop="name"></el-table-column>
                                      <el-table-column label="Balance" prop="current_balance">
                                          <template slot-scope="scope">
                                              {{ scope.row.curr_symbol }}{{ scope.row.current_balance }}
                                          </template>
                                      </el-table-column>
                                  </el-table>
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
import LineChart from "./assets/LineChart"
import BarChart from "./assets/BarChart"

export default {
  name: 'Home',
  props: ['homeurl'],
  data() {
    return {
      loading: true,
      page_title: 'Dashboard',
      stat_counts: [],
      balances: [],
      cashes_balances: [],
      limit: 5,
      offset: 0,
      totalElements: 0,
      number: 0,
      search: '&sort=id__ASC',
      piggybanks: [],
      cashes_amounts: [],
      categories_data: {},
      cashes: [],
    };
  },
  components: {
    LineChart,
    BarChart
  },
  methods: {
    async getCounts() {
      try {
        const {data} = await axios.get(`${this.homeurl}/stat/counts`)
        this.stat_counts = data.items;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
    async getCashesBalances() {
      try {
        const {data} = await axios.get(`${this.homeurl}/stat/balances/data/?limit=${this.limit}&offset=${this.offset}&sort=${this.search}`)
        this.cashes_balances = data.items;
        this.totalElements = data.total;
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
      await this.getCashesBalances();
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
    async getPiggybanks() {
      try {
        const {data} = await axios.get(`${this.homeurl}/piggybanks/data/?limit=5000&offset=0&active=1`)
        this.piggybanks = data.items;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
    async getAmounts() {
      try {
        const {data} = await axios.get(`${this.homeurl}/stat/amounts/data`)
        this.cashes_amounts = data.items;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
    async getTransactionsCategories() {
      try {
        const {data} = await axios.get(`${this.homeurl}/stat/categories/data`)
        this.categories_data = {
          labels: data.items.labels,
          datasets: data.items.datasets
        }
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
    async getCashes() {
      try {
        const {data} = await axios.get(`${this.homeurl}/cashes/data/?limit=5000&offset=0&active=1`)
        this.cashes = data.items;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
  },
  watch: {
    async search() {
      await this.getCashesBalances()
    },
  },
  async mounted() {
    await this.getCashesBalances()
    await this.getCounts()
    await this.getPiggybanks()
    await this.getAmounts()
    await this.getTransactionsCategories()
    await this.getCashes()
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
