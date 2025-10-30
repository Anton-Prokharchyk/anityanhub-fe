'use client';

import React, { useState } from 'react';
import Select from '@/components/Select/Select';
import SelectOption from '@/components/SelectOption/SelectOption';
import SelectHandle from '@/components/SelectHandle/SelectHandle';

import styles from './filter.module.scss';

const data: Array<string> = ['1', '2', '3', '4', '5', '6'];
// const filters: {
//   genre: string[];
//   status: string[];
//   type: string[];
//   dub: string[];
// } = { genre: ['1'], status: ['2'], type: ['3'], dub: ['4'] };

const addFiltersHandler = (
  element: string,
  elementsList: string[]
): string[] => {
  const index = elementsList.indexOf(element);
  if (index > -1) {
    elementsList.splice(index, 1);
  } else {
    elementsList.push(element);
  }

  console.log(elementsList);
  return elementsList;
};

export default function Filter() {
  const [filters, setFilters] = useState<{
    genre: string[];
    status: string[];
    type: string[];
    dub: string[];
  }>({
    genre: [],
    status: [],
    type: [],
    dub: [],
  });

  return (
    <div className={styles['filters-wrapper']}>
      <div className={styles['filters-container']}>
        <Select placeholder='Genre'>
          {data.map((element: string) => {
            return (
              <SelectOption
                onClick={() => {
                  const newState = addFiltersHandler(element, filters.genre);
                  setFilters((oldState) => {
                    return { ...oldState, genre: newState };
                  });
                }}
                key={element}
              >
                {element}
              </SelectOption>
            );
          })}
        </Select>
        <Select placeholder='Type'>
          {data.map((element: string) => {
            return <SelectOption key={element}>{element}</SelectOption>;
          })}
        </Select>
        <Select placeholder='Status'>
          {data.map((element: string) => {
            return <SelectOption key={element}>{element}</SelectOption>;
          })}
        </Select>
        <Select placeholder='Dub'>
          {data.map((element: string) => {
            return <SelectOption key={element}>{element}</SelectOption>;
          })}
        </Select>
      </div>
      <div className={styles['select-handles-container']}>
        {filters.genre.map((element: string) => {
          return <SelectHandle key={element}>{element}</SelectHandle>;
        })}
        {filters.dub.map((element: string) => {
          return <SelectHandle key={element}>{element}</SelectHandle>;
        })}
        {filters.status.map((element: string) => {
          return <SelectHandle key={element}>{element}</SelectHandle>;
        })}
        {filters.type.map((element: string) => {
          return <SelectHandle key={element}>{element}</SelectHandle>;
        })}
      </div>
    </div>
  );
}
