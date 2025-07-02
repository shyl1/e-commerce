import { useSearch } from 'use-search-react';

export function useProductSearch(data){
  return useSearch({
    data,
    matchType: 'includes',
    fields: ['title' , 'description' , 'category'],
  });
}