<template>
    <div class="sidebar">
        <el-menu class="sidebar-el-menu" :default-active="onRoutes" :collapse="sidebar.collapse" background-color="#324157"
            text-color="#bfcbd9" active-text-color="#20a0ff" unique-opened router>
            <template v-for="item in items">
                <template v-if="item.subs">
                    <el-sub-menu :index="item.index" :key="item.index">
                        <template #title>
                            <el-icon>
                                <component :is="item.icon"></component>
                            </el-icon>
                            <span>{{ item.title }}</span>
                        </template>
                        <template v-for="subItem in item.subs">
                            <el-sub-menu v-if="subItem.subs" :index="subItem.index" :key="subItem.index">
                                <template #title>{{ subItem.title }}</template>
                                <el-menu-item v-for="(threeItem, i) in subItem.subs" :key="i" :index="threeItem.index">
                                    {{ threeItem.title }}
                                </el-menu-item>
                            </el-sub-menu>
                            <el-menu-item v-else :index="subItem.index">
                                {{ subItem.title }}
                            </el-menu-item>
                        </template>
                    </el-sub-menu>
                </template>
                <template v-else>
                    <el-menu-item :index="item.index" :key="item.index">
                        <el-icon>
                            <component :is="item.icon"></component>
                        </el-icon>
                        <template #title>{{ item.title }}</template>
                    </el-menu-item>
                </template>
            </template>
        </el-menu>
    </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { useSidebarStore } from '../store/sidebar';
import { useRoute } from 'vue-router';

const items = [
    // {
    //     icon: 'Odometer',
    //     index: '/dashboard',
    //     title: '系统首页',
    // },
    {
        icon: 'MostlyCloudy',
        index: '/imp',
        title: '影像中心',
    },
    {
        icon: 'Menu',
        index: '',
        title: '维度管理',
        subs: [
            {
                index: '/dimension/bodypart',
                title: '身体部位',
            },
            {
                index: '/dimension/organ',
                title: '器官',
            },
            {
                index: '/dimension/scantype',
                title: '扫描类型',
            },
        ],
    },
    {
        icon: 'CollectionTag',
        index: '/statistics',
        title: '统计中心',
    },
    {
        icon: 'User',
        index: '/admin/user',
        title: '用户管理',
    },
    {
        icon: 'Lock',
        index: '/admin/permissions',
        title: '权限管理',
    },
    // {
    //     icon: 'Calendar',
    //     index: '1',
    //     title: '表格相关',
    //     permiss: '2',
    //     subs: [
    //         {
    //             index: '/table',
    //             title: '常用表格',
    //             permiss: '2',
    //         },
    //         {
    //             index: '/import',
    //             title: '导入Excel',
    //             permiss: '2',
    //         },
    //         {
    //             index: '/export',
    //             title: '导出Excel',
    //             permiss: '2',
    //         },
    //     ],
    // },
    // {
    //     icon: 'DocumentCopy',
    //     index: '/tabs',
    //     title: 'tab选项卡',
    //     permiss: '3',
    // },
    // {
    //     icon: 'Edit',
    //     index: '3',
    //     title: '表单相关',
    //     permiss: '4',
    //     subs: [
    //         {
    //             index: '/form',
    //             title: '基本表单',
    //             permiss: '5',
    //         },
    //         {
    //             index: '/upload',
    //             title: '文件上传',
    //             permiss: '6',
    //         },
    //         {
    //             index: '4',
    //             title: '三级菜单',
    //             permiss: '7',
    //             subs: [
    //                 {
    //                     index: '/editor',
    //                     title: '富文本编辑器',
    //                     permiss: '8',
    //                 },
    //                 {
    //                     index: '/markdown',
    //                     title: 'markdown编辑器',
    //                     permiss: '9',
    //                 },
    //             ],
    //         },
    //     ],
    // },
    // {
    //     icon: 'Setting',
    //     index: '/icon',
    //     title: '自定义图标',
    //     permiss: '10',
    // },
    // {
    //     icon: 'PieChart',
    //     index: '/charts',
    //     title: 'schart图表',
    //     permiss: '11',
    // },
    // {
    //     icon: 'Warning',
    //     index: '/permission',
    //     title: '权限管理',
    //     permiss: '13',
    // },
    // {
    //     icon: 'CoffeeCup',
    //     index: '/donate',
    //     title: '支持作者',
    //     permiss: '14',
    // },
];

const route = useRoute();
const onRoutes = computed(() => {
    return route.path;
});

const sidebar = useSidebarStore();
</script>

<style scoped>
.sidebar {
    display: block;
    position: absolute;
    left: 0;
    top: 70px;
    bottom: 0;
    overflow-y: scroll;
}

.sidebar::-webkit-scrollbar {
    width: 0;
}

.sidebar-el-menu:not(.el-menu--collapse) {
    width: 250px;
}

.sidebar>ul {
    height: 100%;
}
</style>
