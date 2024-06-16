import Twitch from "./Twitch";

const NavBar = () => {
    return (
        <nav className="col-start-1 col-end-3 grid grid-cols-3 bg-[#1f1f23] h-13 px-4 items-center">
            <div className="flex flex-row items-center gap-1">
                <Twitch height="1.8rem" width="3rem" />
                <button className="hidden md:block h-5 md:h-10 w-[50px] text-white text-center md:text-sm font-mono text-lg font-black tracking-tighter">
                    <p>Explorar</p>
                </button>
                <img
                    src="https://img.icons8.com/?size=100&id=98963&format=png&color=FFFFFF"
                    alt=""
                    className="w-5 h-5 rounded-full ml-2 md:ml-10"
                />
            </div>
            <div class="relative flex items-center w-full bg-gray-800 rounded-md">
                <input type="text" placeholder="Buscar" class="bg-[#18181b] border border-opacity-40 border-gray-300 text-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50 px-3 py-2 w-full" />
                <button class="absolute bg-[#53535f61] p-2.5 right-0">
                    <svg class="h-5 w-5 text-gray-400 hover:text-gray-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                    </svg>
                </button>
            </div>
            <div className="hidden lg:flex justify-end items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" role="presentation">
                    <path fill="white" fill-rule="evenodd" d="M13.798 10.456 10 6.657l-3.798 3.799L4 8.805V13h12V8.805l-2.202 1.65zM18 5v8a2 2 0 0 1-2 2H4a2.002 2.002 0 0 1-2-2V5l4 3 4-4 4 4 4-3z" clip-rule="evenodd"></path>
                </svg>
                <button className="text-white bg-[#3a3a3d] hover:bg-[#4a4a4d] px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-md text-sm md:text-base font-medium">
                    Iniciar sesión
                </button>
                <button className="text-white bg-[#9147ff] hover:bg-[#772ce8] px-2 py-1 md:px-3 md:py-1.5 lg:px-4 lg:py-2 rounded-md text-sm md:text-base font-medium">
                    Registrarse
                </button>
                <svg width="20" height="20" viewBox="0 0 20 20" focusable="false" aria-hidden="true" role="presentation">
                    <path fill="white" fillRule="evenodd" d="M5 7a5 5 0 1 1 6.192 4.857A2 2 0 0 0 13 13h1a3 3 0 0 1 3 3v2h-2v-2a1 1 0 0 0-1-1h-1a3.99 3.99 0 0 1-3-1.354A3.99 3.99 0 0 1 7 15H6a1 1 0 0 0-1 1v2H3v-2a3 3 0 0 1 3-3h1a2 2 0 0 0 1.808-1.143A5.002 5.002 0 0 1 5 7zm5 3a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" clipRule="evenodd"></path>
                </svg>
            </div>

        </nav>
    );
}

export default NavBar;
