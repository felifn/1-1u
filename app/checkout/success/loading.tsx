export default function CheckoutSuccessLoading() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Header Skeleton */}
      <header className="border-b border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="h-12 bg-zinc-800 rounded animate-pulse mx-auto w-32"></div>
        </div>
      </header>

      {/* Content Skeleton */}
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Success Header Skeleton */}
        <div className="text-center mb-12">
          <div className="w-20 h-20 bg-zinc-800 rounded-full mx-auto mb-6 animate-pulse"></div>
          <div className="h-10 bg-zinc-800 rounded mx-auto w-64 mb-4 animate-pulse"></div>
          <div className="h-6 bg-zinc-800 rounded mx-auto w-48 mb-2 animate-pulse"></div>
          <div className="h-5 bg-zinc-800 rounded mx-auto w-32 animate-pulse"></div>
        </div>

        {/* Order Summary Skeleton */}
        <div className="bg-zinc-900 rounded-lg p-8 mb-8">
          <div className="h-8 bg-zinc-800 rounded w-48 mb-6 animate-pulse"></div>
          <div className="space-y-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex-1">
                <div className="h-6 bg-zinc-800 rounded w-64 mb-2 animate-pulse"></div>
                <div className="h-4 bg-zinc-800 rounded w-32 animate-pulse"></div>
              </div>
              <div className="h-6 bg-zinc-800 rounded w-20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex justify-between items-center pt-6 border-t border-zinc-700">
            <div className="h-6 bg-zinc-800 rounded w-16 animate-pulse"></div>
            <div className="h-6 bg-zinc-800 rounded w-24 animate-pulse"></div>
          </div>
        </div>

        {/* Next Steps Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-zinc-900 rounded-lg p-6">
              <div className="w-12 h-12 bg-zinc-800 rounded mx-auto mb-4 animate-pulse"></div>
              <div className="h-5 bg-zinc-800 rounded w-32 mx-auto mb-2 animate-pulse"></div>
              <div className="h-4 bg-zinc-800 rounded w-full animate-pulse"></div>
            </div>
          ))}
        </div>

        {/* Action Buttons Skeleton */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <div className="h-12 bg-zinc-800 rounded w-40 animate-pulse"></div>
          <div className="h-12 bg-zinc-800 rounded w-32 animate-pulse"></div>
        </div>
      </div>
    </div>
  )
}
