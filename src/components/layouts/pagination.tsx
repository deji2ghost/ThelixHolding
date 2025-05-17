import { setPage } from '@/store/pagination';
import { Button } from '../ui/button'
import { useAppDispatch } from '@/store/hook';

interface PaginationProps{
    currentPage: number, 
    totalPages: number
}
const Pagination = ({currentPage, totalPages}: PaginationProps) => {
    const dispatch = useAppDispatch();
  return (
    <div className="mt-4 flex gap-2 justify-center">
          <Button
            onClick={() => dispatch(setPage(Math.max(currentPage - 1, 1)))}
            disabled={currentPage === 1}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Previous
          </Button>
          <span className="px-2">
            Page {currentPage} of {totalPages}
          </span>
          <Button
            onClick={() =>
              dispatch(setPage(Math.min(currentPage + 1, totalPages)))
            }
            disabled={currentPage === totalPages}
            className="px-3 py-1 border rounded disabled:opacity-50"
          >
            Next
          </Button>
        </div>
  )
}

export default Pagination
