interface DominoPieceProps {
  topPart: number, 
  bottomPart: number
}
export function DominoPiece({topPart, bottomPart}:DominoPieceProps){
  return(
  <div className="bg-white rounded-lg border-solid border-2 border-slate-900 w-20 h-36 flex-1 m-8">
    <section className="h-1/2 flex justify-center items-center border-b-2 border-solid border-slate-900">
      <span className="text-lg">{topPart>=0?topPart:''}</span>
    </section>
    <section className="h-1/2 flex justify-center items-center border-t-2 border-solid border-slate-900">
      <span className="text-lg">{bottomPart>=0?bottomPart:''}</span>
    </section>
  </div>
  )
}