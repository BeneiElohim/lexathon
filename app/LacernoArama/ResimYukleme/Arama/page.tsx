import React from 'react';
import data from '@/data.json';
import { Item } from '@/types/types';
import SearchResult from '@/components/SearchResult';

export default function Home() {
  return <SearchResult items={data.items as Item[]} />;
}
