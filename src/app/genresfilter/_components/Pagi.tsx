"use client"

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {useState} from "react"

export const Pagi = ({ total_pages,moviesPerPage}: { total_pages: number,moviesPerPage:number }) => {
const [currentPage, setCurrentPage]=useState(1)


const totalPages = Math.ceil(total_pages/moviesPerPage)

const startIndex = (currentPage-1)*moviesPerPage

const currentMovies = movies.slice(startIndex, startIndex+ moviesPerPage)


return (
    <Pagination className="mt-8">
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">4</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">{total_pages}</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          {/* <PaginationNext href={`/genresfilter?genreId=${}&genreName=Western&page=`} /> */}
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
};
