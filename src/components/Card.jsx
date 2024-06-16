import React from 'react';

const Card = ({ channels }) => {
    return (
        <div className="container mx-auto p-4 pt-6 md:p-6 lg:p-12">
            <h2 className="text-xl font-bold text-purple-300 mb-4 md:mb-6 lg:mb-8">Canales en directo que podrían gustarte</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-4">
                {channels.map((channel, index) => (
                    <div key={index} className="bg-[#0e0e10] rounded-lg overflow-hidden hover:bg-gray-700 transition duration-200 ease-in-out">
                        <img src={channel.icon} alt={channel.name} className="w-full h-32 object-cover" />
                        <div className="p-4">
                            <h3 className="text-lg font-bold text-white">{channel.name}</h3>
                            <p className="text-gray-400">{channel.game}</p>
                            <p className="text-gray-400 text-sm">{channel.title}</p>
                            <div className="flex items-center gap-2 mt-2">
                                <span className="text-green-400">Live</span>
                                <span className="text-gray-400">{channel.viewers}</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Card;
