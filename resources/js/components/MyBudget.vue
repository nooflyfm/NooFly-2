<template>
  <div>
    <div class="main">
      <h3 class="page-title">{{ page_title }}</h3>
      <div class="main-content">
        <div>
            <el-row :gutter="24" class="mb-4">
                <el-col :span="24">
                    <div class="card">
                        <div class="card-header bg-success text-white">
                            Select currency
                        </div>
                        <div class="card-body">
                            <el-skeleton style="width: 100%" :loading="loading" animated>
                                <template slot="template">
                                    <el-skeleton :rows="4" />
                                </template>
                                <template>
                                    <el-select v-model="budgetCurrency" placeholder="Select" @change="redirectToCurrency()">
                                        <el-option
                                            label="Not Selected"
                                            value="">
                                        </el-option>
                                        <el-option
                                            v-for="item in currencies"
                                            :key="item.id"
                                            :label="item.name + ' (' + item.symbol + ')'"
                                            :value="item.id">
                                        </el-option>
                                    </el-select>
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
  name: 'MyBudget',
  props: ['homeurl'],
  data() {
    return {
      loading: true,
      page_title: 'Budget',
      currencies: [],
      budgetCurrency: '',
    };
  },
  components: {
  },
  methods: {
    async getCurrencies() {
      try {
        const {data} = await axios.get(`${this.homeurl}/currencies/data/1`)
        this.currencies = data.items;
      } catch (e) {
            this.loading = true;
            this.$notify.error({
                title: 'Application error!',
            });
      }
    },
    async redirectToCurrency() {
        if (this.budgetCurrency == '') {
            this.$router.push({name: 'MyBudget'})
        } else {
            this.$router.push({name: 'MyBudgetWithCurrency', params: {id: this.budgetCurrency}})
        }
    }
  },
  watch: {
  },
  async mounted() {
    await this.getCurrencies()
    this.loading = false
  }
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
