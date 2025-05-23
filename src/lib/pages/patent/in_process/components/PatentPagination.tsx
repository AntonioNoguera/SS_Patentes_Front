import React from 'react'
import { HiOutlineChevronLeft, HiOutlineChevronRight } from 'react-icons/hi2'

interface Props {
  page: number
  totalPages: number
  onPrev: () => void
  onNext: () => void
}

export default function PatentPagination({
  page,
  totalPages,
  onPrev,
  onNext,
}: Props) {
  return (
    <div className="flex flex-row items-center gap-2">
      <button
        onClick={onPrev}
        className="p-1 rounded bg-optionCardBg"
        disabled={page <= 1}
        aria-label="Página anterior"
      >
        <HiOutlineChevronLeft />
      </button>

      <div className="px-2 h-6 w-6 flex items-center justify-center rounded bg-inputBorders">
        {page}
      </div>

      <span className="text-gray-500">–</span>

      <div className="px-2 h-6 w-6 flex items-center justify-center rounded bg-optionCardBg">
        {totalPages}
      </div>

      <button
        onClick={onNext}
        className="p-1 rounded bg-optionCardBg"
        disabled={page >= totalPages}
        aria-label="Página siguiente"
      >
        <HiOutlineChevronRight />
      </button>
    </div>
  )
}
