<template>
    <div id="app">
        <p>直接从state获取 {{$store.state.count}}</p>
        <p>从getter获取 {{$store.getters.getCount}}</p>
        <button @click="add()">+</button>
        <button @click="del()">-</button>
    </div>
</template>

<script>
export default {
    data () {
        return {

        }
    },
    methods: {
        add() {
            this.$store.commit('addCount', 2);
        },
        del() {
            this.$store.commit('delCount', 2);
        }
    }
}
</script>
<style>
</style>