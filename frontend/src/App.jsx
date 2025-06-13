import { Route, Routes } from "react-router";
import Homepage from "./pages/Homepage";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";


const App = () => {
  return (

    <div className="relative h-full w-full ">
      <div className="absolute inset-0 -z-10 pointer-events-none bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] 
  bg-[length:16px_16px] 
  [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,black_70%,transparent_100%)]">
      </div>

      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/note/:id" element={<NoteDetailPage />} />
      </Routes>
    </div>


  )
};

export default App