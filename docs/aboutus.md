---
layout: page
---
<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers
} from 'vitepress/theme'

const members = [
  {
    avatar: 'https://www.github.com/s80808080x.png',
    name: '80808080',
    title: '腐竹',
    links: [
      { icon: 'github', link: 'https://github.com/s80808080' }
    
    ]
  },
  {
    avatar: 'https://www.github.com/.png',
    name: '',
    title: '',
    links: [
      { icon: 'github', link: 'https://github.com/' }
    ]
  },
]
</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>
      关于我们
    </template>
    <template #lead>
      这是我们的管理团队，他们负责整个服务器和网站的管理与维护
    </template>
  </VPTeamPageTitle>
  <VPTeamMembers
    size="medium"
    :members="members"
  />
</VPTeamPage>