import React from 'react'
import InputField from '@components/InputField'
import { HiOutlineSquares2X2, HiOutlineListBullet, HiOutlineArrowPath } from 'react-icons/hi2'


interface Props {
    searchValue: string
    onSearchChange: (v: string) => void
    onToggleView: () => void
    onRefresh: () => void
    isGridView: boolean
}


export default function PatentToolbar({
    searchValue,
    onSearchChange,
    onToggleView,
    onRefresh,
    isGridView
}: Props) {
    return (
        <div className="flex flex-row items-center gap-4">
            <button
                onClick={onToggleView}
                className="border p-2 rounded"
                aria-label="Cambiar vista"
            >
                {isGridView ? (
                    <HiOutlineListBullet className="w-5 h-5" />
                ) : (
                    <HiOutlineSquares2X2 className="w-5 h-5" />
                )}
            </button>
            <InputField
                label=""
                placeholder="Buscar Documento"
                value={searchValue}
                onChange={onSearchChange}
            />

            <button
                onClick={onRefresh}
                className="border p-2 rounded"
                aria-label="Recargar lista"
            >
                <HiOutlineArrowPath className="w-5 h-5" />
            </button>
        </div>
    )
}
