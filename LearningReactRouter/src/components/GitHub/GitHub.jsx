import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function GitHub() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("https://api.github.com/users/GeetKaushik")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <>
      <div className="p-4">
        <div className="flex justify-center text-orange-700">
          <div>
            <img
              src={data.avatar_url}
              alt="GitHub Profile"
              className="rounded-3xl"
              width="300"
            />
          </div>
          <div className="self-center">
            <Link to={`https://github.com/GeetKaushik`} target="_blank" className="hover:underline">
              <h1 className="font-semibold text-3xl pl-4">{data.login}</h1>
            </Link>
            <Link to={`https://github.com/GeetKaushik?tab=repositories`} target="_blank" className="hover:underline">
              <h1 className="font-semibold text-xl p-4">
                GitHub Repos: {data.public_repos}
              </h1>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default GitHub;

export const githubInfoLoader = async () => {
  const response = await fetch("https://api.github.com/users/GeetKaushik");
  const data = await response.json();
  return data;
};
