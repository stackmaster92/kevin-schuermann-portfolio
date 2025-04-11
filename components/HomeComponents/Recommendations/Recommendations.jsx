import RecommendationCard from "./RecommendationCard";
import axios from "axios";
import Link from "next/link";
import { useQuery } from "react-query";
import ParagraphSkeleton from "../../Common/ParagraphSkeleton";

const Recommendations = ({ limit }) => {
  const { isLoading, error, data } = useQuery("recommendations", () =>
    axios
      .get("api/recommendations")
      .then(({ data }) => data)
      .catch((error) => console.error("Error fetching testimonials:", error))
  );

  return (
    <>
      <div className="px-4 md:px-8 py-4 mt-6 text-xl font-bold text-Snow">
        My Work History
      </div>
      <div className="grid w-full h-full mt-5 justify-center grid-flow-row md:grid-cols-1 auto-rows-auto gap-x-4 gap-y-4 px-2 md:px-8 pb-8">
        {isLoading
          ? [1, 2, 3, 4, 5].map((data, index) => (
              <ParagraphSkeleton
                className={"p-8 h-full w-full relative"}
                key={index}
              />
            ))
          : data
              ?.slice(0, limit)
              .map((data, key) => <RecommendationCard key={key} data={data} />)}
      </div>
      {limit && (
        <div className="grid justify-center">
          <Link
            onClick={(e) => {}}
            href={"/work_history"}
            className={`transition flex items-center px-4 py-2 text-base font-semibold text-Green hover:text-SilverGray hover:bg-EveningBlack rounded-xl`}
          >
            Show More...
          </Link>
        </div>
      )}
    </>
  );
};

export default Recommendations;
