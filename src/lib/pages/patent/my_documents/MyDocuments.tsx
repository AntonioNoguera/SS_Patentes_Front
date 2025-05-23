



import React, { useEffect, useState } from 'react'
import MotionImplementation, { Direction } from '@components/MotionImplementation'
import { Patent, } from '@services/Patent/Interfaces/PatentResponse'
import { patentService } from '@services/Patent/PatentService' 
import PatentToolbar from '../in_process/components/PatentToolbar'
import PatentPagination from '../in_process/components/PatentPagination'
import PatentGrid from '../in_process/components/PatentGrid'
import PatentList from '../in_process/components/PatentList'


export default function MyDocuments() {
  const [patentes, setPatentes] = useState<Patent[]>([])
  const [error, setError] = useState<string | null>(null)
  const [search, setSearch] = useState('')
  const [page, setPage] = useState(1)
  const pageSize = 5

  useEffect(() => {
    const fetchPatents = async () => {
      try {
        const data = await patentService.listAll()
        setPatentes(data)
      } catch (err: any) {
        setError(err.message ?? 'Error desconocido')
      }
    }
    fetchPatents()
  }, [])

  const [isGridView, setIsGridView] = useState(true);


  const filtered = patentes.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  )
  const totalPages = Math.ceil(filtered.length / pageSize)
  const currentItems = filtered.slice(
    (page - 1) * pageSize,
    page * pageSize
  )

  if (error) {
    return (
      <div className="p-5">
        <p className="text-red-500">Error: {error}</p>
      </div>
    )
  }

  if (patentes.length === 0) {
    return (
      <div className="p-5 flex h-full">
        <p className="text-gray-500">Cargando patentes…</p>
      </div>
    )
  }

  return (
    <MotionImplementation direction={Direction.RIGHT}>
      <section className="h-full flex flex-col gap-5 p-5">
        <h1 className="text-orange100 text-3xl font-semibold">
          Mis Documentos
        </h1>

        <div className='flex flex-row justify-between'>
          <PatentToolbar
            searchValue={search}
            onSearchChange={(v) => {
              setSearch(v)
              setPage(1)
            }}
            onToggleView={() => {
              setIsGridView((prev) => !prev)
            }}
            onRefresh={() => {
              setSearch('')
              setPage(1)
            }}
            isGridView={isGridView}
          />
          
          <PatentPagination
            page={page}
            totalPages={totalPages}
            onPrev={() => setPage((p) => Math.max(p - 1, 1))}
            onNext={() => setPage((p) => Math.min(p + 1, totalPages))}
          />
        </div>


        <div className="h-[calc(100vh-200px)] overflow-y-auto  pr-4">
          {isGridView ? (
            <PatentGrid items={currentItems} />
          ) : (
            <PatentList items={currentItems} />
          )}
        </div>

      </section>
    </MotionImplementation>
  )
}
