const fetchApi = async (url) => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`❌ Error while fetching ${url}.\n${error}`);
  }
};

export const fetchItems = async (params = "") => {
  // @todo: if time helps, accept an object for `params instead of string & use URLSearchParams.set
  return await fetchApi(
    `https://market-husam.herokuapp.com//api/items${params && `?${params}`}`
  );
};

export const fetchCompanies = async () => {
  return await fetchApi("https://market-husam.herokuapp.com//api/companies");
};
