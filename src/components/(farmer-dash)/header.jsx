export default function Farmerhead({ section }) {

    return (
        <header className="z-10 fixed right-0 top-0 left-60 bg-yellow-50 py-3 px-4 h-16">
            <div className="max-w-4xl mx-auto">
                <div className="flex items-center justify-between">
                    <div>
                    </div>
                    <div className="text-3xl font-bold">{section}</div>
                    <div>

                    </div>
                </div>
            </div>
        </header>
    )
}