import React from 'react'
import { Patent } from '@services/Patent/Interfaces/PatentResponse'
import PatentCard from './PatentCard'

export default function PatentGrid({ items }: { items: Patent[] }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 pb-10">
      {items.map((p) => (
        <PatentCard key={p.patentId} patent={p} />
      ))}
    </div>
  )
}
