import { useEffect, useState } from "react";
import { getFreeGames } from "../../services/gameService";
import { Game } from "../../utils/types";
import CardComponent from "../../components/CardComponent/CardComponent";

const LandingPage = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchGames = async () => {
      const data = await getFreeGames();
      setGames(data);
    };

    fetchGames();
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
      <header className="sticky top-0 w-full bg-white/30 backdrop-blur-lg shadow z-20">
        <div className="container mx-auto py-6 px-4">
          <h1 className="text-3xl font-bold text-center font-quicksand">
            Giveaway Games List
          </h1>
        </div>
      </header>
      <div className="top-52">
        <div className="relative w-full max-w-lg z-0 right-48">
          <div className="absolute top-0 md:right-64 sm:-left-4 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-0 md:right-64 sm:-right-4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute sm:top-10 md:-left-64 sm:left-20 w-72 h-72 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>
      </div>
      <main className="flex-grow flex flex-col items-center justify-center text-center px-4 z-10">
        <h2 className="text-2xl font-semibold mb-10 pt-8 font-jacquarda">
          Check it out!
        </h2>

        {/* Add the scrollable container here */}
        <div className="h-full overflow-y-auto overscroll-none overscroll-y-none">
          <div className="w-full max-w-max h-[700px]">
            {games.length > 0 ? (
              <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {games.map((game: Game) => (
                  <li
                    key={game.id}
                    className="bg-gray/30 shadow p-5 rounded-lg backdrop-blur-sm"
                  >
                    <CardComponent
                      thumbnail={game.thumbnail}
                      title={game.title}
                      description={game.description}
                      openGiveawayUrl={game.open_giveaway_url}
                    />
                  </li>
                ))}
              </ul>
            ) : (
              <p>Loading games...</p>
            )}
          </div>
        </div>
      </main>

      <footer className="w-full py-4 bg-gray-800 text-center text-white">
        &copy; 2024. Made with ☕️ by Pedro Alcantara.
      </footer>
    </div>
  );
};

export default LandingPage;
