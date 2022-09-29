import React, { createContext, useState } from 'react'


export const ContextApp = createContext()

const ContextAPI = ({ children }) => {
  const [darkTheme, setDarkTheme] = useState(true)
  const [query, setQuery] = useState("")
  const [results, setResults] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const searchApi = (query) => {
    setIsLoading(true)

    const options = {
      method: "GET",
      headers: {
        "X-BingApis-SDK": "true",
        "X-RapidAPI-Key": import.meta.env.VITE_X_RapidAPI_Key,
        "X-RapidAPI-Host": "bing-web-search1.p.rapidapi.com",
      },
    };

    fetch(
      `https://bing-web-search1.p.rapidapi.com/search?q=${query}&mkt=en-us&count=20&safeSearch=Off&textFormat=Raw&offset=40&freshness=Day`,
      options
    )
      .then((response) => response.json())
      .then((response) => {
        // console.log(response);
        setResults(response.webPages.value)
        setIsLoading(false)
      })
      .catch((err) => console.error(err));
  };

  return (
    <ContextApp.Provider value={{
      darkTheme,
      setDarkTheme,
      query,
      setQuery,
      results,
      setResults,
      isLoading,
      setIsLoading,
      searchApi
    }}>
      {children}
    </ContextApp.Provider>
  )
}

export default ContextAPI