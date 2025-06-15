import { useSelector } from "react-redux";
import { RootState, useAppDispatch, increment, decrement, AppDispatch } from "@/store/store";

const CounterApp: React.FC = () => {
    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch: AppDispatch = useAppDispatch();

  return (
    <div className="min-h-screen bg-gradient-to-r from-yellow-400 to-pink-500 flex flex-col justify-center items-center text-white">
      <h1 className="text-6xl font-extrabold mb-6">Fun Counter App</h1>
      <p className="text-lg font-medium mb-4">
        Current count: {count} {count === 0 ? "No clicks yet!" : count % 10 === 0 ? "You're on fire!" : ""}
      </p>
      <div className="text-6xl font-bold mb-8">{count}</div>
          <div className="flex space-x-4">
              <button onClick={() => dispatch(increment())}>Increment</button>
              <button onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <p className="mt-8 text-sm text-white opacity-75">Keep clicking, who knows what happens at 100?</p>
    </div>
  );
};

export default CounterApp;
