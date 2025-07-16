import axios from 'axios'
import NodeCache from 'node-cache'
import wrapAsync from '../utils/WrapAsync.js'


const cache = new NodeCache({stdTTL:86400})


export const GetAyatToday = wrapAsync(async (req,res)=>{

    
const key =  new Date().toISOString().slice(0,10)

let data = cache.get(key)

if(!data){
    const num = (Math.floor(Date.now() / 864e5) % 6236) + 1;
    const { data: apiRes } = await axios.get(
      `https://api.alquran.cloud/v1/ayah/${num}/en.asad`
    );

    data ={

    arabic: apiRes.data.text,
    translation: apiRes.data.edition.name,
    surah: apiRes.data.surah.name,
    numberInsurah: apiRes.data.numberInsurah

}
cache.set(key,data)
}

 return res.status(200).json({
    message:"success",
    data})
})
