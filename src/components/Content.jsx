import Card from "./Card"
const channels = [
    {
        name: "CrystalMolly",
        game: "Rust",
        icon: "https://static-cdn.jtvnw.net/previews-ttv/live_user_crystalmolly-440x248.jpg", // Reemplazar con la URL correcta de la imagen
        viewers: "comedia",
        title: "MAMITAS BELLUM!!! dia 6 | DROPS ACTIVADOS 💕 | !reglas 💅"
    },
    {
        name: "TheGrefg",
        game: "Rust",
        icon: "https://static-cdn.jtvnw.net/previews-ttv/live_user_thegrefg-440x248.jpg", // Reemplazar con la URL correcta de la imagen
        viewers: "Saiyans",
        title: "BELLUM A RAIDEAAAR!!! 💥😈 TEAM PSICÓPATA con @starwraith @mixwell @leviathan @danikongi 🔥"
    },
    {
        name: "MYM_ALKAPONE",
        game: "Rust",
        icon: "https://static-cdn.jtvnw.net/previews-ttv/live_user_thegrefg-440x248.jpg", // Reemplazar con la URL correcta de la imagen
        viewers: "NoJuegoBaldurs",
        title: "Drops| Bellum Dia 6 | Tier 3"
    },
    {
        name: "Ricoy",
        game: "Rust",
        icon: "https://static-cdn.jtvnw.net/previews-ttv/live_user_ricoy-440x248.jpg", // Reemplazar con la URL correcta de la imagen
        viewers: "Español",
        title: "☢️ BELLUM REDEMPTION ☢️ Drop BOLTY-FACEMASK-SMALL BOX - día 5 - TIER 3 !drops !bellum"
    }
];

const Content = () => {
    return (
        <section className="col-start-2 flex flex-col col-end-3 row-start-2 row-end-3 bg-[#0e0e10]">
            <Card channels={channels} title={'Canales en directo que podrían gustarte'} />
            <Card channels={channels} title={'Es hora de los juegos independientes'} />
        </section>
    )
}

export default Content