import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchSuggested } from "../Redux/Suggested/ActionSuggested";

import SuggestedDesktop from "./SuggestedDesktop";
import SuggestedMobile from "./SuggestedMobile";

const Suggested = () => {
  const dispatch = useDispatch();

  const { suggested, loading } = useSelector(
    (state) => state.suggested
  );

  useEffect(() => {
    dispatch(fetchSuggested());
  }, [dispatch]);

  if (loading) return null;

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