import type { CreateSeoMetaParams } from '@/types/Seo';

export const createSeoMeta = (params: CreateSeoMetaParams) => ({
    title:       params.title,
    description: params.description || '',
});
