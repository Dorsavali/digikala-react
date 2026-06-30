import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggested } from "../Redux/Suggested/ActionSuggested";

import SuggestedDesktop from "./SuggestedDesktop";
import SuggestedMobile from "./SuggestedMobile";

const Suggested = () => {
  const dispatch = useDispatch();

  const { suggested, loading, error } = useSelector(
    (state) => state.suggested
  );

  useEffect(() => {
    dispatch(fetchSuggested());
  }, [dispatch]);

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;

  return (
    <>
      <div className="hidden lg:block">
        <SuggestedDesktop suggested={suggested} />
      </div>

      <div className="block lg:hidden">
        <SuggestedMobile suggested={suggested} />
      </div>
    </>
  );
};

export default Suggested;