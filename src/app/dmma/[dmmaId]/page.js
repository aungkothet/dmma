import dataList from '../../../assets/data.json'

export function generateStaticParams() {
  return [
    { dmmaId: '1' },
    { dmmaId: '2' },
    { dmmaId: '3' },
    { dmmaId: '4' },
    { dmmaId: '5' },
    { dmmaId: '6' },
  ]
}

export default function DmmaDetail({ params }) {
  const { dmmaId } = params
  const detail = dataList[dmmaId - 1]

  return (
    <div className="p-4 sm:ml-64">
      <div className="p-4 border-2 border-gray-200 border-dashed rounded-lg dark:border-gray-700 mt-14">
        <h1 className="text-2xl text-gray-400 dark:text-gray-500 text-center pb-4">
          {detail.title}
        </h1>
        <div className="text-2xl text-gray-400 dark:text-gray-500 grid grid-flow-col justify-center">
          <div dangerouslySetInnerHTML={{ __html: detail.content }}></div>
        </div>
      </div>
    </div>
  )
}
