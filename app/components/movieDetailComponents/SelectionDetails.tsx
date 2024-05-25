import { RootState } from "@/app/store/store";
import { useSelector } from "react-redux";

const SelectionDetails = ({ movie }: { movie: any }) => {
  const selectedMovie = useSelector(
    (store: RootState) => store.movieState.selectedMovie
  );
  return (
    <div className="">
      <p className="flex  text-lg border-b border-base-300 pb-2 mb-4">
        <span className="mr-2">Movie Name :</span>
        <span className="font-medium">{movie?.title}</span>
      </p>
      <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
        <span className="mr-2">Date : </span>
        <span className="font-medium">{selectedMovie?.day}</span>
      </p>
      <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
        <span className="mr-2">Time : </span>
        <span className="font-medium">{selectedMovie?.time}</span>
      </p>
      <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
        <span className="mr-2">Seat Area : </span>
        <span className="font-medium">{selectedMovie?.seatType}</span>
      </p>
      <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
        <span className="mr-2">Seats : </span>
        <span className="font-medium">
          {selectedMovie?.seats?.map((seat) => {
            return <span key={seat}>{seat},</span>;
          })}
        </span>
      </p>

      <p className="flex text-lg border-b border-base-300 pb-2 mb-4">
        <span className="mr-2">Extras : </span>
        <span className="font-medium">
            {selectedMovie?.extras?.map((snack, index) => {
              return <span key={index}>{snack.snackAndDrink?.name}, </span>;
            })}
        </span>
      </p>

      <p className="mt-4 flex justify-between text-lg font-bold  pb-2">
        <span className="font-bold">Total Price</span>
        <span className="font-bold">{selectedMovie?.totalPrice}.0ETB</span>
      </p>
    </div>
  );
};

export default SelectionDetails;
