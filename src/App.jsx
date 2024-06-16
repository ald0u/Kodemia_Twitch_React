import Content from './components/Content'
import Menu from './components/Menu'
import NavBar from './components/NavBar'
import './index.css'

function App() {

  const channels = [
    {
        name: "TheGrefg",
        game: "Rust",
        viewers: "7956",
        icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/58da019c-c362-44a7-9e61-a94a293bdd88-profile_image-70x70.png"
    },
    {
        name: "CrystalMolly",
        game: "Conversaciones",
        viewers: "12677",
        icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/f1f5921c-bf2e-4232-9610-b4e2fdd8a64d-profile_image-70x70.png"
    },
    {
        name: "TheGrefg",
        game: "Rust",
        viewers: "7956",
        icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/58da019c-c362-44a7-9e61-a94a293bdd88-profile_image-70x70.png"
    },
    {
        name: "CrystalMolly",
        game: "Conversaciones",
        viewers: "12677",
        icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/f1f5921c-bf2e-4232-9610-b4e2fdd8a64d-profile_image-70x70.png"
    },
    {
        name: "TheGrefg",
        game: "Rust",
        viewers: "7956",
        icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/58da019c-c362-44a7-9e61-a94a293bdd88-profile_image-70x70.png"
    },
    {
        name: "CrystalMolly",
        game: "Conversaciones",
        viewers: "12677",
        icon: "https://static-cdn.jtvnw.net/jtv_user_pictures/f1f5921c-bf2e-4232-9610-b4e2fdd8a64d-profile_image-70x70.png"
    },
];

  return (
    <main className='w-full min-h-screen  grid grid-cols-[20%_1fr] grid-rows-[3.2rem_1fr]'>
      <NavBar />
      <Menu channels={channels}/>
      <Content />
    </main>
  )
}

export default App
