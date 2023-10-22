class DataSource {
  static searchKodePos(keyword) {
    return fetch(`https://kodepos.vercel.app/search?q=${keyword}`)
      .then(response => {
        return response.json();
      })
      .then(responseJson => {
        if (responseJson.data) {
          return Promise.resolve(responseJson.data);
        } else {
          return Promise.reject(`${keyword} is not found`);
        }
      });
  }
}

export default DataSource;
