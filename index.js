// Component

import React, { Fragment, useState } from 'react';

const PaginationComponent = () => {
   const [currentPage,setCurrentPage] = useState(1);
   const handlePageChange = (page) => {
      setCurrentPage(page)
   }
   const items = [];
   const startIndex = (pageNumber - 1) * pageSize;
   const newArray = items.slice(currentPage,startIndex)
   return(
      <Fragment>
         <Pagination
            data={posts}
            RenderComponent={Post}
            title="Posts"
            pageLimit={5}
            dataLimit={10}
          />
         <PaginationOld currentPage={currentPage} itemsCount='5' pageSize='5' onPageChange={handlePageChange} />
      </Fragment>
   )
};
const PaginationOld = (props) => {
   const {itemsCount,pageSize,currentPage,onPageChange} = props;  
   const pageCount = Math.ceil(itemsCount / pageSize);
   const pages = [...Array(1,pageCount+1)]

   if ( pageCount === 1 ) return null;

   return(
      <Fragment>
         {pages.map(page => {
            return <div onClick={() => onPageChange(page)} ></div>
         })}
      </Fragment>
   )
}