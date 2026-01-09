export default function FormularioInscripcion({ className }: { className?: string }) {
    const inputClass = "shadow appearance-none border rounded w-full p-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline";
    return (
        <div className={`drop-shadow-lg/50 h-full flex flex-col items-center justify-center bg-white p-12 rounded-2xl ${className}`}>
            <h1 className="text-4xl font-bold">Formulario de Inscripción</h1>
            <form className="w-full max-w-md">
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">Nombre</label>
                        <input className={inputClass} id="name" type="text" placeholder="Nombre" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="lastname">Apellido</label>
                        <input className={inputClass} id="lastname" type="text" placeholder="Apellido" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">Email</label>
                        <input className={inputClass} id="email" type="email" placeholder="Email" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">Teléfono</label>
                        <input className={inputClass} id="phone" type="tel" placeholder="Teléfono" />
                    </div>
                </div>
                <div className="grid md:grid-cols-2 grid-cols-1 gap-4 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="company">Empresa</label>
                        <input className={inputClass} id="company" type="text" placeholder="Empresa" />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="position">Cargo</label>
                        <input className={inputClass} id="position" type="text" placeholder="Cargo" />
                    </div>
                </div>
                <div className="mb-6">
                    <label className="flex items-center text-sm text-gray-700">
                        <input 
                            type="checkbox" 
                            className="mr-2 h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                            required
                        />
                        <span>
                            Acepto los{" "}
                            <a href="#" className="hover:underline font-semibold">
                                términos y condiciones de la feria
                            </a>
                            {" "}y los{" "}
                            <a href="#" className="hover:underline font-semibold">
                                términos y condiciones del sorteo
                            </a>
                        </span>
                    </label>
                </div>
                <div className="mb-6">
                    <label className="flex items-center text-sm text-gray-700">
                        <input 
                            type="checkbox" 
                            className="mr-2 h-4 w-4 focus:ring-primary border-gray-300 rounded"
                        />
                        <span>
                            Acepto ser parte del Círculo de Especialistas conforme a sus{" "}
                            <a href="#" className="hover:underline font-semibold">
                                términos y condiciones
                            </a>
                        </span>
                    </label>
                </div>
                
                <button className="w-full bg-primary text-white px-6 py-2 rounded hover:bg-primary/80 cursor-pointer" type="submit">Enviar</button>
            </form>
        </div>
    );
}