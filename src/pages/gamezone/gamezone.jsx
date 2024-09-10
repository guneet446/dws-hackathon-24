import Header from "../dashboard/header";
import Leaderboard from "./leaderboard";
import Game from "./play-game";

export const Gamezone = () => {
    return (
        <>
        <Header />
        <Game/>
        <Leaderboard />
        </>
    );
}