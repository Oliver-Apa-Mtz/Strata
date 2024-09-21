const SkeletonPropertyItem = () => {
	return (
		<div className="animate-pulse">
			<div className="bg-slate-300 w-full h-[333px]"></div>
			<div className="flex-1 space-y-6 py-1">
				<div className="h-2 bg-slate-300 rounded"></div>
				<div className="space-y-3">
					<div className="h-2 bg-slate-300 rounded"></div>
					<div className="grid grid-cols-2 gap-4">
						<div className="h-2 bg-slate-300 rounded col-span-1"></div>
						<div className="h-2 bg-slate-300 rounded col-span-1"></div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default SkeletonPropertyItem