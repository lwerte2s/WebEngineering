import tab1 from "./tab.js"

const vm = new Vue({
    el: "#menu",
    data: {
        currentTab: "tab1",
        tabs: ["tab1","tab2","tab3","tab4"]
    },
    computed: {
        currentTabComponent: function (){
            return "tab-"+this.currentTab;
        }
    },
    components:{
        tab1
    }
});