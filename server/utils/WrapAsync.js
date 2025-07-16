// utils/catchAsync.js

// catchAsync ek wrapper hai jo async functions ke errors ko automatically handle karta hai
const catchAsync = (fn) => {
  return (req, res, next) => {
    // fn async function hai, agar koi error aaya to .catch(next) se Express ko error pass hoga
    fn(req, res, next).catch(next);
  };
};

export default catchAsync;
