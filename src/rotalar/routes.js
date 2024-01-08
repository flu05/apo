import SolIcerik from "@/bilesenler/AltBilesenler/SolIcerik.vue";
import MagazaMenuComponents from "@/veri/MagazaMenuComponents.vue";
import {createRouter,createWebHashHistory} from "vue-router";

export const router=createRouter({

    history:createWebHashHistory(),
    routes:[
        {path:'/',component:SolIcerik},
        {path:'/magaza',component: MagazaMenuComponents},
    ]
})