"use client";

import Header from "../Header/Header";
import GameList, { DataGame } from "../GameList/GameList";
import { useEffect, useState } from "react";
import { fetchGames } from "@/services/fetchGames";
import Button from "@/components/Atoms/Button/Button";
import Loader from "@/components/Atoms/Loader/Loader";

const Catalog = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<DataGame>({
    games: [],
    availableFilters: [],
    totalPages: 0,
    currentPage: 1,
  });
  const [disabledButton, setDisabledButton] = useState(false);
  const [genre, setGenre] = useState("");

  const getItems = async (genre?: string, page?: number) => {
    // setLoading(true);
    const response = await fetchGames(genre, page);
    setLoading(false);
    setData(response);
  };

  useEffect(() => {
    if (typeof window !== "undefined") {
      getItems();
    }
  }, []);

  useEffect(() => {
    if (data.currentPage === 3) setDisabledButton(true);
  }, [data.currentPage]);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setLoading(true);
    const encodedQuery = encodeURIComponent(e.currentTarget.value);
    setGenre(encodedQuery);
    getItems(encodedQuery);
  };

  const handleShowMore = () => {
    setLoading(true);
    if (data.currentPage < 3) {
      // getItems(undefined, data.currentPage + 1);
      getItems(genre, data.currentPage + 1);
    }
  };

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <Header data={data} onChange={handleChange}></Header>
      <div className="flex flex-wrap justify-start py-12 px-32 max-sm:py-8 max-sm:px-6 gap-12">
        <GameList data={data} />
        <div className="w-[137px]">
          <Button
            textContent="Show more"
            buttonType="secondary"
            onClick={handleShowMore}
            disabled={disabledButton}
          />
        </div>
      </div>
    </>
  );
};

export default Catalog;
