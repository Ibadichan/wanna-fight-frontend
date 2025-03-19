import { useState } from "react";
import { Link } from "react-router";
import ragnarImg from "../assets/ragnar.webp";
import kenshiImg from "../assets/kenshi.webp";
import novaImg from "../assets/nova.webp";

const players = [
  {
    name: "Ragnar",
    img: ragnarImg,
  },
  {
    name: "Kenshi",
    img: kenshiImg,
  },
  {
    name: "Nova",
    img: novaImg,
  },
];

function Game() {
  const [player, setPlayer] = useState("");

  return (
    <section>
      <div className="container flex min-h-screen flex-col justify-center">
        <title>Wanna fight?</title>

        <div className="px-40">
          <Link to="/" className="underline">
            ← homepage
          </Link>
          <h1 className="mb-15 text-[30px] leading-[40px] font-semibold">
            {player ? `${player.toUpperCase()} attack!` : "Select your player"}
          </h1>

          {player ? (
            <>
              <img
                src={players.find((item) => item.name === player)?.img}
                width={100}
                height={100}
                alt=""
                className="mb-10"
              />
              <button type="button" onClick={() => setPlayer("")} className="underline">
                Reset player
              </button>
            </>
          ) : (
            <ul className="flex gap-10">
              {players.map((player) => (
                <li
                  key={player.name}
                  className="flex"
                  onClick={() => setPlayer(player.name)}
                >
                  <img src={player.img} width={100} height={100} alt="" />
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </section>
  );
}

export default Game;
