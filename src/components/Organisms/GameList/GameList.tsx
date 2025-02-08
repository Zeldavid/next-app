import Card from "@/components/Molecules/Card/Card";
import { Game } from "@/utils/endpoint";
import React from "react";

export interface DataGame {
  games: Game[];
  availableFilters: string[];
  totalPages: number;
  currentPage: number;
}

export interface DataGameProps {
  data: DataGame;
}

const GameList = ({ data }: DataGameProps) => {
  const { games, availableFilters, totalPages, currentPage } = data;

  return games.map((game: Game) => {
    return <Card key={game.id} data={game} />;
  });
};

export default GameList;
