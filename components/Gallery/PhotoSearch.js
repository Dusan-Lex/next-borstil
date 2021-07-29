import { Fragment } from "react";
import {
  StyledPhotoSearch,
  PhotoSearchForm,
  PhotoSearchInput,
} from "./PhotoSearchStyles";
import Search from "../../shared/components/svgs/Search";
import { ImaginedHeader } from "../../shared/components/ImaginedHeader/ImaginedHeader";

const PhotoSearch = ({ onSearch }) => {
  // const [input, setInput] = useState("");

  const changeHandler = (e) => {
    // setInput(e.target.value);
    onSearch(e.target.value);
  };

  return (
    <Fragment>
      <ImaginedHeader />
      <StyledPhotoSearch>
        <PhotoSearchForm
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <PhotoSearchInput
            id="photo"
            type="text"
            placeholder={"Pretraga nasih radova"}
            onChange={changeHandler}
            // value={input}
          />
          <Search />
        </PhotoSearchForm>
      </StyledPhotoSearch>
    </Fragment>
  );
};

export default PhotoSearch;
