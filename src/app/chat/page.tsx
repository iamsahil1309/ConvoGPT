import Image from "next/image";

export default function ChatPage() {
    return(
        <main className="flex-1">
            <section className="w-full flex flex-col justify-center items-center py-6 md:py-12 lg:py-16 xl:py-24">
                <div className="container px-4 md:px-6">
                    <div className="flex flex-col items-center space-y-4 text-center">
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                                Welcome to Convo-GPT
                            </h1>
                            <p className="mx-auto max-w-[700px] text-gray-600 md:text-lg dark:text-gray-400">
                                Convo-GPT is a chatbot that can answer any question you have.
                                Just
                                type your question and Convo-GPT respond with an answer.
                            </p>
                        </div>
                        <div className="w-full max-w-sm space-y-2">
                            <div className="relative w-full h-48 mt-12 border rounded-lg">
                                <Image
                                    src="/xaiLogo.png"
                                    alt="logo"
                                    layout="fill"
                                    className="object-contain aspect-square dark:invert rounded-lg"
                                    />
                                    <div className="absolute bottom-0 right-0 left-0 bg-black/90 text-white p-2 rounded-b-lg font-bold uppercase">
                                        Powered By
                                    </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="w-full flex items-center justify-center">
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        
                    </div>
                </div>
            </section>
        </main>
    )
}