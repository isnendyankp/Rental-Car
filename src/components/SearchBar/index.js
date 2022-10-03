const SearchBar = (props) => {
  const { handleChangeName, handleSearch } = props;
  return (
    <div className="container position-relative pt-4">
      <div className="carSearch card position-absolute top-0 start-50 translate-middle p-3">
        <div className="row align-items-end">
          <div className="col">
            <label className="form-label">Nama Mobil</label>
            <input
              className="form-control"
              list="datalistOptions"
              id="exampleDataList"
              placeholder="Ketik nama/tipe mobil"
              onChange={(e) => handleChangeName(e)}
            />
            <datalist id="datalistOptions"></datalist>
          </div>
          <div className="col">
            <label for="exampleDataList" class="form-label">
              Kategori
            </label>
            <div className="input-group ">
              <select
                className="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                disabled
              >
                <option selected>Masukan Kapasitas Mobil</option>
                <option value="1">True</option>
                <option value="2">False</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label for="exampleDataList" class="form-label">
              Harga
            </label>
            <div className="input-group">
              <select
                className="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                disabled
              >
                <option selected>Masukan Harga Sewa per Hari</option>
                <option value="1">Tersedia</option>
                <option value="2">Disewa</option>
              </select>
            </div>
          </div>
          <div className="col">
            <label for="exampleDataList" class="form-label">
              Status
            </label>
            <div className="input-group">
              <select
                className="form-select"
                id="inputGroupSelect04"
                aria-label="Example select with button addon"
                disabled
              >
                <option selected>Pilih</option>
                <option value="1">Tersedia</option>
                <option value="2">Disewa</option>
              </select>
            </div>
          </div>
          <div className="col">
            <button
              onClick={handleSearch}
              className="btn btn-success w-100"
              type="button"
            >
              Cari Mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
