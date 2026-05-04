export default function pagebaru() {
    return(
        <section className="h-screen bg-gray-300 p-8 flex flex-col justify-center items-center gap-2">
            <div className="flex gap-2">
                <div className="bg-gray-100 p-8 h-100 w-90 rounded-3xl flex flex-col">
                    <div className="flex gap-6 flex-row justify-between">
                        <p className="font-bold text-black">Client details</p>
                        <img src="x.svg" alt="Client details"></img>
                    </div>
                    <div className="flex flex-col space-between">
                        <div className="flex gap-3 flex-row">
                            <img src="elon.jpg" width="40" height="40" alt="Client details"></img>
                            <p className="font-bold text-black">Elon Musk</p>
                        </div>
                        <div className="bg-green-400 p-2 h-10 w-20 rounded-2xl flex flex-col justify-between">
                            <img src="award.svg" width="15" height="15" alt="award"></img>
                            <p className="font-bold text-black">Verified</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}