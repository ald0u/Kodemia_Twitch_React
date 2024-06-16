import React from 'react';

const Menu = ({ channels }) => {
    return (
        <aside className="bg-[#1f1f23] mx-0 mt-1 rounded-lg p-4 gap-4 space-y-4">
            <div className="hidden lg:flex items-center mb-2 gap-2">
                <h2 className="text-white text-lg font-semibold mb-0">CANALES RECOMENDADOS</h2>
                <img
                    className="w-full h-auto mb-2 rounded-full hover:opacity-80 cursor-pointer lg:w-auto lg:h-auto lg:hidden"
                    alt="TheGrefg"
                    src="https://static-cdn.jtvnw.net/jtv_user_pictures/58da019c-c362-44a7-9e61-a94a293bdd88-profile_image-70x70.png"
                />
            </div>
            {channels.map((channel, index) => (
                <div key={index} className="overflow-hidden">
                    <div className="bg-[#1f1f23] rounded-lg p-4 items-center gap-3 hover:bg-twitch-hover cursor-pointer hidden lg:flex">
                        <img
                            className="w-16 h-16 rounded-full lg:w-auto lg:h-auto"
                            alt="TheGrefg"
                            src="https://static-cdn.jtvnw.net/jtv_user_pictures/58da019c-c362-44a7-9e61-a94a293bdd88-profile_image-70x70.png"
                        />

                        <div className="flex flex-col flex-1">
                            <div className="flex items-center justify-between">
                                <h3 className="text-white font-semibold text-sm md:text-base overflow-hidden whitespace-nowrap">{channel.name}</h3>
                                <div className="h-2 w-2 bg-red-500 rounded-full"></div>
                                <span className="text-gray-400 text-xs md:text-sm ml-1">{channel.viewers}</span>
                            </div>
                            <p className="text-gray-400 text-xs md:text-sm overflow-hidden whitespace-nowrap">{channel.game}</p>
                            <div className="flex items-center gap-2">
                                <span className="text-green-400 text-xs md:text-sm">Live</span>
                            </div>
                        </div>
                    </div>
                    <img
                        key={index}
                        className="w-full h-auto mb-2 rounded-full hover:opacity-80 cursor-pointer lg:hidden"
                        alt={channel.name}
                        src={channel.icon}
                    />
                </div>
            ))}
        </aside>
    );
};

export default Menu;
