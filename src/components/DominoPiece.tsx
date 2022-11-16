export function DominoPiece(){
  return(
  <div className="bg-white rounded-lg border-solid border-2 border-slate-900 w-20 h-36 flex-1 m-8">
    <section className="h-1/2 flex justify-center items-center border-b-2 border-solid border-slate-900">
      <span className="text-lg">2</span>
    </section>
    <section className="h-1/2 flex justify-center items-center border-t-2 border-solid border-slate-900">
      <span className="text-lg">3</span>
    </section>
  </div>
  )
}