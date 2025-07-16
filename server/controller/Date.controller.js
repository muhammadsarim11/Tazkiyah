// controllers/hijri.controller.js

import axios from "axios";
import NodeCache from "node-cache";
import catchAsync from "../utils/WrapAsync.js";

// Create a new cache instance that holds data for 24 hours
const cache = new NodeCache({ stdTTL: 86400 }); // 86400 seconds = 24 hours

export const getHijriDate = catchAsync(async (req, res) => {
  // STEP 1: Use today's date as the cache key
  const key = new Date().toISOString().slice(0, 10); // 'YYYY-MM-DD'

  // STEP 2: Check if we already have today's data cached
  let data = cache.get(key);

  if (!data) {
    // STEP 3: Data not in cache → get today's Gregorian date
    const today = new Date();                     // full date object
    const day = today.getDate();                  // 1–31
    const month = today.getMonth() + 1;           // 0-based, so +1 for 1–12
    const year = today.getFullYear();             // full year like 2025

    // STEP 4: Format the date for Aladhan API (DD-MM-YYYY)
    const formattedDate = `${day}-${month}-${year}`; // e.g. "13-7-2025"

    // STEP 5: Make API call to convert Gregorian to Hijri
    const { data: response } = await axios.get(
      `https://api.aladhan.com/v1/gToH?date=${formattedDate}`
    );

    // STEP 6: Extract needed fields from response
    const hijri = response.data.hijri;

    data = {
      hijriDate: hijri.date,          // full hijri date e.g. "6 Muharram 1446"
      weekday: hijri.weekday.en,      // weekday in English e.g. "Wednesday"
      month: hijri.month.en,          // month name e.g. "Muharram"
      year: hijri.year,               // Hijri year e.g. "1446"
      events: hijri.holidays || [],   // optional holidays (e.g. "Eid")
    };

    // STEP 7: Cache the data for 24 hours
    cache.set(key, data);
  }

  // STEP 8: Return the cached or fresh data
  return res.status(200).json({
    message: "success",
    data,
  });
});
