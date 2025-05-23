import React from 'react'
import { Patent } from '@services/Patent/Interfaces/PatentResponse'
import { HiOutlineEllipsisVertical } from 'react-icons/hi2'

const statusColor = {
  approved: 'bg-green-500',
  pending: 'bg-yellow-500',
  rejected: 'bg-red-500',
  reviewing: 'bg-blue-500',
}

export default function PatentCard({ patent }: { patent: Patent }) {
  return (
    <article className="bg-PtahBg rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow flex flex-col justify-around">
      <div className="flex items-start justify-between mb-2">
        <div>
          <p className="text-sm font-medium">ID: {patent.patentId}</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-4 z-10'>
          <div
            className={`w-5 h-5 rounded-full  ${statusColor[patent.status as keyof typeof statusColor]}`}
          >
          </div>
          <HiOutlineEllipsisVertical className="w-5 h-5 text-gray-600" />
        </div>
      </div>

      <p className="text-lg font-semibold !-mt-2">{patent.name}</p>

      <img
        src={patent.previewUrl}
        alt={patent.name}
        className="w-full rounded-md object-cover"
      />
    </article>
  )
}
