import DefaultTheme from 'vitepress/theme';
import 'viewerjs/dist/viewer.min.css';
import imageViewer from 'vitepress-plugin-image-viewer';
import vImageViewer from 'vitepress-plugin-image-viewer/lib/vImageViewer.vue';
import { useData, useRoute } from 'vitepress';
import { toRefs } from "vue";

export default {
    ...DefaultTheme,
    enhanceApp(ctx) {
        DefaultTheme.enhanceApp(ctx);
        // Register global components, if you don't want to use it, you don't need to add it
        ctx.app.component('vImageViewer', vImageViewer);
        // ...
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = toRefs(useData());
        const route = useRoute();
        imageViewer(route);
    }
};