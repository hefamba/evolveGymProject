import { SelectedPage } from '@/shared/types';
import React from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll-ts';

type Props = {
  page: SelectedPage;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

function Link({ page, selectedPage, setSelectedPage }: Props) {
  const lowerCasePage = page
    .toLocaleLowerCase()
    .replace(/^a-zA-Z0-9/gi, '') as SelectedPage;

  return (
    <AnchorLink
      className={`${
        selectedPage === lowerCasePage ? 'text-primary-500' : ''
      } transition duration-500 hover:text-primary-300`}
      href={`#${lowerCasePage}`}
      onClick={() => setSelectedPage(lowerCasePage)}>
      {page}
    </AnchorLink>
  );
}

export default Link;
