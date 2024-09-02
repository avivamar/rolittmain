import type { MetadataRoute } from 'next';

import { getBaseUrl } from '@/utils/Helpers';
/**
 * 生成网站地图的函数
 * 该函数返回一个 MetadataRoute.Sitemap 类型的数组，其中包含网站的各个页面的 URL、最后修改日期、更新频率和优先级
 * @return {MetadataRoute.Sitemap} - 包含网站地图信息的数组
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${getBaseUrl()}/`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.7,
    },
    // 在这里添加更多的URL
  ];
}
