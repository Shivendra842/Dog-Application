<template>
    <div id="footer">
        <v-card height="150">
        <v-footer
        absolute
        class="font-weight-medium">
        <v-col
        class="text-center" 
        color="red "
        cols="12">Dogs @{{new Date().getFullYear()}}
        </v-col>
        </v-footer>
        </v-card>
    </div>
</template>

<script>
export default {
    
    name:"appFooter"
    
}
</script>

<style  scoped>

</style>