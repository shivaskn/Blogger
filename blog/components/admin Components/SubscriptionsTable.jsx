import React from 'react'

const SubscriptionsTable = ({ email, id, date, deleteEmail }) => {

    const emailDate = new Date(date);

  return (
    <tr className="bg-white hover:bg-gray-50 transition-colors duration-200 border-b text-left">
      <th
        scope="row"
        className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap"
      >
        {email ? email : 'No Subscription Email Available'}
      </th>
      <td className="px-6 py-4 text-gray-700 hidden sm:table-cell">
        {emailDate.toDateString()}
      </td>
      <td onClick={()=>deleteEmail(id)} className="px-6 py-4 text-red-500 font-semibold cursor-pointer hover:text-red-700">
        ✕
      </td>
    </tr>
  )
}

export default SubscriptionsTable
